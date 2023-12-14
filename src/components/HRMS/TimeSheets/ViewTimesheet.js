import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from "../../../config/common";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getAttendance } from '../../../services/attendance';
import EmptyState from '../../EmptyState';
import * as XLSX from 'xlsx'; 
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'material-react-toastify';

function ViewTimesheet(props) {
    ///// NEW PHASE STARTS HERE
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [attendance, setUserAttendance] = useState([]);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [selectedMonthYear, setSelectedMonthYear] = useState('');

    const timesheet = attendance[0]?.timeSheet || [];

    const comingSoon = false;

    const { location } = props;
    const { state } = location;
    const employeeData = state.employee[0];

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


    const filterExportData = (data) => {
        return data.filter(entry => {
          const entryDate = moment(entry.Date, 'MMMM DD, YYYY, hh:mm:ss A z');
          if (fromDate && entryDate.isBefore(moment(fromDate))) {
            return false;
          }
          if (toDate && entryDate.isAfter(moment(toDate))) {
            return false;
          }
          return true;
        });
      };
      const handleMonthYearChange = (event) => {
        setSelectedMonthYear(event.target.value);
      };

      const filteredTimesheet = timesheet.filter(entry => {
        const entryMonthYear = moment(entry.date).format('YYYY-MM');
        return !selectedMonthYear || entryMonthYear === selectedMonthYear;
      });

    const handleFromDateChange = (event) => {
        setFromDate(event.target.value ? moment(event.target.value).startOf('day').toDate() : null);
    };

    const handleToDateChange = (event) => {
        setToDate(event.target.value ? moment(event.target.value).endOf('day').toDate() : null);
    };

    // Group time entries by day
    // const groupedTimeEntries = timesheet.reduce((result, entry) => {
    //     const day = moment(entry.date).format('MMMM DD, YYYY');
    //     if (!result[day]) {
    //         result[day] = [];
    //     }
    //     result[day].push(entry);
    //     return result;
    // }, {});

    const groupedTimeEntries = filteredTimesheet.reduce((result, entry) => {
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

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(getExportData());
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'TimeSheet');
        XLSX.writeFile(wb, `timesheet_${moment().format('YYYYMMDDHHmmss')}.xlsx`);
      };

      const exportToPDF = () => {
        const exportData = getExportData();
        const pdf = new jsPDF();
        
        pdf.text(`${employeeData.name}'s Time Sheet`, 10, 10);

        if(exportData.length === 0){
            toast.error("Error, No Entries!");
            return;;
        }
        
        const columns = Object.keys(exportData[0]);
        const rows = exportData.map(entry => Object.values(entry));
    
        pdf.autoTable({
          head: [columns],
          body: rows,
          startY: 20,
        });
    
        pdf.save(`timesheet_${moment().format('YYYYMMDDHHmmss')}.pdf`);
      };
    

      const getExportData = () => {
        const exportData = [];
        const filteredDays = Object.keys(groupedTimeEntries)
            .filter(day => (!fromDate || moment(day).isSameOrAfter(fromDate, 'day')) && (!toDate || moment(day).isSameOrBefore(toDate, 'day')));
       
        for (const day of filteredDays) {
            for (const entry of groupedTimeEntries[day]) {
                exportData.push({
                    Date: moment(entry.date).format('MMMM DD, YYYY, hh:mm:ss A z'),
                    Type: entry.type.toUpperCase(),
                });
            }
        }

        return exportData;
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
                                            <div className="card-options">
                                                <button className="btn btn-icon btn-sm" onClick={exportToExcel}>
                                                    <span className="fe fe-download" /> Export to Excel
                                                </button>
                                                <button className="btn btn-icon btn-sm" onClick={exportToPDF}>
                                                <span className="fe fe-download" /> Export to PDF
                                                </button>
                                                </div>
                                                <div className="page-subtitle ml-0 col-md-4">{employeeData.name}'s time sheet</div>
                                                    <div className="form-row">
                                                    
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="fromDate">From Date</label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="fromDate"
                                                            onChange={handleFromDateChange}
                                                        />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="toDate">To Date</label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="toDate"
                                                            onChange={handleToDateChange}
                                                        />
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-body'>

                                                {timesheet.length === 0 && !loading ? (<EmptyState />) :
                                                    <>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="selectedMonthYear">Select Month and Year</label>
                                                        <input
                                                            type="month"
                                                            className="form-control"
                                                            id="selectedMonthYear"
                                                            onChange={handleMonthYearChange}
                                                            value={selectedMonthYear}
                                                            style={{ width: '200px' }} 
                                                        />
                                                        </div>
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

const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(ViewTimesheet);

