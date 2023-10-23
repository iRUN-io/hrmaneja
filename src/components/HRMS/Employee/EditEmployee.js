import React, { useState, useEffect } from "react";
import { getAllEmployees, updateEmployee } from "../../../services/employee";
import { ToastContainer, toast } from "material-react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import Currency from "../../common/currency";
import Country from "../../common/country";
import { getAllDepartments } from "../../../services/department";
import { createActivity } from "../../../services/activities";
import { sendEmail } from "../../../services/mail/sendMail";
import { emailCase } from "../../../enums/emailCase";
import { getCompanyData, getUser } from "../../../config/common";
import FeatureNotAvailable from "../../common/featureDisabled";

const EditEmployee = (employeeData) => {
  const [user, setUser] = useState([]);
	const [featureEnabled, setFeatureEnabled] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company_id: "",
    role: "",
    salary: "",
    line_manager: "",
    department: "",
    gender: "",
    office: "",
    employment_type: "",
    country_of_employment: "",
    currency: "",
    salary_frequency: "",
    salary_start_date: "",
    profile_picture: "",
    dob: "",
    country: "",
    bank_name: "",
    bank_account_number: "",
    bank_account_name: "",
    company_admin: "",
    start_date: "",
    bank_code: "",
  });

  const banks = employeeData.banks;
  const employeeInfo = employeeData.employee;
  const editEmployeesAction = async () => {
    if (!featureEnabled) {
      toast.error('Feature not enabled');
      return;
  }
    try {
      setFormState({ ...formState });
      const body = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        address: formState.address,
        company_id: formState.company_id,
        role: formState.role,
        salary: formState.salary,
        gender: formState.gender,
        line_manager: formState.line_manager,
        department: formState.department,
        office: formState.office,
        country_of_employment: formState.country_of_employment,
        currency: formState.currency,
        salary_frequency: formState.salary_frequency,
        salary_start_date: formState.salary_start_date,
        profile_picture: formState.profile_picture,
        dob: formState.dob,
        employment_type: formState.employment_type,
        country: formState.country,
        bank_name: formState.bank_name,
        bank_account_number: formState.bank_account_number,
        bank_account_name: formState.bank_account_name,
        company_admin: formState.company_admin,
        start_date: formState.start_date,
        bank_code: formState.bank_code,
      };

      if (body.name === "" || body.email === "") {
        toast.error("Please fill all the fields");
        return;
      }
      const response = await updateEmployee(body, employeeInfo.id);

      if (response.message === 'Employee was updated successfully.') {
        setEmployees([...employees, response]);

        const logActivity = await createActivity(
          {
            name: 'Update employee',
            employee_id: user.employee_id,
            activity: `${user.name} Updated an employee with name; ${body.name}`,
            activity_name: 'Updating',
            user: user.name,
            company_id: user.company_id,
          }
        )
        if(logActivity.id){
          sendEmail(user.emailAddress, user.name, emailCase.updateEmployee);
          toast.success("Employee updated successfully");

        }
      }

    } catch (err) {
      toast.error("Error, try again");
      setFormState({ ...formState });
    }
  };

  useEffect(() => {
    setFormState({
      name: employeeInfo.name,
      email: employeeInfo.email,
      phone: employeeInfo.phone,
      address: employeeInfo.address,
      company_id: employeeInfo.company_id,
      role: employeeInfo.role,
      salary: employeeInfo.salary,
      line_manager: employeeInfo.line_manager,
      department: employeeInfo.department,
      gender: employeeInfo.gender,
      office: employeeInfo.office,
      country_of_employment: employeeInfo.country_of_employment,
      currency: employeeInfo.currency,
      salary_frequency: employeeInfo.salary_frequency,
      salary_start_date: employeeInfo.salary_start_date,
      profile_picture: employeeInfo.profile_picture,
      dob: employeeInfo.dob,
      country: employeeInfo.country,
      employment_type: employeeInfo.employment_type,
      bank_name: employeeInfo.bank_name,
      bank_account_number: employeeInfo.bank_account_number,
      bank_account_name: employeeInfo.bank_account_name,
      company_admin: employeeInfo.company_admin,
      start_date: employeeInfo.start_date,
    })
  }, [employeeInfo]);

  useEffect(() => {
    async function fetchData() {
        const user = await getUser();
        const company_id = user.company_id;
        const companyData = await getCompanyData();
				companyData.settings?.features['employee'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
        const employeeResponse = await getAllEmployees(company_id);
        const departmentResponse = await getAllDepartments(company_id);
        setUser(user);
        setEmployees(employeeResponse);
        setDepartments(departmentResponse);
    }
    fetchData();

}, []);

  const updateForm = e => {
    const { value, name } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });

  };

  if (!featureEnabled) {
    return <FeatureNotAvailable />
}

const updateBankInfo = e => {
  const {value, name} = e.target;
  const bankInfo = value.split(' - ');
  const bankCode = bankInfo[0];
  const bankName = bankInfo[1];
  setFormState({ ...formState, [name]: bankName, bank_code: bankCode });

}

  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <ToastContainer/>
        <div className="modal-body">
          <small id="fileHelp" className="form-text text-muted">
            Employee Basic Details
          </small>
          <br />
          <div className="row clearfix">
            <div className="col-md-6 col-sm-6">
              <label>Employee Name</label>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState?.name}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <label>Employee Gender</label>
              <div className="form-group">
                <select
                  className="form-control"
                  name="gender"
                  id="gender"
                  value={formState?.gender}
                  onChange={updateForm}
                >
                  <option value={""}>Choose Gender</option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                </select>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={formState?.email}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="e.g email@gmail.com"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <label>Phone Number</label>
              <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  id="phoneNo"
                  value={formState?.phone}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="col-12">
              <small id="fileHelp" className="form-text text-muted">
                Employee General Details
              </small>
              <br />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Salary</label>
                <input
                  type="number"
                  name="salary"
                  id="salary"
                  value={formState?.salary}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="e.g 100000"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Currency</label>
                <select
                  className="form-control"
                  name="currency"
                  id="currency"
                  value={formState?.currency}
                  onChange={updateForm}
                >
                  <Currency />
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Department</label>
                <select
                  onChange={updateForm}
                  value={formState?.department}
                  className="form-control"
                  name="department"
                  id="department"
                >
                  <option value="">Select Department</option>
                  {departments?.map((department, index) => (
                    <option key={index} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Line Manager</label>
                <select
                  onChange={updateForm}
                  value={formState?.line_manager}
                  className="form-control"
                  name="line_manager"
                  id="line_manager"
                >
                  <option value="">Select Line Manager</option>
                  {employees?.map((user, index) => (
                    <option key={index} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  name="start_date"
                  id="startDate"
                  value={formState?.start_date}
                  onChange={updateForm}
                  className="form-control"
                  placeholder=""
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Employment Type</label>
                <input
                  type="text"
                  name="employment_type"
                  id="employment_type"
                  value={formState?.employment_type}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Employment Type"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Salary Frequency</label>
                {/* Montly, Weekly or Daily */}
                <input
                  type="text"
                  name="salary_frequency"
                  id="salary_frequency"
                  value={formState?.salary_frequency || "Monthly"}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Salary Frequency"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Salary Start Date</label>
                <input
                  type="date"
                  name="salary_start_date"
                  id="salary_start_date"
                  value={formState?.salary_start_date}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Salary Start Date"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={formState?.dob}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Date of Birth"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Country</label>
                <select
                  className="form-control"
                  name="country"
                  id="country"
                  value={formState?.country}
                  onChange={updateForm}
                >
                  <Country />
                </select>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <label>Role</label>
              <div className="form-group">
                <input
                  type="text"
                  name="role"
                  id="role"
                  value={formState?.role}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Role"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <small id="fileHelp" className="form-text text-muted">
                Banking Details
              </small>
              <br />
            </div>

            <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label style={{ fontSize: '12px' }}>Bank Name</label>
                    <select
                      onChange={updateBankInfo}
                      value={formState?.bank_name}
                      className="form-control"
                      name="bank_name"
                      id="bank_name"
                    >
                      <option value="">{formState?.bank_name === '' ? 'Select Bank' : formState?.bank_name}</option>
                      {banks.map((bank, index) => (
                        <option key={index} value={bank.id + " - " + bank.name}>
                          {bank.name}
                        </option>
                      ))}
                    </select>
                    
                  </div>
                </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Bank Account Number</label>
                <input
                  type="text"
                  name="bank_account_number"
                  id="bank_account_number"
                  value={formState?.bank_account_number}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Bank Account Number"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Bank Account Name</label>
                <input
                  type="text"
                  name="bank_account_name"
                  id="bank_account_name"
                  value={formState?.bank_account_name}
                  onChange={updateForm}
                  className="form-control"
                  placeholder="Bank Account Name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => editEmployeesAction()}
          >
            Save changes
          </button>
        </div>
      </div>


    </>


  )
}

export default EditEmployee