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



function ManageReport(props) {
  const { fixNavbar } = props;
  const [user, setUser] = useState({});
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

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
                                    <div className="page-subtitle ml-0">{employeeData.name}'s report</div>
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
                                        <div>{user.name}</div>
                                        <small className="d-block text-muted">{readableDate(report.createdAt)}</small>
                                    </div>
                                    <div className="ml-auto text-muted">
                                    <a className="mb-3" onClick={() => viewReport(report)}>
                                    <i className="icon-printer" />
                                    </a>
                                    </div>
                              </div>
                                {/* <OverlayTrigger trigger="focus" placement="bottom" delay={1}
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
                                    <button type="button" className="btn btn-sm btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fe fe-trash text-danger" /></button>
                                </OverlayTrigger>                             */}
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