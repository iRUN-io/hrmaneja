/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast } from 'material-react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link, } from 'react-router-dom';
import EmptyState from '../../EmptyState';
import { getUser } from '../../../config/common';
import { createSupport, getAllSupports } from '../../../services/support';
import { createActivity } from '../../../services/activities';
import { emailCase } from '../../../enums/emailCase';
import { sendEmail } from '../../../services/mail/sendMail';
import { SUPPORT_MAIL } from '../../../config/config';

const Support = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [supports, setSupports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [SupportPerPage] = useState(10);
    const [formState, setFormState] = useState({
        category: '',
        note: '',
    });

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const company_id = user.company_id;
                const response = await getAllSupports(company_id);
                setSupports(response);
                setUser(user);
                setLoading(false);
            }
        }
        fetchData();

    }, []);

    const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const createSupportAction = async () => {
        try {
            setFormState({ ...formState });
            const body = {
                category: formState.category,
                note: formState.note,
                company_id: user.company_id,
                employee_id: user.employee_id,
            }
            if (body.category === '' || body.note === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await createSupport(body, user.employee_id);

            if (response.id) {
                const logActivity = await createActivity(
                    {
                        name: 'Create Support Ticket',
                        employee_id: user.employee_id,
                        activity: `${user.name} Created a new support ticket with name; ${body.category}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logActivity.id) {
                    sendEmail(user.emailAddress, user.name, emailCase.createSupportTicket);
                    sendEmail(SUPPORT_MAIL, 'Customer Support', emailCase.createSupportTicketAdmin);
                    setSupports([...supports, response])
                    toast.success("Support ticket created successfully");
                }
            }

            setFormState({
                category: '',
                note: '',
            });
        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }

    };


    const sendReminderNotification = async (ticketId) => {
        try {
            localStorage.setItem('ticketId', ticketId);
            await sendEmail('godfredakpan@gmail.com', 'Customer Support', emailCase.remindSupportTicket);
            localStorage.removeItem('ticketId');
            toast.success("Reminder sent successfully");
        } catch (err) {
            toast.error("Error, try again");
        }
    }


    const indexOfLastSupport = currentPage * SupportPerPage;
    const indexOfFirstSupport = indexOfLastSupport - SupportPerPage;
    const currentSupport = supports.slice(indexOfFirstSupport, indexOfLastSupport);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(supports.length / SupportPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <div className='section-body mt-3'>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link active">
                                        <i className="fa fa-arrow-left"></i>
                                    </Link>
                                </li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Create </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Departments-list" role="tabpanel">
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="card-title">Tickets</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-icon"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {supports.length === 0 && !loading ? (
                                        <EmptyState />
                                    ) : (
                                        <div className="card-body">
                                            <div className="table-responsive">

                                                {loading ? (
                                                    <Skeleton count={4} height={50} />
                                                ) : (
                                                    <table className="table table-striped table-vcenter table-hover mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Category</th>
                                                                <th>Ticket ID</th>
                                                                <th>Note</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentSupport.map((support) => (
                                                                <tr key={support._id}>
                                                                    <td><div className="font-15">{support.category}</div></td>
                                                                    <td>{support.ticketId}</td>
                                                                    <td>{support.note}</td>
                                                                    <td> {support.status === 'approve' && (
                                                                        <span className="badge badge-success">completed</span>
                                                                    )}
                                                                        {support.status === 'disapprove' && (
                                                                            <span className="badge badge-danger">closed</span>
                                                                        )}
                                                                        {support.status === 'pending' && (
                                                                            <span className="badge badge-grey">open</span>
                                                                        )}
                                                                    </td>
                                                                    <td> <a href="#" onClick={() => sendReminderNotification(support.ticketId)} className="icon mr-3">
                                                                        <i className="icon-bell" />
                                                                    </a></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
                                            </div>
                                            {/* pagination here */}
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
                            <h5 className="modal-title" id="exampleModalLabel">Contact Customer Support</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        {/* update form */}
                        <div className="modal-body">
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <select name='category' value={formState?.category}
                                            onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option>Category</option>
                                            <option value={'Feature Update'}>Feature Update</option>
                                            <option value={'Bug Report'}>Bug Report</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p>Message</p>
                                        <textarea value={formState?.note}
                                            onChange={updateForm} className='form-control' name="note" id="" cols="43" rows="10" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" onClick={createSupportAction} className="btn btn-primary">Send Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Support;