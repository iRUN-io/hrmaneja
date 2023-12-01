import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { getEmployee } from "../../../services/employee";
import { getCompanyData, getUser } from "../../../config/common";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'material-react-toastify';
import { createActivity } from '../../../services/activities';
// import { emailCase } from '../../../enums/emailCase';
// import { sendEmail } from '../../../services/mail/sendMail';
import moment from 'moment';
import FeatureNotAvailable from '../../common/featureDisabled';
import { approveTimeSheetRequest, createAttendance, getAttendance } from '../../../services/attendance';
import Loader from '../../common/loader';
import EmptyState from '../../EmptyState';


function ViewTimesheet(props) {
     ///// NEW PHASE STARTS HERE
     const [clockedIn, setClockedIn] = useState(false);
     const [timeEntries, setTimeEntries] = useState([]);
     const [currentDateTime, setCurrentDateTime] = useState(new Date());
     const [loading, setLoading] = useState(false);
     const [allAttendance, setAttendance] = useState([]);
     const [user, setUser] = useState({});
     const [employee, setEmployee] = useState({});
     const [lineManager, setLineManager] = useState({});
     const [company, setCompany] = useState({});
     const [attendance, setUserAttendance] = useState([]);
     const [featureEnabled, setFeatureEnabled] = useState(true);
     
     
     const timesheet = attendance[0]?.timeSheet || [];
     console.log(timesheet);
     const comingSoon = false;
      
     const { location } = props;
    const { state } = location;
    const employeeData = state.employee[0];
    const history = useHistory();

    useEffect(() => {
  async function fetchData() {
    setLoading(true);
    const user = await getUser();
    setUser(user);

    if (user) {
      const isAdmin = user?.role === "HR Manager";

      if (!isAdmin) {
        window.location.href = '/';
        return; // Add a return statement to exit the function early
      }

      const response = await getAttendance(employeeData?.id);
      setUserAttendance(response);
      //   setTimeEntries();
    }

    setLoading(false);
  }
  fetchData();
}, []);


     
     
     // Group time entries by day
     const groupedTimeEntries = timesheet.reduce((result, entry) => {
         const day = moment(entry.date).format('MMMM DD, YYYY');
         if (!result[day]) {
             result[day] = [];
         }
         result[day].push(entry);
         return result;
     }, {});
 
     // State to manage the current page
     const [currentPage, setCurrentPage] = useState(1);
     const entriesPerPage = 5; // Number of entries to display per page
 
     // Calculate the total number of pages based on the number of unique days
     const uniqueDays = Object.keys(groupedTimeEntries);
     const totalPages = Math.ceil(uniqueDays.length / entriesPerPage);
 
     // Get the current page's entries based on the current page number
     const currentDays = uniqueDays.slice(
         (currentPage - 1) * entriesPerPage,
         currentPage * entriesPerPage
     );
 
     const handlePageChange = (newPage) => {
         setCurrentPage(newPage);
     };
 
 
     return (
         <>
 
             <div>
                 {comingSoon ?
                     <ComingSoon />
                     :
                     <>
                         <div className="section-body mt-3">
                             <div className="container-fluid">
                                 <div className="d-flex justify-content-between align-items-center">
                                     <ul className="nav nav-tabs page-header-tab">
                                         <li className="nav-item">
                                             <Link to={'/admin/hr-timesheet'} className="nav-link active">
                                                 <i className="fa fa-arrow-left"></i>
                                             </Link>
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="tab-content mt-3">
                                     <div className="tab-pane fade show active" role="tabpanel">
                                         <div className="card table-card">
                                             <div className="card-header">
                                             <div className="page-subtitle ml-0">{employeeData.name}'s time sheet</div>
                                                 <p style={{ fontSize: 12 }} className="card-title mx-auto">
                                                     {currentDateTime.toLocaleString('en-US', {
                                                         weekday: 'long',
                                                         year: 'numeric',
                                                         month: 'long',
                                                         day: 'numeric',
                                                         hour: '2-digit',
                                                         minute: '2-digit',
                                                         second: '2-digit',
                                                     })}</p>
                                             </div>
                                             <div className='card-body'>
                                                
                                                {timesheet.length === 0 && !loading ? (<EmptyState/>) : 
                                                <>
                                                <table className='table table-hover table-striped table-vcenter text-nowrap'>
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Type</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentDays.map((day, dayIndex) => (
                                                        <React.Fragment key={dayIndex}>
                                                            <tr>
                                                                <th colSpan="2"> <small className="float-right badge badge-primary">{day}</small></th>
                                                            </tr>
                                                            {groupedTimeEntries[day]
                                                                .filter((entry, index, self) => {

                                                                    return (
                                                                        index === self.findIndex((e) => e.date === entry.date)
                                                                    );
                                                                })
                                                                .map((entry, index) => (
                                                                    <tr key={index}>
                                                                        <td> <small className="float-left">{moment(entry.date).format('MMMM DD, YYYY, hh:mm:ss A z')}</small></td>
                                                                        <td style={{ textTransform: 'uppercase' }}>{entry.type}</td>
                                                                    </tr>
                                                                ))}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>

                                            </table>
                                                    <div className="pagination justify-content-end">
                                                     <button
                                                         className='btn-primary btn-sm'
                                                         disabled={currentPage === 1}
                                                         onClick={() => handlePageChange(currentPage - 1)}
                                                     >
                                                         <i className="fa fa-angle-double-left"></i>
                                                     </button>
                                                     <span>{currentPage} of {totalPages}</span>
                                                     <button
                                                         className='btn-primary btn-sm'
                                                         disabled={currentPage === totalPages}
                                                         onClick={() => handlePageChange(currentPage + 1)}
                                                     >
                                                         <i className="fa fa-angle-double-right"></i>
                                                     </button>
                                                 </div>
                                                </>
                                                }
                                                
                                                 
 
                                                 
                                             </div>

                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </>
                 }
 
             </div>
         </>
     );
 
 }
 const mapStateToProps = state => ({
     fixNavbar: state.settings.isFixNavbar
 })
 
 const mapDispatchToProps = dispatch => ({})
 export default connect(mapStateToProps, mapDispatchToProps)(ViewTimesheet);

