import React, {useState} from 'react'


function ManageDocument({ fixNavbar }) {
    const [formState, setFormState] = useState({
        selectedFile: null,
        documentName: '',
    })

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

  return (
    <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                    <div className="container-fluid">
                        <div className="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="page-subtitle ml-0">1 - 12 of 1713 photos</div>
                                        <div className="page-options d-flex">
                                            <select className="form-control custom-select w-auto">
                                                <option value="asc">Newest</option>
                                                <option value="desc">Oldest</option>
                                            </select>
                                            <div className="input-icon ml-2">
                                                <span className="input-icon-addon">
                                                    <i className="fe fe-search" />
                                                </span>
                                                <input type="text" className="form-control" placeholder="Search photo" />
                                            </div>
                                            <button type="submit" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">Upload New</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cards">
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/1.jpg" alt=" by Nathan Guerrero" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                        <div>
                                            <div>Nathan Guerrero</div>
                                            <small className="d-block text-muted">12 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 112</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 42</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
											{/* <div className="form-group">
												<select className="form-control show-tick"
													name='employeeID' value={formState?.employeeID}
													onChange={updateForm}
												>
													<option value={''}>Select Employee</option>
													{employees.map((employee) => (
														<option key={employee.id} value={employee.id}>{employee.name}</option>
													))}
												</select>
											</div> */}
										</div>
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
                                            <label className="form-label">Document</label>
                                            <input type="file" className="form-control"
                                            placeholder=""
                                            name='selectedFile'
                                            id='selectedFile'
                                            value={formState?.selectedFile}
                                             onChange={updateForm}

                                            />
                                            </div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="submit" className="btn right btn-primary" >
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