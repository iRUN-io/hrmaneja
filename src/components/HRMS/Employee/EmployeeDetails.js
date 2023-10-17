
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    statisticsAction,
    statisticsCloseAction
} from "../../../actions/settingsAction";
import { formatMoney, getUser } from '../../../config/common';
import { getActivity } from '../../../services/activities';
// import 'react-toastify/dist/ReactToastify.css';
const EmployeeDetails = (employee) => {

    const { location } = employee;
    const { state } = location;
    const employeeData = state.employee[0];

    if (!employeeData) {
        window.location.href = "/hr-employees";
    }

    const [activities, setActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ActivityPerPage] = useState(8);
    const [searchActivity, setSearchActivity] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                // const company_id = user.company_id;
                const response = await getActivity(employeeData.id);
                // companyData.settings?.features['activity'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                setActivities(response);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const setSearch = (e) => {
        const { value } = e.target;
        setSearchActivity(value);
    };

    const getActivityBySearchQuery = (
        activities,
        searchQuery,
    ) => {
        return activities.filter(activity =>
            activity.name.toLowerCase().includes(searchQuery.toLowerCase())
            || activity.activity.toLowerCase().includes(searchQuery.toLowerCase())
            || activity.activity_name.toLowerCase().includes(searchQuery.toLowerCase())
            || activity.user.toLowerCase().includes(searchQuery.toLowerCase())

        );
    };

    const allActivitiesArray = useMemo(() => {
        let allActivities = activities;
        if (searchActivity) {
            allActivities = getActivityBySearchQuery(allActivities, searchActivity);
        }

        return allActivities || [];
    }, [activities, searchActivity]);


    const indexOfLastActivity = currentPage * ActivityPerPage;
    const indexOfFirstActivity = indexOfLastActivity - ActivityPerPage;
    const currentActivity = allActivitiesArray.slice(indexOfFirstActivity, indexOfLastActivity);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allActivitiesArray.length / ActivityPerPage); i++) {
        pageNumbers.push(i);
    }

    const successActivities = [
        'Completion',
        'Creation',
        'Completion',
        'Updating',
        'Update Password',
        'Update Profile',
        'Approval',
        'Paid for subscription'
    ];
    return (
        <>
            <div className="section-body">
                <div className="container-fluid">
                    <div className="">
                    <ul className="nav nav-tabs page-header-tab">
                    <li className="nav-item">
                        <Link to={'/admin/hr-employees'} className="nav-link active">
                            <i className="fa fa-arrow-left"></i>
                        </Link>
                        </li>
                    </ul>
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media mb-4">
                                            {employeeData.gender === 'Female' ? (
                                                <img
                                                    className="avatar avatar-xl mr-3"
                                                    src="../assets/images/sm/avatar1.jpg"
                                                    alt={employeeData.name}
                                                />
                                            ) : (
                                                <img
                                                    className="avatar avatar-xl mr-3"
                                                    src="../assets/images/sm/avatar2.jpg"
                                                    alt={employeeData.name}

                                                />
                                            )}
                                            <div className="media-body">
                                                <h5 className="m-0">{employeeData.name}</h5>
                                                <p className="text-muted mb-0">{employeeData.role}</p>
                                            </div>
                                        </div>
                                        <p className="mb-4">
                                            <span>{employeeData.phone}</span><br />
                                            <a href={`mailto:${employeeData.email}`}>{employeeData.email}</a><br />
                                            <span>{employeeData.country}</span>
                                        </p>
                                        <button style={{ marginRight: '10px' }} className="btn btn-outline-primary btn-sm">
                                            <a href={`mailto:${employeeData.email}`}><span className="fa fa-envelope" /></a>
                                        </button>

                                        <button className="btn btn-outline-primary btn-sm">
                                            <a href={`tel:${employeeData.phone}`}><span className="fa fa-phone" /></a>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className='card-header'>
                                        Salary Details
                                    </div>
                                    <div className="card-body">
                                        <div className="media-body">
                                            <h5 className="m-0">{employeeData.bank_account_name}</h5>
                                            <p className="text-muted mb-0">{employeeData.bank_account_number}</p>
                                            <p className="text-muted mb-0">{employeeData.bank_name}</p>
                                            <p className="text-muted mb-0">{formatMoney(employeeData.salary)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card disabled-card">
                                    <div className='card-header'>
                                        Send Message
                                    </div>
                                    <div className="card-body">
                                        <div className="media mb-4">
                                            <div className="media-body">
                                                <div className="form-group">
                                                    <label className="form-label">Subject</label>
                                                    <input type="text" className="form-control" placeholder="Subject" />

                                                    <label className="form-label">Message</label>
                                                    <textarea className="form-control" rows="5" placeholder="Message" />

                                                    <button style={{ marginTop: '10px' }} className="btn btn-outline-primary btn-sm">
                                                        <span className="fa fa-send" /> Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                    <div className="card-options" style={{marginBottom: '20px', marginLeft: '10px'}}>
                                        <form>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    onChange={setSearch}
                                                    value={searchActivity}
                                                    className="form-control form-control-sm"
                                                    placeholder="Search Activity..."
                                                    name="" />

                                            </div>
                                        </form>
                                    </div>
                                        <ul className="new_timeline mt-3">
                                            {currentActivity.map((activity, index) => (
                                                <li key={index}>
                                                    <div className={`bullet ${successActivities.includes(activity.activity_name) ? 'green' : 'pink'}`} />
                                                    <div className="time">{moment(activity.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                                    <div className="desc">
                                                        <h3>{activity.activity_name}</h3>
                                                        <h4>{activity.activity}</h4>
                                                    </div>
                                                </li>
                                            ))}
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    fixNavbar: state.settings.fixNavbar,
    statisticsOpen: state.settings.isStatistics,
    statisticsClose: state.settings.isStatisticsClose
});

const mapDispatchToProps = dispatch => ({
    statisticsAction: e => dispatch(statisticsAction(e)),
    statisticsCloseAction: e => dispatch(statisticsCloseAction(e))
});
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);
