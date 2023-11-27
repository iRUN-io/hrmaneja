import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EmptyState from '../../EmptyState';
import Skeleton from 'react-loading-skeleton';
import FeatureNotAvailable from '../../common/featureDisabled';
import { getCompanyData, getUser } from '../../../config/common';
import { getAllEmployees } from '../../../services/employee';
import { getAllDepartments, getDepartment } from '../../../services/department';
import { getAllReport } from '../../../services/report';
import { toast } from 'material-react-toastify';


export const getEmployeeById = (employeeId) => {
    async function fetchData() {
      const response = await getAllEmployees();
      const employee = response.filter(employee => employee.id === employeeId);
      return employee[0];
    }
    return fetchData();
  
};
function TimeSheet(props) {
    const { fixNavbar } = props;
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [EmployeePerPage] = useState(10);
    const [searchEmployee, setSearchEmployee] = useState('');
    const [departments, setDepartments] = useState([]);
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [featureEnabled, setFeatureEnabled] = useState(false);
    const [user, setUser] = useState([]);

    const employeeDetails = id => {
        try {
          const employee = employees.filter(employee => employee.id === id);
          props.history.push("/admin/hr-report/timesheet", { employee });
        } catch (err) {
          toast.error("Error, try again");
        }
      };

      useEffect(() => {
        async function fetchData() {
    
          setLoading(true);
    
          const user = await getUser();
    
          if (user) {
            const isAdmin = user?.role === "HR Manager";
    
            if (!isAdmin) { window.location.href = '/' }
    
            const company_id = user.company_id;
            const companyData = await getCompanyData();
            const allReports = await getAllReport(company_id)
            companyData.settings?.features['reports'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
            const departmentResponse = await getAllDepartments(company_id);
            const response = await getAllEmployees(company_id);
            setReports(allReports);
            setDepartments(departmentResponse);
            setEmployees(response);
            setUser(user);
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
      
      const getEmployeeDepartment = (id) => {
        const department = departments.find(req => req.id === id);
        return department?.name;
    }
      const countEmployeeReports = (employee_id) => {
        const employeeReports = reports.filter(report => report.employee_id === employee_id);
        return employeeReports.length;
      };

    return (
        <>
          <div>
            <div>
              <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
    
              </div>
    
              <div className="section-body">
                <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item">
                                    <Link to={'/admin/settings'} className="nav-link active">
                                        <i className="fa fa-arrow-left" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
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
                                        <th>Department</th>
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
                                            </div>
                                          </td>
    
                                          <td>{getEmployeeDepartment(employee?.department)}</td>
                                          <td>
                                            <button
                                              type="button"
                                              className="btn btn-icon btn-sm"
                                              title="View Timesheet"
                                              onClick={() => employeeDetails(employee?.id)}
                                            >
                                              <i className="fa fa-eye" />
                                            </button>
    
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
                  </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(TimeSheet);

