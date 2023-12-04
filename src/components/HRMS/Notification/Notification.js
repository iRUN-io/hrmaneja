import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { completeTask, getEmployeeTask, pendingTask } from '../../../services/task';
import { toast } from 'material-react-toastify';
import Loader from '../../common/loader';
import { getUser } from '../../../config/common';
import { createActivity } from '../../../services/activities';
import Fullcalender from '../../common/fullcalender';
import { getAllNotifications } from '../../../services/notification';



function NotificationList({ notifications }) {
    const user = getUser();

    const isAdmin = user?.role === "HR Manager";
    const history = useHistory();

    const handleNotificationClick = (notification) => {
        if (isAdmin) {
            switch (notification.name) {
                case 'Create Leave':
                    history.push('/admin/hr-leaves');
                    break;
                case 'Sent Requisition':
                    history.push('/admin/hr-requisition');
                    break;
                case 'Create Report':
                    history.push('/admin/hr-report');
                    break;
                case 'Update TimeSheet':
                    history.push('/admin/hr-timesheet');
                    break;

                // Default case
                default:
                    console.log('Unknown admin notification type');
                    break;
            }
        } else {
            switch (notification.name) {
                case 'Approve Leave':
                    history.push('/my-leaves');
                    break;
                case 'Approve Requisition':
                    history.push('/my-requisition');
                    break;
                case 'Reject Leave':
                    history.push('/my-leaves');
                    break;
                case 'Reject Requisition':
                    history.push('/my-requisition');
                    break;

                // Default case
                default:
                    console.log('Unknown user notification type');
                    break;
            }
        }
    };
      
    return (
      <div className="todo_list mt-4">
        <ul className="list-unstyled mb-0">
          {notifications.map((note, index) => (
            <li key={index} onClick={() => handleNotificationClick(note)}>
              <label className="custom-control custom-checkbox">
                <span className="custom-control-label" style={{cursor: "pointer"}}>{note.notification}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }

function Notification(props) {
    const [tasks, setTasks] = useState([]);
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState([]);
    const [notification, setNotification] = useState([]);
	
	useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = getUser();
            if (user) {
                const allTasks = await getEmployeeTask(user.employee_id);
                const allNotifications = await getAllNotifications(user.company_id);

                const filteredNotifications = allNotifications.filter(
                    (notification) => notification.receiver_id === user.employee_id || notification.hr_id === user.employee_id
                );
				// set only 5 tasks
				setTasks(allTasks.slice(0, 5));
                setNotification(filteredNotifications)
                setLoading(false);
                setUser(user);

            }
        }
        fetchData();
    }, []);
	

	if (loading) {
		return <Loader/>
	}

    
    const todayNotifications = notification.filter((note) => isToday(note.createdAt));
    const yesterdayNotifications = notification.filter((note) => isYesterday(note.createdAt));
    const olderNotifications = notification.filter((note) => !isToday(note.createdAt) && !isYesterday(note.createdAt));

		return (
			<>
				<div>
					<div className={`section-body  mt-3`}>
						<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center">
                                    <ul className="nav nav-tabs page-header-tab">
                                        <li className="nav-item">
                                            <Link to={'/'} className="nav-link active">
                                                <i className="fa fa-arrow-left"></i>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                                <div className="row clearfix row-deck">
              <div className="col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-body">
                  <h3 className="card-title">
                        Today's <small>notifications</small>
                      </h3>
                    <NotificationList notifications={todayNotifications} />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-body">
                  <h3 className="card-title">
                        Yesterday's <small>notifications</small>
                      </h3>
                    <NotificationList notifications={yesterdayNotifications} />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-body">
                  <h3 className="card-title">
                        Older <small>notifications</small>
                      </h3>
                    <NotificationList notifications={olderNotifications} />
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
        function isToday(dateString) {
            const date = new Date(dateString);
            const today = new Date();
            return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
          }
          
          // Helper function to check if a date is yesterday
          function isYesterday(dateString) {
            const date = new Date(dateString);
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear();
          }

const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Notification);