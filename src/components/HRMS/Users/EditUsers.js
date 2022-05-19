import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '../../../services/user'
import { getAllEmployees } from '../../../services/employee'
import 'react-loading-skeleton/dist/skeleton.css'

const EditUsers = (userData) => {
    const [employees, setEmployees] = useState([]);
    const [formState, setFormState] = useState({
        employeeID: '',
		email: '',
		phone: '',
		roleType: '',
		userName: '',
		password: '',
		confirmPassword: '',
	});

    const user = userData.user;
   
    const editUsersAction = async () => {
        try {
            setFormState({ ...formState });
            
            const body = {
                employee_id: formState.employeeID,
                name: formState.name,
                email: formState.email,
                phone: formState.phone,
                roleType: formState.roleType,
                userName: formState.userName,
                password: formState.password,
                confirmPassword: formState.confirmPassword,
            }

            if (body.name === '' || body.email === '') {
				toast.error('Please fill all the fields');
				return;
			}
			const response = await updateUser(body, user.id);

			if (response.error === false) {
				toast.success("User updated successfully");
			}
        } catch (err){
            toast.error("Error, try again");
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
            <ToastContainer/>
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
                                            <option value={user.id}>{user.name}</option>
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
                                        name='roleType' value={formState?.roleType}
                                        onChange={updateForm}
                                    >
                                        <option>Select Role Type</option>
                                        <option>Super Admin</option>
                                        <option>Admin</option>
                                        <option>Employee</option>
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