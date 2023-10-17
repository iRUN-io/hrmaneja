import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {
  statisticsAction,
  statisticsCloseAction
} from "../../../actions/settingsAction";
import { getAllEmployees, createEmployee, deleteEmployee } from "../../../services/employee";
import { getCompanyData, getUser } from "../../../config/common";
import { toast } from "material-react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import EmployeeCounter from "./EmployeeCounter";
import Currency from "../../common/currency";
import Country from "../../common/country";
import { getAllDepartments } from "../../../services/department";
import "react-loading-skeleton/dist/skeleton.css";
import { OverlayTrigger, Popover } from 'react-bootstrap';
import EditEmployee from "./EditEmployee";
import { sendEmail } from "../../../services/mail/sendMail";
import { emailCase } from "../../../enums/emailCase";
import Skeleton from "react-loading-skeleton";
import EmptyState from "../../EmptyState";
import { createActivity } from "../../../services/activities";
import FeatureNotAvailable from "../../common/featureDisabled";
import { getAllBanks } from "../../../services/flutterwave";

export const getEmployeeById = (employeeId) => {
  async function fetchData() {
    const response = await getAllEmployees();
    const employee = response.filter(employee => employee.id === employeeId);
    return employee[0];
  }
  return fetchData();

};

function Employee(props) {
  const { fixNavbar } = props;
  const [banks, setBanks] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [EmployeePerPage] = useState(10);
  const [user, setUser] = useState([]);
  const [searchEmployee, setSearchEmployee] = useState('');
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [featureEnabled, setFeatureEnabled] = useState(false);
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
    bank_code: ""
  });


  const createEmployeeAction = async () => {
    try {
      if (!featureEnabled) {
        toast.error('Feature not enabled');
        return;
      }
      if (formState.salary < 100 ) {
        toast.error("Salary should be more than 100 Naira");
        return;
      }
      setFormState({ ...formState });
      const body = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        address: formState.address,
        company_id: user.company_id,
        role: formState.role,
        salary: formState.salary,
        gender: formState.gender,
        line_manager: formState.line_manager,
        department: formState.department,
        office: formState.office,
        employment_type: formState.employment_type,
        country_of_employment: formState.country_of_employment,
        currency: formState.currency,
        salary_frequency: formState.salary_frequency,
        salary_start_date: formState.salary_start_date,
        profile_picture: formState.profile_picture,
        dob: formState.dob,
        country: formState.country,
        bank_name: formState.bank_name,
        bank_account_number: formState.bank_account_number,
        bank_account_name: formState.bank_account_name,
        company_admin: formState.company_admin,
        start_date: formState.start_date,
        bank_code: formState.bank_code
      };

      if (body.name === "" || body.email === "" || body.phone === ""  || body.salary === "" || body.department === "" || body.bank_account_number === "" || body.bank_account_name === "" || body.bank_name === "") {
        toast.error("Please fill all the fields");
        return;
      }
      const response = await createEmployee(body, user.employee_id);

      if (response.id) {
        setEmployees([...employees, response])
        const logEmployee = await createActivity(
          {
            name: 'Create Employee',
            employee_id: user.employee_id,
            activity: `${user.name} created a new employee with name; ${body.name}`,
            activity_name: 'Creation',
            user: user.name,
            company_id: user.company_id
          }
        )

        if (logEmployee.id) {
          setEmployees([...employees, response])
          sendEmail(body.email, body.name, emailCase.createEmployee)
          toast.success("Employee created successfully");
          setFormState({
            name: "",
            email: "",
            phone: "",
            address: "",
            company_id: "",
            role: "",
            gender: "",
            salary: "",
            line_manager: "",
            department: "",
            office: "",
            country_of_employment: "",
            currency: "",
            salary_frequency: "",
            salary_start_date: "",
            profile_picture: "",
            dob: "",
            country: "",
            employment_type: "",
            bank_name: "",
            bank_account_number: "",
            bank_account_name: "",
            company_admin: "",
            start_date: "",
            bank_code: ""
          });
        }

      }

      toast.info(response.message);

    } catch (err) {
      toast.error("Error, try again");
      setFormState({ ...formState });
    }
  };

  const updateForm = e => {
    const { value, name } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });

  };

  const updateBankInfo = e => {
    const {value, name} = e.target;
    const bankInfo = value.split(' - ');
    const bankCode = bankInfo[0];
    const bankName = bankInfo[1];
    setFormState({ ...formState, [name]: bankName, bank_code: bankCode });

  }

  const employeeDetails = id => {
    try {
      const employee = employees.filter(employee => employee.id === id);
      props.history.push("/admin/hr-employee-details", { employee });
    } catch (err) {
      toast.error("Error, try again");
    }
  };

  const removeEmployee = async (employeeID) => {
    try {
      if (!featureEnabled) {
        toast.error('Feature not enabled');
        return;
      }
      const response = await deleteEmployee(employeeID);

      if (response.message) {
        const logEmployee = await createActivity(
          {
            name: 'Delete Employee',
            employee_id: user.employee_id,
            activity: `${user.name} deleted an employee with id; ${employeeID}`,
            activity_name: 'Deletion',
            user: user.name,
            company_id: user.company_id
          }
        )
        if (logEmployee.id) {
          const newEmployees = employees.filter(employee => employee.id !== employeeID);
          sendEmail(user.emailAddress, user.name, emailCase.deleteEmployee)
          setEmployees(newEmployees);
          toast.info(response.message);
        }
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
        const company_id = user.company_id;
        const companyData = await getCompanyData();
        const flutterwaveBanks = await getAllBanks();
        companyData.settings?.features['employee'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
        const departmentResponse = await getAllDepartments(company_id);
        const response = await getAllEmployees(company_id);
        setDepartments(departmentResponse);
        setEmployees(response);
        setUser(user);
        const sortedBanks = flutterwaveBanks.sort((a, b) => a.name.localeCompare(b.name));
        setBanks(sortedBanks);
        setLoading(false);
      }
    }
    fetchData();
  }, []);


  const setSearch = (e) => {
    const { value } = e.target;
    setSearchEmployee(value);
  };

  const getEmployeeBySearchQuery = (
    employees,
    searchQuery,
  ) => {
    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  const allEmployeesArray = useMemo(() => {
    let allEmployees = employees;
    if (searchEmployee) {
      allEmployees = getEmployeeBySearchQuery(allEmployees, searchEmployee);
    }

    return allEmployees || [];
  }, [employees, searchEmployee]);


  
  const indexOfLastEmployee = currentPage * EmployeePerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - EmployeePerPage;
  const currentEmployee = allEmployeesArray.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allEmployeesArray.length / EmployeePerPage); i++) {
    pageNumbers.push(i);
  }

  if (!featureEnabled && !loading) {
    return <FeatureNotAvailable />
  }

  return (
    <>
      <div>
        <div>
          <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
            <EmployeeCounter employees={employees} />
          </div>

          <div className="section-body">
            <div className="container-fluid">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="Employee-list"
                  role="tabpanel"
                >
                  <div className="card loading">
                    <div className="card-header">
                      <h3 className="card-title">Employees</h3>
                      <div className="card-options">
                        <form>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Search Employee..."
                              onChange={setSearch}
                              value={searchEmployee}
                              name="s"
                            />
                            <span className="input-group-btn ml-2">
                              <button
                                className="btn btn-icon btn-sm"
                                type="submit"
                              >
                                <span className="fe fe-search" />
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                    {allEmployeesArray.length === 0 && !loading ? (
                      <EmptyState />
                    ) : (
                      <div className="card-body">
                        <div className="table-responsive">
                          {loading ? (
                            <Skeleton count={4} height={50} />
                          ) : (
                            <>
                              <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    {/* <th>Employee ID</th> */}
                                    <th>Phone</th>
                                    <th>Join Date</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {currentEmployee.map((employee, index) => (
                                    <tr key={index}>
                                      <td className="w40">
                                        <label className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            name="example-checkbox1"
                                            defaultValue="option1"
                                          />
                                          <span className="custom-control-label">
                                            &nbsp;
                                          </span>
                                        </label>
                                      </td>
                                      <td className="d-flex">
                                        <span
                                          className="avatar avatar-blue"
                                          data-toggle="tooltip"
                                          data-original-title="Avatar Name"
                                        >

                                          {(
                                            employee?.name[0] + employee?.name[1]
                                          ).toUpperCase()}
                                        </span>
                                        <div className="ml-3">
                                          <h6 className="mb-0">

                                            {employee?.name}
                                          </h6>
                                          <span className="text-muted">

                                            {employee?.email}
                                          </span>
                                        </div>
                                      </td>
                                      {/* <td>
                                    <span>{employee?.id}</span>
                                  </td> */}
                                      <td>
                                        <span>{employee?.phone}</span>
                                      </td>
                                      <td>{employee?.start_date}</td>
                                      <td>{employee?.role}</td>
                                      <td>
                                        <button
                                      type="button"
                                      className="btn btn-icon btn-sm"
                                      title="View"
                                      onClick={() => employeeDetails(employee?.id)}
                                    >
                                      <i className="fa fa-eye" />
                                    </button>
                                        <button
                                          onClick={() => setEmployee(employee)}
                                          data-toggle="modal" data-target="#editModal"
                                          type="button"
                                          className="btn btn-icon btn-sm"
                                          title="Edit"
                                        >
                                          <i className="fa fa-edit" />
                                        </button>
                                        <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                          overlay={
                                            <Popover id="popover-basic">
                                              <Popover.Header as="p">Confirm Delete</Popover.Header>
                                              <Popover.Body>
                                                <div className="clearfix" >
                                                  <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                  <button style={{ margin: '10px' }} onClick={() => removeEmployee(employee.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
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
                            </>
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
                {/* <LeaveRequest /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Employee
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row clearfix card-body">
              <div className="col-12">
                  <small id="fileHelp" className="form-text text-muted">
                  Basic Details
                  </small>
                  <br />
                </div>
                <div className="col-md-6 col-sm-6">
                  <label style={{ fontSize: '12px' }}>Name</label>
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
                  <label style={{ fontSize: '12px' }}>Phone</label>
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

                <div className="col-md-6 col-sm-6">
                  <label style={{ fontSize: '12px' }}>Gender</label>
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
                    <label style={{ fontSize: '12px' }}>Email</label>
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

                <div className="col-md-12 col-sm-12">
                  <label style={{ fontSize: '12px' }}>Address</label>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formState?.address}
                      onChange={updateForm}
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <small id="fileHelp" className="form-text text-muted">
                    General Details
                  </small>
                  <br />
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label style={{ fontSize: '12px' }}>Salary</label>
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
                    <label style={{ fontSize: '12px' }}>Salary Currency</label>
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
                    <label style={{ fontSize: '12px' }}>Department</label>
                    <select
                      onChange={updateForm}
                      value={formState?.department}
                      className="form-control"
                      name="department"
                      id="department"
                    >
                      <option value="">Select Department</option>
                      {departments.map((department, index) => (
                        <option key={index} value={department.id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label style={{ fontSize: '12px' }}>Line Manager</label>
                    <select
                      onChange={updateForm}
                      value={formState?.line_manager}
                      className="form-control"
                      name="line_manager"
                      id="line_manager"
                    >
                      <option value="">Select Line Manager</option>
                      {employees.map((user, index) => (
                        <option key={index} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label style={{ fontSize: '12px' }}>Start Date</label>
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
                    <label style={{ fontSize: '12px' }}>Employment Type</label>
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
                    <label style={{ fontSize: '12px' }}>Salary Frequency</label>

                    <input
                      type="text"
                      name="salary_frequency"
                      disabled={true}
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
                    <label style={{ fontSize: '12px' }}>Salary Start Date</label>
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
                    <label style={{ fontSize: '12px' }}>Date of Birth</label>
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
                    <label style={{ fontSize: '12px' }}>Country</label>
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
                  <label style={{ fontSize: '12px' }}>Role</label>
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
                        <option key={index} value={bank.code + " - " + bank.name}>
                          {bank.name}
                        </option>
                      ))}
                    </select>
                    
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label style={{ fontSize: '12px' }}>Bank Account Number</label>
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
                    <label style={{ fontSize: '12px' }}>Bank Account Name</label>
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
                onClick={() => createEmployeeAction()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* update modal */}
      <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Employee</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <EditEmployee banks={banks} employee={employee} />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  fixNavbar: state.settings.isFixNavbar,
  statisticsOpen: state.settings.isStatistics,
  statisticsClose: state.settings.isStatisticsClose
});

const mapDispatchToProps = dispatch => ({
  statisticsAction: e => dispatch(statisticsAction(e)),
  statisticsCloseAction: e => dispatch(statisticsCloseAction(e))
});
export default connect(mapStateToProps, mapDispatchToProps)(Employee);
