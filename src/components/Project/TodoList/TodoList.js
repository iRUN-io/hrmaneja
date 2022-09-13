/* eslint-disable jsx-a11y/anchor-is-valid */
import { toast } from 'material-react-toastify';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../config/common';
import { emailCase } from '../../../enums/emailCase';
import { createActivity } from '../../../services/activities';
import { getEmployee } from '../../../services/employee';
import { sendEmail } from '../../../services/mail/sendMail';
import { completeTask, createTask, getEmployeeTask, pendingTask,deleteTask } from '../../../services/task';
import EmptyState from '../../EmptyState';
// import FeatureNotAvailable from '../../common/featureDisabled';

function TodoList(props) {
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [TasksPerPage] = useState(10);
    const [user, setUser] = useState({});
    const [searchTask, setSearchTask] = useState('');
    // const [featureEnabled, setFeatureEnabled] = useState(false);
    const [formState, setFormState] = useState({
        due_date: '',
        employeeId: '',
        employeeName: '',
        note: '',
        priority: '',
    });


    const createTaskAction = async () => {
        try {
            setFormState({ ...formState });

            const body = {
                employee_id: formState.employeeId,
                employee_name: formState.employeeName,
                due_date: formState.due_date,
                company_id: user.company_id,
                note: formState.note,
                status: 'pending',
                priority: formState.priority,
            }
            if (body.note === '' || body.due_date === '' || body.priority === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await createTask(body, user.employee_id);

            if (!response.error) {
                const logActivity = await createActivity(
                    {
                        name: 'Created a new task',
                        employee_id: user.employee_id,
                        activity: `Created a new task for ${formState.employeeName}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logActivity.id) {
                    sendEmail(user.emailAddress, user.name, emailCase.createTask);
                    setTasks([...tasks, response])
                    toast.success("Task request sent successfully");
                }
            }

            setFormState({
                employeeId: '',
                employeeName: '',
                category: '',
                fromDate: '',
                dueDate: '',
                department: '',
                notifyEmployee: '',
                note: '',
            });
        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
    };

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = getUser();
            if (user) {
                // const companyData = await getCompanyData();
                // companyData.settings?.features['todo'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                const employeeRecord = await getEmployee(user.employee_id);
                const allTasks = await getEmployeeTask(user.employee_id);
                setTasks(allTasks);
                setFormState({
                    ...formState,
                    employeeId: employeeRecord.id,
                    employeeName: employeeRecord.name,
                });
                setLoading(false);
                setUser(user);

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


    const setSearch = (e) => {
        const { value } = e.target;
        setSearchTask(value);
    };

    const getTaskBySearchQuery = (
        expenses,
        searchQuery,
    ) => {
        return expenses.filter(expense =>
            expense.amount.toLowerCase().includes(searchQuery.toLowerCase())
            || expense.category.toLowerCase().includes(searchQuery.toLowerCase())
            || expense.status.toLowerCase().includes(searchQuery.toLowerCase())
            || expense.note.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };


    const toggleTask = async (id) => {
        const task = tasks.find(task => task.id === id);

        const updatedTask = {
            ...task,
            status: task.status === 'pending' ? 'completed' : 'pending',
        };
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

    // delete task
    const removeTask = async (id) => {

        const response = await deleteTask(id)

        if (response.message) {
            const logTask = await createActivity(
              {
                name: 'Delete Task',
                employee_id: user.employee_id,
                activity: `${user.name} deleted a task; ${response.note}`,
                activity_name: 'Deletion',
                user: user.name,
                company_id: user.company_id
              }
            )
            if (logTask.id) {
                const newTasks = tasks.filter(task => task.id !== id);
                setTasks(newTasks);
                toast.info(response.message);
              }
          }
        
    }
    
    const allTasksArray = useMemo(() => {
        let allTasks = tasks;
        if (searchTask) {
            allTasks = getTaskBySearchQuery(allTasks, searchTask);
        }

        return allTasks || [];
    }, [tasks, searchTask]);

    const indexOfLastTasks = currentPage * TasksPerPage;
    const indexOfFirstTasks = indexOfLastTasks - TasksPerPage;
    const currentTasks = allTasksArray.slice(indexOfFirstTasks, indexOfLastTasks);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allTasksArray.length / TasksPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <div className={`section-body ${props.fixNavbar ? "marginTop" : ""} mt-3`}>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active">
                                    <i className="fa fa-arrow-left"></i>
                                </Link>
                            </li>
                        </ul>
                        {currentTasks.length === 0 && !loading ? (
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add Task</button>
                            </div>
                        ) : null}

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                {currentTasks.length === 0 && !loading ? (
                                    <EmptyState />
                                ) : (

                                    <div className="card-body">
                                        <div className="card-header">
                                            <h3 className="card-title">My Tasks</h3>
                                            <div className="card-options">
                                                <form>
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            placeholder="Search expense..."
                                                            value={searchTask}
                                                            onChange={setSearch}
                                                            name="s" />
                                                        <span className="input-group-btn ml-2">
                                                            <button className="btn btn-icon" type="submit">
                                                                <span className="fe fe-search" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="table-responsive todo_list">
                                            {loading ? (
                                                <Skeleton count={5} height={57} />
                                            ) :
                                                (
                                                    <table className="table table-hover table-striped table-vcenter mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th><a href="#" data-toggle="modal" data-target="#exampleModal" className="btn btn-success btn-sm">Add New</a></th>
                                                                <th className="w150 text-right">Due</th>
                                                                <th className="w100">Priority</th>
                                                                <th className="w80"><i className="icon-user" /></th>
                                                                <th className="w100">Action</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentTasks.map((task, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <label className="custom-control custom-checkbox">
                                                                            <input onClick={() => toggleTask(task.id)} type="checkbox" className="custom-control-input" defaultChecked={task.status === 'completed' ? true : false} />

                                                                            <span className="custom-control-label">{task.note}</span>
                                                                        </label>
                                                                    </td>
                                                                    <td className="text-right">{moment(task.due_date).format('MMM Do YYYY')}</td>
                                                                    <td>
                                                                        {task.priority === 'High' && (
                                                                            <span className="tag tag-danger">High</span>
                                                                        )}

                                                                        {task.priority === 'Medium' && (
                                                                            <span className="tag tag-warning">Medium</span>
                                                                        )}

                                                                        {task.priority === 'Low' && (
                                                                            <span className="tag tag-success">Low</span>
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        <span className="avatar avatar-pink" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">
                                                                            {task.employee_name.charAt(0).toUpperCase()} {task.employee_name.charAt(1).toUpperCase()}
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                        overlay={
                                                                            <Popover id="popover-basic">
                                                                            <Popover.Header as="p">Confirm Delete</Popover.Header>
                                                                            <Popover.Body>
                                                                                <div className="clearfix" >
                                                                                <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                                <button style={{ margin: '10px' }}  type="button" className="btn btn-sm btn-danger" onClick={() => removeTask(task.id)}>Delete</button>
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

            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        {/* update form */}
                        <div className="modal-body">
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Task Type</label>
                                        <select name='priority' value={formState?.category}
                                            onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option>Select Priority</option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Note</label>
                                        <textarea onChange={updateForm} className='form-control' name='note' value={formState?.note} />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Due Date</label>
                                        <div className="input-group">

                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                            </div>
                                            <input type="date" className="form-control" name='due_date' value={formState?.due_date} onChange={updateForm} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={() => createTaskAction()} className="btn btn-primary">Create Task</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);