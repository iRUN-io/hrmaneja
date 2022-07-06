import React, { useState, useEffect } from 'react'
import { getAllDepartments, createDepartment, deleteDepartment } from '../../../services/department'
import { getAllUsers } from '../../../services/user'
import { getUser } from '../../../config/common';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import EditDepartments from './EditDepartment';
import { createActivity } from '../../../services/activities';
// import { getEmployeeById } from '../Employee/Employee';

const Department = () => {
    const [departments, setDepartments] = useState([]);
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [department, setDepartment] = useState([]);
    const [formState, setFormState] = useState({
        departmentHead: '',
        departmentName: '',
        allEmployee: '',
    });

    const createDepartmentAction = async () => {
        try {
            setFormState({ ...formState });
            const body = {
                department_head: formState.departmentHead || 1,
                name: formState.departmentName,
            }
            if (body.departmentName === '' || body.department_head === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await createDepartment(body, user.id);

            if (response.id) {
                setDepartments([...departments, response])
                const logActivity = await createActivity(
                    {
                        name: 'Create Department',
                        employee_id: user.id,
                        activity: `${user.name} Created a new department with name; ${body.name}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logActivity.id) {

                    toast.success("Department created successfully");
                }

            }

            setFormState({
                departmentHead: '',
                departmentName: '',
                allEmployee: '',
            });
        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
        // console.log(body)
    };

    const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const removeDepartment = async (departmentId) => {
        try {
            const response = await deleteDepartment(departmentId);
            if (response.message) {
                const newDepartments = departments.filter(department => department.id !== departmentId);
                setDepartments(newDepartments);
                toast.info(response.message);
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
                const userId = user.id;
                const response = await getAllDepartments(userId);
                const userResponse = await getAllUsers(userId);
                setDepartments(response);
                setUsers(userResponse);
                setUser(user);
                setLoading(false);

            }
        }
        fetchData();

    }, []);


    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <ToastContainer />
                <div>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><a className="nav-link active" id="Departments-tab" data-toggle="tab" href="#Departments-list">List</a></li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Departments-list" role="tabpanel">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Departments List</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-icon"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">

                                            {loading ? (
                                                <Skeleton count={4} height={50} />
                                            ) : (
                                                <table className="table table-striped table-vcenter table-hover mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Department Name</th>
                                                            <th>Department Head</th>
                                                            <th>Total Employee</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {departments.map((department) => (
                                                            <tr key={department.id}>
                                                                <td>0{department.id}</td>
                                                                <td><div className="font-15">{department.name}</div></td>
                                                                <td>{department.department_head}</td>
                                                                <td>102</td>
                                                                <td>

                                                                    <button type="button" className="btn btn-icon" title="Edit" onClick={() => setDepartment(department)} data-toggle="modal" data-target="#editModal"><i className="fa fa-edit" /></button>
                                                                    <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                        overlay={
                                                                            <Popover id="popover-basic">
                                                                                <Popover.Header as="p">Confirm Delete</Popover.Header>
                                                                                <Popover.Body>
                                                                                    <div className="clearfix" >
                                                                                        <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                                        <button style={{ margin: '10px' }} onClick={() => removeDepartment(department.id)} type="button" class="btn btn-sm btn-danger">Delete</button>
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
                                    </div>
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
                            <h5 className="modal-title" id="exampleModalLabel">Add Departments</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        {/* update form */}
                        <div className="modal-body">
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name='departmentName' value={formState?.departmentName}
                                            onChange={updateForm} type="text" className="form-control" placeholder="Departments Name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <select name='departmentHead' value={formState?.departmentHead}
                                            onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option>Departments Head</option>
                                            {users.map((user) => (
                                                <>
                                                    <option value={user.id}>{user.name}</option>
                                                </>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" onClick={() => createDepartmentAction()} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Modal */}
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Department</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <EditDepartments department={department} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Department;