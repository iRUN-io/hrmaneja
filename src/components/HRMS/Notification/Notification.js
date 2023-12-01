import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { completeTask, getEmployeeTask, pendingTask } from '../../../services/task';
import { toast } from 'material-react-toastify';
import Loader from '../../common/loader';
import { getUser } from '../../../config/common';
import { createActivity } from '../../../services/activities';
import Fullcalender from '../../common/fullcalender';
import { getAllNotifications } from '../../../services/notification';



function Notification(props) {
    const [tasks, setTasks] = useState([]);
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState([]);
    const [notification, setNotification] = useState([]);
	
    console.log({notification});
	useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = getUser();
            if (user) {
                const allTasks = await getEmployeeTask(user.employee_id);
                const allNotifications = await getAllNotifications(user.company_id);

                const filteredNotifications = allNotifications.filter(
                    (notification) => notification.receiver_id === user.employee_id
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

	const toggleTask = async (id) => {
        const task = tasks.find(task => task.id === id);

        const updatedTask = {
            ...task,
            status: task.status === 'pending' ? 'completed' : 'pending',
        };
        // if updated task is pending,
        if (updatedTask.status === 'completed') {
            const response = await completeTask(updatedTask, task.id);
            if (!response.error) {
                const logActivity = await createActivity(
                    {
                        name: 'Completed a task',
                        employee_id: user.employee_id,
                        activity: `Completed a task for ${updatedTask.employee_name}`,
                        activity_name: 'Completion',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logActivity.id) {
                    // sendEmail(user.emailAddress, user.name, emailCase.completeTask);
                    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
                    toast.success("Task completed successfully");
                }
            }

        }
        // if updated task is completed
        if (updatedTask.status === 'pending') {
            const response = await pendingTask(updatedTask, task.id);
            if (!response.error) {
                const logActivity = await createActivity(
                    {
                        name: 'Task moved to pending',
                        employee_id: user.employee_id,
                        activity: `moved a task for ${updatedTask.employee_name} to pending`,
                        activity_name: 'Pending Task',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logActivity.id) {
                    // sendEmail(user.emailAddress, user.name, emailCase.pendingTask);
                    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
                    toast.success("Task moved back to Todo");
                }
            }
        }
    };


	if (loading) {
		return <Loader/>
	}

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
											
											<div className="todo_list mt-4">
												<h3 className="card-title">
													Today's <small>notifications</small>
												</h3>
												<ul className="list-unstyled mb-0">
													{notification.map((note, index) => (
													<li key={index}>
														<label className="custom-control custom-checkbox">
														{/* <input onClick={()=> toggleTask(task.id)} type="checkbox" className="custom-control-input" defaultChecked={task.status === 'completed' ? true : false} /> */}
															<span className="custom-control-label">
																{note.notification}
																</span>
														</label>
													</li>
													))}
													{/* <li><Link to={'/hr-todo'} className="btn btn-primary btn-sm">See More Todos</Link></li> */}
												</ul>
											</div>
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
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Notification);