import React, { useState, useEffect, useMemo } from 'react'
import { getCompanyData, getUser } from '../../../config/common';
import { toast } from 'material-react-toastify';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment';
import { createActivity } from '../../../services/activities';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getAllEmployees, getEmployee } from '../../../services/employee';
import { Link, useHistory } from 'react-router-dom';
import EmptyState from '../../EmptyState';
import FeatureNotAvailable from '../../common/featureDisabled';
import { createReport, deleteReport, getEmployeeReport } from '../../../services/report';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import EditReport from './EditReport';
import { connect } from 'react-redux';
import { statisticsAction, statisticsCloseAction } from '../../../actions/settingsAction';
import { getDepartment } from '../../../services/department';
import { createNotification } from '../../../services/notification';
import { getAllUsers } from '../../../services/user';




const MyReport = () => {
    const [reports, setReports] = useState([]);
    const [report, setReport] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ReportPerPage] = useState(10);
    const [user, setUser] = useState([]);
    // const [department, setDepartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchReport, setSearchReport] = useState('');
    const [featureEnabled, setFeatureEnabled] = useState(false);
    const [employeeRec, setEmployeeRec] = useState([]);
    const [hrID, setHrID] = useState([]);
    const [formState, setFormState] = useState({
        employee_id: '',
        employee_name: '',
        report_summary: '',
        fromDate: '',
        toDate: '',
        employee_role: '',
        tasks: '',
        weekly_challenges: '',
        weekly_outcomes: '',
        report_overview: '',
        team_member: '',
        designation: '',
    });
    const history = useHistory();

    useEffect(() => {
        const user = getUser();
        setFormState({ ...formState, employeeId: user.id, employeeName: user.name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createReportAction = async () => {
        if (!featureEnabled) {
            toast.error('Feature not enabled');
            return;
        }
        try {
            setFormState({ ...formState });

            const body = {
                employee_id: user.employee_id,
                employee_name: user.name,
                report_summary: formState.report_summary,
                fromDate: formState.fromDate,
                toDate: formState.toDate,
                company_id: user.company_id,
                designation: formState.designation,
                tasks: formState.tasks,
                weekly_challenges: formState.weekly_challenges,
                weekly_outcomes: formState.weekly_outcomes,
                report_overview: formState.report_overview,
                team_member: formState.team_member,
            }
            if (body.report_summary === '' || body.tasks === '' || body.fromDate === '' || body.toDate === '' || body.weekly_challenges === '' || body.weekly_outcomes === '' || body.report_overview === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await createReport(body, user.employee_id);

            if (!response.error) {
                const duration = `${moment(response?.from).format('MMM Do YYYY')} To ${moment(response?.to).format('MMM Do YYYY')}`
                const logActivity = await createActivity(
                    {
                        name: 'Create Report',
                        employee_id: user.employee_id,
                        activity: `${user.name} Created a new report ; From ${duration}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )
                const notifyRequisition = await createNotification(
                    {
                        name: 'Create Report',
                        sender_id: user.employee_id,
                        receiver_id: employeeRec.line_manager,
						hr_id: hrID[0]?.employee_id,
                        notification: `${user.name} Created a new report ; From ${duration}`,
                        notification_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
				)

                if (logActivity.id) {
                    sendEmail(user.emailAddress, user.name, emailCase.createReport);
                    // if (body.notifyEmployee) {
                    //     const notifyEmployee = await getEmployee(body.notifyEmployee);
                    //     if (notifyEmployee.id) {
                    //         sendEmail(notifyEmployee.email, notifyEmployee.name, emailCase.notifyLeave);
                    //     }
                    // }
                    setReports([...reports, response])
                    toast.success("Report created successfully");
                }
            }

            setFormState({
                employee_id: '',
                employee_name: '',
                report_summary: '',
                fromDate: '',
                toDate: '',
                designation: '',
                tasks: '',
                weekly_challenges: '',
                weekly_outcomes: '',
                report_overview: '',
                team_member: '',
            });
        } catch (err) {
            toast.error("Error, try again");
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

    const removeReport = async (reportID) => {
        try {
          if (!featureEnabled) {
            toast.error('Feature not enabled');
            return;
          }
          const response = await deleteReport(reportID);
          
    
          if (response.message) {
            const logReport = await createActivity(
              {
                name: 'Delete Report',
                employee_id: user.employee_id,
                activity: `${user.name} deleted a report`,
                activity_name: 'Deletion',
                user: user.name,
                company_id: user.company_id
              }
            )
            if (logReport.id) {
              const newReports = reports.filter(report => report.id !== reportID);
              sendEmail(user.emailAddress, user.name, emailCase.deleteReport)
              setReports(newReports);
              toast.info(response.message);
            }
          }
    
        } catch (err) {
          toast.error("Error, try again");
          setFormState({ ...formState });
        }
    
      };

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const {employee_id, company_id} = user;
                const companyData = await getCompanyData();
                companyData.settings?.features['reports'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                const response = await getEmployeeReport(employee_id);
                const employeeRecord = await getEmployee(user.employee_id);
                const allUsers = await getAllUsers(user.company_id);
                const filteredAllUsers = allUsers.filter(
                    (allUser) => allUser.role === "HR Manager"
                  );
                // const userResponse = await getAllEmployees(company_id);
                // const department = await getDepartment(employee_id)
                setReports(response);
                setEmployeeRec(employeeRecord)
                setUser(user);
                setHrID(filteredAllUsers)
                // setDepartments(department);
                setLoading(false);
            }
        }
        fetchData();

    }, []);
     

    
	const setSearch = (e) => {
        const { value } = e.target;
        setSearchReport(value);
    };

    const getReportBySearchQuery = (
        reports,
        searchQuery,
    ) => {
        return reports.filter(report =>
			report.from.toLowerCase().includes(searchQuery.toLowerCase()) 
			|| report.to.toLowerCase().includes(searchQuery.toLowerCase()) 
			// || leave.status.toLowerCase().includes(searchQuery.toLowerCase())
			// || leave.reason.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const allReportsArray = useMemo(() => {
        let allReports = reports;
        if (searchReport) {
            allReports = getReportBySearchQuery(allReports, searchReport);
        }

        return allReports || [];
    }, [reports, searchReport]);


    const indexOfLastReport = currentPage * ReportPerPage;
    const indexOfFirstReport = indexOfLastReport - ReportPerPage;
    const currentReports = allReportsArray.slice(indexOfFirstReport, indexOfLastReport);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allReportsArray.length / ReportPerPage); i++) {
        pageNumbers.push(i);
    }

    if (!featureEnabled && !loading ) {
		return <FeatureNotAvailable />
	}

    const viewReport = (report) => {
        history.push({
          pathname: `/my-reportslip`,
          state: { reportData: report }
      });
    }

    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <div className="section-body mt-3">
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
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Leaves-list" role="tabpanel">
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="card-title">My Reports</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input value={searchReport} onChange={setSearch} type="text" className="form-control form-control-sm" placeholder="Search report..." name="s" />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-icon"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {reports.length === 0 && !loading ? (
                                        <EmptyState />
                                    ) : (
                                        <div className="card-body">
                                            <div className="table-responsive">

                                                {loading ? (
                                                    <Skeleton count={4} height={50} />
                                                ) : (
                                                    <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Name</th>
                                                                <th>Duration</th>
                                                                <th>Action</th>
                                                                {/* <th>Reason</th>
                                                                <th>Status</th> */}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentReports.map((report) => (
                                                                <tr key={report?.id}>
                                                                    <td className="width45">
                                                                        <span
                                                                            className="avatar avatar-orange"
                                                                            data-toggle="tooltip"
                                                                            title="Avatar Name"
                                                                        >
                                                                            {report?.employee_name?.charAt(0).toUpperCase()}
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="font-15">{report?.employee_name}</div>
                                                                    </td>

                                                                    {/* <td>
                                                                        <span>{report?.leave_type}</span>
                                                                    </td> */}

                                                                    <td> {moment(report?.from).format('MMM Do YYYY')} To {moment(report?.to).format('MMM Do YYYY')}</td>
                                                                    {/* <td>{leave?.reason}</td>
                                                                    <td> {leave?.status === 'approve' && ( 
                                                                    <span className="badge badge-success">approved</span>
                                                                    )}
                                                                    {leave?.status === 'disapprove' && (
                                                                    <span className="badge badge-danger">rejected</span>
                                                                    )}
                                                                    {leave?.status === 'pending' && (
                                                                    <span className="badge badge-grey">pending</span>
                                                                    )}
                                                                    </td> */}
                                                                    <td>
                                                                        <button
                                                                    type="button"
                                                                    className="btn btn-icon btn-sm"
                                                                    title="View"
                                                                    // onClick={() => employeeDetails(report?.id)}
                                                                    >
                                                                    <i className="fa fa-eye" onClick={() => viewReport(report)}/>
                                                                    </button>
                                                                        <button
                                                                        onClick={() => setReport(report)}
                                                                        data-toggle="modal" data-target="#editModal"
                                                                        type="button"
                                                                        className="btn btn-icon btn-sm"
                                                                        title="Edit"
                                                                        >

                                                                        <i className="fa fa-edit" />
                                                                        </button>
                                                                        <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                        overlay={
                                                                            <Popover id="popover-basic">
                                                                            <Popover.Header as="p">Confirm Delete</Popover.Header>
                                                                            <Popover.Body>
                                                                                <div className="clearfix" >
                                                                                <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                                <button style={{ margin: '10px' }} onClick={() => removeReport(report.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
                                                                                </div>
                                                                            </Popover.Body>
                                                                            </Popover>
                                                                        }>
                                                                        <button type="button" className="btn btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                                                                        </OverlayTrigger>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
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
                            <h5 className="modal-title" id="exampleModalLabel">Create Report</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        {/* update form */}
                        <div className="modal-body">
                            <div className="row clearfix">
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Team Member</label>
                                        <textarea onChange={updateForm} className='form-control' name='team_memeber' value={formState?.team_member} placeholder='Name and Surname of team memeber (enter N/A if not applicable)'/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Designation</label>
                                        <textarea onChange={updateForm} className='form-control' name='designation' value={formState?.designation} placeholder='Designation of team member (enter N/A if not applicable)'/>
                                    </div>
                                </div>
                                {/* date input from and to */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label>Report Duration (From | To)</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                            </div>
                                            <input type="date" aria-label='fromDate' className="form-control" name='fromDate' value={formState?.fromDate} onChange={updateForm} />

                                            <input type="date" className="form-control" name='toDate' value={formState?.toDate} onChange={updateForm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Report Summary</label>
                                        <textarea onChange={updateForm} className='form-control' name='report_summary' value={formState?.report_summary} placeholder='A brief summary of key activities implemented during the reporting period.' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Tasks</label>
                                        <textarea onChange={updateForm} className='form-control' name='tasks' value={formState?.tasks} placeholder='Outline of accomplished and in-progress tasks' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Weekly Outcomes</label>
                                        <textarea onChange={updateForm} className='form-control' name='weekly_outcomes' value={formState?.weekly_outcomes} placeholder='A brief description of outcome of task/activities or deliverables.' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Challenges and Implemented Solutions</label>
                                        <textarea onChange={updateForm} className='form-control' name='weekly_challenges' value={formState?.weekly_challenges} placeholder='A brief description of challenges encountered and mitigation strategies.' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Future Overview</label>
                                        <textarea onChange={updateForm} className='form-control' name='report_overview' value={formState?.report_overview} placeholder='In the next week, outline key activities to be implemented.' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={() => createReportAction()} className="btn btn-primary">Send Report</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Modal */}
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Report</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <EditReport report={report} />
                    </div>
                </div>
            </div>

        </>
    );
}


const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar,
    statisticsOpen: state.settings.isStatistics,
    statisticsClose: state.settings.isStatisticsClose
  });
  
  const mapDispatchToProps = dispatch => ({
    statisticsAction: e => dispatch(statisticsAction(e)),
    statisticsCloseAction: e => dispatch(statisticsCloseAction(e))
  });
export default connect(mapStateToProps, mapDispatchToProps)(MyReport)