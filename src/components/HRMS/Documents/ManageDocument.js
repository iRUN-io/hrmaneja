
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import EmptyState from '../../EmptyState';
import { getUser } from '../../../config/common';
import { createDocument, deleteDocument, getEmployeeDocument } from '../../../services/documents';
import UploadCloudinary from '../../common/UploadCloudinary';
import { toast } from "material-react-toastify";
import Time from '../../elements/Time';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { createActivity } from '../../../services/activities';

function ManageDocument(props) {
    const { fixNavbar } = props;
    const [formState, setFormState] = useState({
        selectedFile: null,
        documentName: '',
    })
    const [selectedDocument, setSelectedResume] = useState('');
    const [uploadLoading, setUploadLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [documents, setDocuments] = useState([]);
    const [user, setUser] = useState({});
    const [uploadDocument, setDocument] = useState('');

    const { location } = props;
    const { state } = location;
    const employeeData = state.employee[0];

    useEffect(() => {
        async function fetchData() {
          
          setLoading(true);
    
          const user = await getUser();
    
          if (user) {
            const isAdmin = user?.role === "HR Manager";
    
              if(!isAdmin){window.location.href = '/'}
    
            const response = await getEmployeeDocument(employeeData?.id);
            console.log(response)
            setUser(user);
            setDocuments(response);
            
          }
        }
        fetchData();
        setLoading(false);
      }, []);


    const chooseFile = useCallback(() => {
		const dropArea = document.querySelector(".drop_box");
		const button = dropArea.querySelector("button");
		const input = dropArea.querySelector("input");
		button.onclick();
		input.click();
	}, [])

    const removeDocument = async (documentId) => {
        try {

          const response = await deleteDocument(documentId);
    
          if (response.message) {
            const logEmployee = await createActivity(
              {
                name: 'Delete Document',
                employee_id: user.employee_id,
                activity: `${user.name} deleted an ${employeeData.name}'s document with name; ${document.name}`,
                activity_name: 'Deletion',
                user: user.name,
                company_id: user.company_id
              }
            )
            if (logEmployee.id) {
              const newDocuments = documents.filter(document => document.id !== documentId);
              setDocuments(newDocuments);
              toast.info(response.message);
            }
          }
    
        } catch (err) {
          toast.error("Error, try again");
          setFormState({ ...formState });
        }
    
      };


    const updateForm = e => {
        const { value, name, type } = e.target;
        if (type === 'file') {
            const file = e.target.files[0];

            setFormState((prevState) => ({
                ...prevState,
                selectedFile: file,
            }));
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

	const handleFile = async e => {
		setUploadLoading(true);
		const file = e.target.files[0];
		const upload = await UploadCloudinary(file);
		setDocument(upload.secure_url);
		setSelectedResume(upload.original_filename);
		setUploadLoading(false);
	}

    const submitDocument = async () => {
		try {
			setFormState({ ...formState });
			const body = {
				name: formState.documentName,
				company_id: employeeData.company_id,
                url: uploadDocument,
                employee_id: employeeData.id,
			}
			if (formState.documentName === '' || formState.firstName === '') {
				toast.error('Please fill all the fields');
				return;
			}
			const response = await createDocument(body);

			if (response.id) {
                await createActivity(
                    {
                      name: 'Create Document',
                      employee_id: user.employee_id,
                      activity: `${user.name} created a document for ${employeeData.name} with name; ${document.name}`,
                      activity_name: 'Creation',
                      user: user.name,
                      company_id: user.company_id
                    }
                  )
                setDocuments([...documents, response])
				toast.success("Document sent successfully");
			} else {
				toast.info(response.message);
			}

			setFormState({documentName: ''});

		} catch (err) {
			toast.error("Error, try again");
			setFormState({ ...formState });
		}
		// console.log(body)
	};

    const readableDate = (date) => {
        return Time(date);
    }

    const openFileInNewWindow = (url) => {
         window.open(url, '_blank');
      };

    const uploadFile = useMemo(() => {
		return (
			<div className="drop_box">
				<header>
					{selectedDocument !== '' ? (
						<>
							<div>{uploadLoading ? (
								<div style={{ width: '100%', height: '100%', marginTop: '50px' }} className="loader">
								</div>
							) : (
								<div className="alert alert-success" role="alert">
									<h4>{selectedDocument}</h4>
								</div>
							)}
							</div>

						</>
					) : (
						<div>
							{uploadLoading ? (
							<div style={{ width: '100%', height: '100%', marginTop: '50px' }} className="loader"></div>
						) : (
						<h4>Select Document here</h4>
						)}
					</div>
					)}
				</header>
				<p>Files Supported: PDF/Images</p>
				<input name="file" type="file" onChange={handleFile} hidden accept="application/pdf,image/*" id="fileID" style={{ display: 'none' }} />
				<button onClick={chooseFile} disabled={uploadLoading && true} className="btn-sm btn-upload">Choose File</button>
			</div>
		)
	}, [chooseFile, selectedDocument, uploadLoading]);

    return (
        <>
            <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="nav nav-tabs page-header-tab">
                        <li className="nav-item">
                            <Link to={'/admin/hr-documents'} className="nav-link active">
                                <i className="fa fa-arrow-left"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                    <div className="row row-cards">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="page-subtitle ml-0">{employeeData.name}'s documents</div>
                                    <div className="page-options d-flex">
                                        {/* <select className="form-control custom-select w-auto">
                                            <option value="asc">Newest</option>
                                            <option value="desc">Oldest</option>
                                        </select> */}
                                        <div className="input-icon ml-2">
                                            <span className="input-icon-addon">
                                                <i className="fe fe-search" />
                                            </span>
                                            <input type="text" className="form-control" placeholder="Search documents" />
                                        </div>
                                        <button type="submit" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">Upload New</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {documents.length === 0 && !loading ? (
                        <div className='card'>
                            <EmptyState />
                            </div>
                    ) : (
                    <div className="row row-cards">
                         {documents.map((document) => (
                        <div key={document.id} className="col-sm-6 col-lg-4">
                            <div className="card p-3">
                            <div className="d-flex align-items-center px-2">
                                    <div>
                                        <div>{document.name}</div>
                                        <small className="d-block text-muted">{readableDate(document.createdAt)}</small>
                                    </div>
                                    <div className="ml-auto text-muted">
                                    <a onClick={()=> openFileInNewWindow(document.url)} className="mb-3">
                                    <button className='btn btn-sm btn-primary'>View File</button>
                                </a>
                                    </div>
                                </div>
                                <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                    overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Header as="p">Confirm Delete</Popover.Header>
                                        <Popover.Body>
                                        <div className="clearfix" >
                                            <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                            <button style={{ margin: '10px' }} onClick={() => removeDocument(document.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
                                        </div>
                                        </Popover.Body>
                                    </Popover>
                                    }>
                                    <button type="button" className="btn btn-sm btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fe fe-trash text-danger" /></button>
                                </OverlayTrigger>
                                {/* <a onClick={openFileInNewWindow(document.url)} className="mb-3">
                                    <button className='btn btn-sm btn-primary'>View File</button>
                                </a> */}
                                
                            </div>
                        </div>
                        ))}
                    </div>
                     )}
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Document</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row clearfix">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Document Name</label>
                                                <input type="text" className="form-control" placeholder=""
                                                    name='documentName'
                                                    id='documentName'
                                                    value={formState?.documentName}
                                                    onChange={updateForm}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
											{uploadFile}
										</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={submitDocument} className="btn right btn-primary" >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* update modal */}

        </>
    )
}

export default ManageDocument