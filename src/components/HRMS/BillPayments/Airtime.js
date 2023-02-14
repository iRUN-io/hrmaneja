import React, { useState, useEffect, useMemo } from 'react'
import { getAllAirtimeTransaction, createAirtimeTransaction } from '../../../services/airtime.js'
import { getCompanyData, getUser } from '../../../config/common';
import { toast } from 'material-react-toastify';
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getAllEmployees } from '../../../services/employee';
import { Link } from 'react-router-dom';
import EmptyState from '../../EmptyState';
import { createActivity } from '../../../services/activities';
import FeatureNotAvailable from '../../common/featureDisabled';
import { sendAirtime } from '../../../services/flutterwave';
import Loader from '../../common/loader.js';

const Airtime = () => {
    const [airtimes, setTransactions] = useState([]);
    const [user, setUser] = useState([]);
    const [employees, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [AirtimePerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [searchAirtime, setSearchAirtime] = useState('');
    const [featureEnabled, setFeatureEnabled] = useState(false);
    const [formState, setFormState] = useState({
        amount: '',
        phoneNumber: '',
    });
    
    useEffect(() => {
        const user = getUser();
        setFormState({ ...formState, employeeId: user.employee_id, employeeName: user.name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const initiateAirtime = async () => {
        setLoading(true);

        if (!featureEnabled) {
            toast.error('Feature not enabled');
            setLoading(false);
            return;
        }
        try {
            setFormState({ ...formState });

            const body = {
                amount: formState.amount,
                phoneNumber: formState.phoneNumber,
            }
            if (body.amount === '' || body.phoneNumber === ''){
            toast.error('Please fill all the fields');
                setLoading(false);
                return;
            }
            const response = await sendAirtime(body);

            if (!response.error) {

                const createRecord = await createAirtimeTransaction(
                    {
                        company_id: user.company_id,
                        phoneNumber: formState.phoneNumber,
                        amount: formState.amount,
                        paidBy: user.id,
                    }
                )
                
                if(createRecord) {

                const logAirtime = await createActivity(
                    {
                        name: 'Sent Airtime',
                        employee_id: user.employee_id,
                        activity: `${user.name} Sent ${body.amount} airtime to ; ${body.phoneNumber}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )
                if (logAirtime.id) {
                    sendEmail(user.emailAddress, user.name, emailCase.sendAirtime);
                    setTransactions([...airtimes, response])
                    toast.success("Airtime sent successfully");
                }
                }
               
            }

            setFormState({
                amount: '',
                phoneNumber: '',
            });
            setLoading(false);

        } catch (err) {
            toast.error("Error, try again");
            setLoading(false);

            setFormState({ ...formState });
        }
    };

    const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const company_id = user.company_id;
                const companyData = await getCompanyData();
                companyData.settings?.features['airtime'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                const response = await getAllAirtimeTransaction(company_id);
                const userResponse = await getAllEmployees(company_id);
                setTransactions(response);
                setUsers(userResponse);
                setUser(user);
                setLoading(false);

            }
        }
        fetchData();

    }, []);


	const setSearch = (e) => {
        const { value } = e.target;
        setSearchAirtime(value);
    };

    const getAirtimeBySearchQuery = (
        airtimes,
        searchQuery,
    ) => {
        console.log('airtmes', airtimes)
        return airtimes.filter(airtime =>
			airtime.recipient.includes(searchQuery.toLowerCase()) 
        );
    };

    const allAirtimeArray = useMemo(() => {
        let allAirtime = airtimes;
        if (searchAirtime) {
            allAirtime = getAirtimeBySearchQuery(allAirtime, searchAirtime);
        }

        return allAirtime || [];
    }, [airtimes, searchAirtime]);

    const indexOfLastAirtime = currentPage * AirtimePerPage;
    const indexOfFirstAirtime = indexOfLastAirtime - AirtimePerPage;
    const currentAirtime = allAirtimeArray.slice(indexOfFirstAirtime, indexOfLastAirtime);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allAirtimeArray.length / AirtimePerPage); i++) {
        pageNumbers.push(i);
    }

    if (!featureEnabled && !loading ) {
		return <FeatureNotAvailable />
	}

    
	if (loading ) {
		return <Loader />
	}

    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item">
                                    <Link to={'/admin/settings'} className="nav-link active">
                                        <i className="fa fa-arrow-left"></i>
                                    </Link>
                                </li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Send Airtime</button>
                            </div>
                        </div>
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Airtimes-list" role="tabpanel">
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="card-title">Employee Airtime Record</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input value={searchAirtime} onChange={setSearch} type="text" className="form-control form-control-sm" placeholder="Search Transaction..." name="s" />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-icon"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {currentAirtime.length === 0 ? (
                                        <EmptyState />
                                    ) : (
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                    <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Recipient</th>
                                                                <th>Amount</th>
                                                                <th>Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentAirtime.map((airtime) => (
                                                                <tr key={airtime.id}>
                                                                    <td>
                                                                        <div className="font-15">{airtime.recipient}</div>
                                                                    </td>

                                                                    <td>
                                                                        <span>{airtime.amount}</span>
                                                                    </td>

                                                                    <td> {moment(airtime.createdAt).format('MMM Do YYYY')} </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                            </div>
                                            <div className=''>
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination justify-content-end">
                                                        <li className="page-item" style={{ marginRight: '5px' }}>
                                                            <button className="btn btn-sm btn-primary" onClick={prevPage} disabled={currentPage === 1 ? true : false}><i className="fa fa-angle-double-left"></i></button>
                                                        </li>
                                                        {pageNumbers.map(number => (
                                                            <li key={number} className="page-item" style={{ marginRight: '5px' }}>
                                                                <button onClick={() => paginate(number)} className={currentPage === number ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'}>{number}</button>
                                                            </li>
                                                        ))}
                                                        <li className="page-item">
                                                            <button className="btn btn-sm btn-primary" onClick={nextPage} disabled={currentPage === pageNumbers.length ? true : false}><i className="fa fa-angle-double-right"></i></button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    )}
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
                            <h5 className="modal-title" id="exampleModalLabel">Initiate Airtime</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        {/* update form */}
                        <div className="modal-body">
                            <div className="row clearfix">
                                {/* <div className="col-md-12">
                                    <div className="form-group">
                                        <select name='leaveType' value={formState?.leaveType}
                                            onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option></option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input onChange={updateForm} className='form-control' name='phoneNumber' value={formState?.phoneNumber} />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label>Amount</label>
                                        <input onChange={updateForm} className='form-control' name='amount' value={formState?.amount} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={() => initiateAirtime()} className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Airtime;