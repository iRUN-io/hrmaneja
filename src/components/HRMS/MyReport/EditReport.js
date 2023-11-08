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
import { getAllReport, updateReport } from "../../../services/report";


const EditReport = (reportData) => {
  const [user, setUser] = useState([]);
	const [featureEnabled, setFeatureEnabled] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [formState, setFormState] = useState({
    employee_id: '',
        employee_name: '',
        report_summary: '',
        fromDate: '',
        toDate: '',
        employee_role: '',
        tasks: '',
        weekly_challenges: '',
        weekly_outcomes: '',
        report_overview: '',
  });

  const reportInfo = reportData.report;
  const editReportsAction = async () => {
    if (!featureEnabled) {
      toast.error('Feature not enabled');
      return;
  }
    try {
      setFormState({ ...formState });
      const body = {
                employee_id: user.employee_id,
                employee_name: user.name,
                report_summary: formState.report_summary,
                fromDate: formState.fromDate,
                toDate: formState.toDate,
                company_id: user.company_id,
                employee_role: formState.employee_role,
                tasks: formState.tasks,
                weekly_challenges: formState.weekly_challenges,
                weekly_outcomes: formState.weekly_outcomes,
                report_overview: formState.report_overview,
      };

      if (body.report_summary === '' || body.tasks === '' || body.fromDate === '' || body.toDate === '' || body.weekly_challenges === '' || body.weekly_outcomes === '' || body.report_overview === '') {
        toast.error('Please fill all the fields');
        return;
    }
    
      const response = await updateReport(body, reportInfo.id);
      console.log({response});

      if (response.message === 'Report was updated successfully.') {
        setEmployees([...employees, response]);

        const logActivity = await createActivity(
          {
            name: 'Update report',
            employee_id: user.employee_id,
            activity: `${user.name} Updated a report`,
            activity_name: 'Updating',
            user: user.name,
            company_id: user.company_id,
          }
        )
        if(logActivity.id){
          sendEmail(user.emailAddress, user.name, emailCase.updateEmployee);
          toast.success("Report updated successfully");

        }
      }

    } catch (err) {
      toast.error("Error, try again");
      setFormState({ ...formState });
    }
  };

  useEffect(() => {
    setFormState({
        employee_id: reportInfo.employee_id,
        employee_name: reportInfo.name,
        report_summary: reportInfo.report_summary,
        fromDate: reportInfo.fromDate,
        toDate: reportInfo.toDate,
        company_id: reportInfo.company_id,
        employee_role: reportInfo.employee_role,
        tasks: reportInfo.tasks,
        weekly_challenges: reportInfo.weekly_challenges,
        weekly_outcomes: reportInfo.weekly_outcomes,
        report_overview: reportInfo.report_overview,
    })
  }, [reportInfo]);

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

  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <ToastContainer/>
        <div className="modal-body">
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Report Summary</label>
                                        <textarea onChange={updateForm} className='form-control' name='report_summary' value={formState?.report_summary} placeholder='A brief summary of key activities implemented during the reporting period.' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Tasks</label>
                                        <textarea onChange={updateForm} className='form-control' name='tasks' value={formState?.tasks} placeholder='Outline of accomplished and in-progress tasks' />
                                    </div>
                                </div>
                                {/* date input from and to */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label>Report Duration (From | To)</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                            </div>
                                            <input type="date" aria-label='fromDate' className="form-control" name='fromDate' value={formState?.fromDate} onChange={updateForm} />

                                            <input type="date" className="form-control" name='toDate' value={formState?.toDate} onChange={updateForm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Weekly Outcomes</label>
                                        <textarea onChange={updateForm} className='form-control' name='weekly_outcomes' value={formState?.weekly_outcomes} placeholder='A brief description of outcome of task/activities or deliverables.' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Challenges and Implemented Solutions</label>
                                        <textarea onChange={updateForm} className='form-control' name='weekly_challenges' value={formState?.weekly_challenges} placeholder='A brief description of challenges encountered and mitigation strategies.' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Future Overview</label>
                                        <textarea onChange={updateForm} className='form-control' name='report_overview' value={formState?.report_overview} placeholder='In the next week, outline key activities to be implemented.' />
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
            onClick={() => editReportsAction()}
          >
            Save changes
          </button>
        </div>
      </div>


    </>


  )
}

export default EditReport