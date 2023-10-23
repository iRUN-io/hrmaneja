import React, { useState, useEffect } from 'react';
import { toast } from 'material-react-toastify';
import { updateUser } from '../../../services/user'
import { getAllEmployees } from '../../../services/employee'
import 'react-loading-skeleton/dist/skeleton.css'
import { createActivity } from '../../../services/activities';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';

const EditUsers = (userData) => {
    const [users, setUsers] = useState([]);

    const [employees, setEmployees] = useState([]);
    const [formState, setFormState] = useState({
        employeeID: '',
        email: '',
        phone: '',
        role: '',
        userName: '',
        password: '',
        confirmPassword: '',
    });

    const user = userData.user;

    console.log('user', user)

    const editUsersAction = async () => {
        try {
            setFormState({ ...formState });

            const body = {
                employee_id: formState.employeeID,
                name: formState.name,
                email: formState.email,
                phone: formState.phone,
                role: formState.role,
                userName: formState.userName,
                password: formState.password,
                confirmPassword: formState.confirmPassword,
            }

            if (body.name === '' || body.email === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await updateUser(body, user.id);

            if (response) {
                setUsers([...users, response]);

                const logActivity = await createActivity(
                    {
                        name: 'Update user',
                        employee_id: user.employee_id,
                        activity: `${user.name} UPdated a user with name; ${body.name}`,
                        activity_name: 'Updating',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )
                if (logActivity.id) {
                    // sendEmail(user.emailAddress, user.name, emailCase.updateUser);
                    toast.success("User updated successfully");

                }
            }
        } catch (err) {
            toast.error("Error, please try again");
            setFormState({ ...formState });
        }

    };

    useEffect(() => {
        setFormState({
            email: user.email,
            phone: user.phone,
            role: user.role,
            userName: user.userName,
            name: user.name,
        });
    }, [user]);

    useEffect(() => {
        async function fetchData() {
            const employeeResponse = await getAllEmployees();
            setEmployees(employeeResponse || []);
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


    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <div className="modal-body">
                    <div className="card">
                        <div className="card-body">
                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <select className="form-control show-tick"

                                            name='employeeID' value={formState?.employeeID}
                                            onChange={updateForm}
                                        >
                                            <option>Select Employee</option>
                                            {employees.map((user) => (
                                                <option key={user.id} value={user.id}>{user.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input
                                            name='name' value={formState?.name}
                                            onChange={updateForm}
                                            type="text"
                                            className="form-control"
                                            placeholder="Name *"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input
                                            name='email' value={formState?.email}
                                            onChange={updateForm}
                                            type="text"
                                            className="form-control"
                                            placeholder="Email ID *"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input
                                            name='phone' value={formState?.phone}
                                            onChange={updateForm}
                                            type="text"
                                            className="form-control"
                                            placeholder="Mobile No"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <select className="form-control show-tick"
                                            name='role' value={formState?.role}
                                            onChange={updateForm}
                                        >
                                            <option>Select Role Type</option>
                                            <option value={'HR Manager'}>Hr Manager</option>
													{/* <option value={'Super Admin'}>Super Admin</option>
													<option value={'Admin'}>Admin</option> */}
													<option value={'Employee'}>Employee</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input
                                            name='userName' value={formState?.userName}
                                            onChange={updateForm}
                                            type="text"
                                            className="form-control"
                                            placeholder="Username *"
                                        />
                                    </div>
                                </div>
                                {/* <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <input
                                        name='password' value={formState?.password}
                                        onChange={updateForm}
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <input
                                        name='confirmPassword' value={formState?.confirmPassword}
                                        onChange={updateForm}
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn right btn-primary" onClick={() => editUsersAction()}>
                    Add
                </button>
            </div>

        </>
    )
}

export default EditUsers