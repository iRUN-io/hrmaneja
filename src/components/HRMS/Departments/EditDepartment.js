import React, { useState, useEffect } from 'react'
import { updateDepartment } from '../../../services/department'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../../../services/user';
import { getAllUsers } from '../../../services/user';

import 'react-loading-skeleton/dist/skeleton.css'

const EditDepartment = (departmentData) => {
    const [users, setUsers] = useState([]);
    const [formState, setFormState] = useState({
        departmentHead: '',
        departmentName: '',
    });
    
    console.log('formState', formState)
    const editDepartmentAction = async () => {
        try {
            setFormState({ ...formState });
            const body = {
                department_head: formState.departmentHead,
                name: formState.departmentName,
            }
            if (body.departmentName === '' || body.department_head === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const user = await getUser();
            const response = await updateDepartment(body, user.id);

            if (response.error === false) {
                toast.success("Department updated successfully");
            }

        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
        // console.log(body)
    };

    useEffect(() => {
        async function fetchData() {
                const userResponse = await getAllUsers();
                setFormState({
                    departmentHead: departmentData.department.department_head,
                    departmentName: departmentData.department.name,
                });
                setUsers(userResponse);
        }
        fetchData();

    }, [departmentData]);

    const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        console.log(value)
    };


    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <ToastContainer />
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
                                    <option selected value={formState?.departmentHead}>{formState?.departmentHead}</option>
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
                    <button type="submit" onClick={() => editDepartmentAction()} className="btn btn-primary">Save changes</button>
                </div>
            </div>

        </>
    );
}

export default EditDepartment;