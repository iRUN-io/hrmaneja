import React, { useEffect, useState } from 'react';
import Fullcalender from '../common/fullcalender';
import { connect } from 'react-redux';
import { getUser } from '../../config/common';
import { Link } from 'react-router-dom';
import { completeTask, getEmployeeTask, pendingTask } from '../../services/task';
import { createActivity } from '../../services/activities';
import { toast } from 'material-react-toastify';
import Loader from '../common/loader';

function AppCalender(props) {
    const [tasks, setTasks] = useState([]);
	const [user, setUser] = useState(getUser());
	const [loading, setLoading] = useState([]);
	
	useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = getUser();
            if (user) {
                const allTasks = await getEmployeeTask(user.employee_id);
				// set only 5 tasks
				setTasks(allTasks.slice(0, 5));
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
				{/* <link rel="stylesheet" href="/assets/css/custom.css" /> */}
				<div>
					<div className={`section-body  mt-3`}>
						<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center">
                                    <ul className="nav nav-tabs page-header-tab">
                                        <li className="nav-item">
                                            <Link to={'/admin/settings'} className="nav-link active">
                                                <i className="fa fa-arrow-left"></i>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
							<div className="row clearfix row-deck">
								<div className="col-lg-4 col-md-12">
									<div className="card">
										<div className="card-body">
											{/* <h3 className="card-title">Events List</h3> */}
											{/* <div id="event-list" className="fc event_list">
												<div className="fc-event bg-primary" data-class="bg-primary">
													My Event 1
													</div>
												<div className="fc-event bg-info" data-class="bg-info">
													Birthday Party
													</div>
												<div className="fc-event bg-success" data-class="bg-success">
													Meeting
													</div>
												<div className="fc-event bg-warning" data-class="bg-warning">
													Conference
													</div>
												<div className="fc-event bg-danger" data-class="bg-danger">
													My Event 5
													</div>
											</div> */}
											<div className="todo_list mt-4">
												<h3 className="card-title">
													ToDo List <small>This Month task list</small>
												</h3>
												<ul className="list-unstyled mb-0">
													{tasks.map((task, index) => (
													<li key={index}>
														<label className="custom-control custom-checkbox">
														<input onClick={()=> toggleTask(task.id)} type="checkbox" className="custom-control-input" defaultChecked={task.status === 'completed' ? true : false} />
															<span className="custom-control-label">
																{task.note}
																</span>
														</label>
													</li>
													))}
													<li><Link to={'/hr-todo'} className="btn btn-primary btn-sm">See More Todos</Link></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-8 col-md-12">
									<div className="card">
										<div className="card-header bline">
											<h3 className="card-title">{user.name}</h3>
											<div className="card-options">
												{/* <a
													href="#"
													className="card-options-fullscreen"
													data-toggle="card-fullscreen"
												>
													<i className="fe fe-maximize" />
												</a> */}
											</div>
										</div>
										<div className="card-body">
											{/* <div id="calendar" /> */}
											<Fullcalender></Fullcalender>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div className="modal fade" id="addNewEvent" aria-hidden="true" style={{ display: 'none' }}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">
									<strong>Add</strong> an event
								</h4>
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
									×
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="row">
										<div className="col-md-6">
											<label className="control-label">Event Name</label>
											<input
												className="form-control"
												placeholder="Enter name"
												type="text"
												name="category-name"
											/>
										</div>
										<div className="col-md-6">
											<label className="control-label">Choose Event Color</label>
											<select
												className="form-control"
												data-placeholder="Choose a color..."
												name="category-color"
											>
												<option value="success">Success</option>
												<option value="danger">Danger</option>
												<option value="info">Info</option>
												<option value="primary">Primary</option>
												<option value="warning">Warning</option>
											</select>
										</div>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-success save-event" data-dismiss="modal">
									Save
								</button>
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="addDirectEvent" tabIndex={-1} role="dialog">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Add Direct Event</h4>
							</div>
							<div className="modal-body">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label>Event Name</label>
											<input className="form-control" name="event-name" type="text" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label>Event Type</label>
											<select name="event-bg" className="form-control">
												<option value="success">Success</option>
												<option value="danger">Danger</option>
												<option value="info">Info</option>
												<option value="primary">Primary</option>
												<option value="warning">Warning</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button className="btn save-btn btn-success">Save</button>
								<button className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="eventEditModal" tabIndex={-1} role="dialog">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Edit Event</h4>
							</div>
							<div className="modal-body">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label>Event Name</label>
											<input className="form-control" name="event-name" type="text" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label>Event Type</label>
											<select name="event-bg" className="form-control">
												<option value="success">Success</option>
												<option value="danger">Danger</option>
												<option value="info">Info</option>
												<option value="primary">Primary</option>
												<option value="warning">Warning</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button className="btn mr-auto delete-btn btn-danger">Delete</button>
								<button className="btn save-btn btn-success">Save</button>
								<button className="btn btn-default" data-dismiss="modal">
									Cancel
								</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(AppCalender);