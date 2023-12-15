import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import EmptyState from '../../EmptyState';
import { getUser } from '../../../config/common';
import { deleteReport, getEmployeeReport } from '../../../services/report';
import { toast } from 'material-react-toastify';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { createActivity } from '../../../services/activities';
import Loader from '../../common/loader';
import Time from '../../elements/Time';
import * as XLSX from 'xlsx'; 
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment';


function ManageReport(props) {
  const { fixNavbar } = props;
  const [user, setUser] = useState({});
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openPopoverId, setOpenPopoverId] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

    const { location } = props;
    const { state } = location;
    const employeeData = state.employee[0];
    const history = useHistory();

    useEffect(() => {
      async function fetchData() {
          setLoading(true);
        const user = await getUser();
  
        if (user) {
          const isAdmin = user?.role === "HR Manager";
  
            if(!isAdmin){window.location.href = '/'}
  
          const response = await getEmployeeReport(employeeData?.id);
          setUser(user);
          setReports(response);
          
        }
      }
      fetchData();
      setLoading(false);
    }, []);

    const removeReport = async (reportId) => {
      try {

        const response = await deleteReport(reportId);
  
        if (response.message) {
          const logEmployee = await createActivity(
            {
              name: 'Delete Report',
              employee_id: user.employee_id,
              activity: `${user.name} deleted a report`,
              activity_name: 'Deletion',
              user: user.name,
              company_id: user.company_id
            }
          )
          if (logEmployee.id) {
            const newReports = reports.filter(report => report.id !== reportId);
            setReports(newReports);
            toast.info(response.message);
          }
        }
  
      } catch (err) {
        toast.error("Error, try again");
      }
  
    };

    const exportData = reports.map(report => ({
      report_summary: report.report_summary,
      employee_name: report.employee_name,
      // employee_id: report.employee_id,
      tasks: report.tasks,
      weekly_challenges: report.weekly_challenges,
      weekly_outcomes: report.weekly_outcomes,
      report_overview: report.report_overview,
      team_member: report.team_member,
      designation: report.designation,
      // status: report.status
    }));

    const exportToExcel = () => {
      const ws = XLSX.utils.json_to_sheet(exportData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Reports');
      XLSX.writeFile(wb, `${employeeData.name}'s_reports_${moment().format('YYYYMMDDHHmmss')}.xlsx`);
    };
  
    const exportToPDF = () => {
      const pdf = new jsPDF();
  
      pdf.text(`Reports from ${moment(fromDate).format('MMM Do YYYY')} to ${moment(toDate).format('MMM Do YYYY')}`, 10, 10);
  
      if (exportData.length === 0) {
        toast.error('Error, No Entries!');
        return;
      }
  
      const columns = Object.keys(exportData[0]);
      const rows = exportData.map((entry) => Object.values(entry));
      
  
      pdf.autoTable({
        head: [columns],
        body: rows,
        startY: 20,
      
      });
  
      pdf.save(`${employeeData.name}'s_weekly_activity_report_${moment().format('YYYYMMDDHHmmss')}.pdf`);
    };

    const handleFromDateChange = (event) => {
      setFromDate(event.target.value ? moment(event.target.value).startOf('day').toDate() : null);
  };

  const handleToDateChange = (event) => {
      setToDate(event.target.value ? moment(event.target.value).endOf('day').toDate() : null);
  };

    const readableDate = (date) => {
      return Time(date);
  }

  const viewReport = (report) => {
    history.push({
      pathname: '/admin/reportslip',
      state: { reportData: report }
  });
	}
  return (
    <>
            <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="nav nav-tabs page-header-tab">
                        <li className="nav-item">
                            <Link to={'/admin/hr-report'} className="nav-link active">
                                <i className="fa fa-arrow-left"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                    <div className="row row-cards">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                <div className="card-options">
                                                <button className="btn btn-icon btn-sm" onClick={exportToExcel}>
                                                    <span className="fe fe-download" /> Export to Excel
                                                </button>
                                                <button className="btn btn-icon btn-sm" onClick={exportToPDF}>
                                                <span className="fe fe-download" /> Export to PDF
                                                </button>
                                                </div>
                                    <div className="page-subtitle ml-0 col-md-4">{employeeData.name}'s report</div>
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
                                    <div className="page-options d-flex">
                                        {/* <select className="form-control custom-select w-auto">
                                            <option value="asc">Newest</option>
                                            <option value="desc">Oldest</option>
                                        </select> */}
                                        {/* <div className="input-icon ml-2">
                                            <span className="input-icon-addon">
                                                <i className="fe fe-search" />
                                            </span>
                                            <input type="text" className="form-control" placeholder="Search documents" />
                                        </div> */}
                                        {/* <button type="submit" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">Upload New</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {reports.length === 0 && !loading ? (
                        <div className='card'>
                            <EmptyState />
                            </div>
                    ) : (
                    <div className="row row-cards">
                         {reports.map((report) => (
                        <div key={report.id} className="col-sm-6 col-lg-4">
                            <div className="card p-3">
                            <div className="d-flex align-items-center px-2">
                                    <div>
                                        {/* <div>{employeeData.name}</div> */}
                                        <small>{moment(report?.from).format('MMM Do YYYY')} To {moment(report?.to).format('MMM Do YYYY')}</small>
                                        <small className="d-block text-muted">{readableDate(report.createdAt)}</small>
                                    </div>
                                    <div className="ml-auto text-muted">
                                    <button
                                              type="button"
                                              className="btn btn-icon btn-sm"
                                              title="Print Reports"
                                              onClick={() => viewReport(report)}
                                            >
                                    <i className="icon-printer" />
                                    </button>
                                    </div>
                                    <OverlayTrigger trigger="focus" placement="bottom" show={openPopoverId === report.id} onHide={() => setOpenPopoverId(null)} delay={1}
                                overlay={
                                <Popover id="popover-basic">
                                <Popover.Header as="p">Confirm Delete</Popover.Header>
                                <Popover.Body>
                                <div className="clearfix" >
                                <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success" onClick={() => setOpenPopoverId(null)}>Cancel</button>
                                <button style={{ margin: '10px' }} onClick={() => removeReport(report.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
                                </div>
                                </Popover.Body>
                                </Popover>}>
                                <button type="button" className="btn btn-icon js-sweetalert" title="Delete" data-type="confirm" onClick={() => setOpenPopoverId(report.id)}><i className="fa fa-trash-o text-danger" /></button>
                                </OverlayTrigger>
                                </div>
                                
                                </div>
                        </div>
                        ))}
                    </div>
                     )}
                </div>
            </div>
        </>
  )
}

export default ManageReport