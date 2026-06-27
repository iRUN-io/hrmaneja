import React, { useState, useEffect } from 'react'
import { updateDepartment } from '../../../services/department'
import { ToastContainer, toast } from 'material-react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { getAllUsers } from '../../../services/user';

import 'react-loading-skeleton/dist/skeleton.css'
import { createActivity } from '../../../services/activities';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getCompanyData, getUser } from '../../../config/common';
import FeatureNotAvailable from '../../common/featureDisabled';

const EditDepartment = (departmentData) => {
    const [departments, setDepartments] = useState([]);
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
	const [featureEnabled, setFeatureEnabled] = useState(false);
    const [formState, setFormState] = useState({
        departmentHead: '',
        departmentName: '',
    });
    
    const editDepartmentAction = async () => {
        if (!featureEnabled) {
            toast.error('Feature not enabled');
            return;
        }
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
            const response = await updateDepartment(body, departmentData.department.id);
            if(response) {
                console.log(response);
                setDepartments([...departments, response])

                 const logActivity = await createActivity(
                    {
                        name: 'update department',
                        employee_id: user.employee_id,
                        activity: `${user.name} updated a department with name; ${body.name}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if(logActivity.id){
                    sendEmail(user.emailAddress, user.name, emailCase.updateDepartment);
                    toast.success("department updated successfully");
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
            setLoading(true);
            const user = await getUser();
            const company_id = user.company_id;
            const companyData = await getCompanyData();
			companyData.settings?.features['department'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
            const userResponse = await getAllUsers(company_id);
            setFormState({
                departmentHead: departmentData.department.department_head,
                departmentName: departmentData.department.name,
            });
            setUser(user);
            setUsers(userResponse);
            setLoading(false);
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

    if (!featureEnabled && !loading ) {
		return <FeatureNotAvailable />
	}

    const getDepartmentHead = (departmentHeadId) => {
        const departmentHead = users.find(user => user.id === departmentHeadId);
        if (departmentHead) {
            return departmentHead.name;
        }
        return 'No department head';
    }

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
                                    <option selected value={formState?.departmentHead}>{getDepartmentHead(formState?.departmentHead)}</option>
                                    {users.map((user) => (
                                            <option key={user.id} value={user.id}>{user.name}</option>
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