import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllUsers } from '../../../services/user';

import 'react-loading-skeleton/dist/skeleton.css'
import { updateLeave } from '../../../services/leave';
import { createActivity } from '../../../services/activities';
import { getUser } from '../../../config/common';

const EditDepartment = (employeeData) => {
    const [leaves, setLeaves] = useState([]);
    const [user, setUser] = useState([]);

    const [users, setUsers] = useState([]);
    const [formState, setFormState] = useState({
        employeeId: '',
        employeeName: '',
        leaveType: '',
        fromDate: '',
        toDate: '',
        notifyEmployee: '',
        leaveReason: '',
    });
    
    const editDepartmentAction = async () => {
        try {
            setFormState({ ...formState });
            const body = {
                employeeId: formState.employeeId,
                employeeName: formState.employeeName,
                leaveType: formState.leaveType,
                fromDate: formState.fromDate,
                toDate: formState.toDate,
                notifyEmployee: formState.notifyEmployee,
                leaveReason: formState.leaveReason,
                status: 'Pending',
            }
            if (body.employeeName === '' || body.fromDate === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await updateLeave(body, employeeData.department.id);
            if (response.id) {
                setLeaves([...leaves, response])

                const logActivity = await createActivity(
                    {
                        name: 'Update Leave',
                        employee_id: user.employee_id,
                        activity: `${user.name} UPdated a leave with name; ${body.name}`,
                        activity_name: 'Updating',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )
                if (logActivity.id){
                    toast.success("Leave updated successfully");
                }
            }

        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
        // console.log(body)
    };

    useEffect(() => {
        async function fetchData() {
            const user = await getUser();
            const company_id = user.company_id;
            const userResponse = await getAllUsers(company_id);
            setFormState({
                employeeId: employeeData.employeeId,
                employeeName: employeeData.employeeName,
                leaveType: employeeData.leaveType,
                fromDate: employeeData.fromDate,
                toDate: employeeData.toDate,
                notifyEmployee: employeeData.notifyEmployee,
                leaveReason: employeeData.leaveReason,
                status: 'Pending',
            });
            setUser(user);
            setUsers(userResponse);
        }
        fetchData();

    }, [employeeData]);

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