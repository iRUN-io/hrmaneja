
import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../../config/config';

export const sendEmail = (email, name, caseType) => {
  prepareMail(email, name, caseType);
}

const emailSwitch = {
  userCreation: () => {
    return { subject: 'Welcome to Hrmaneja', body: `Welcome to Hr Maneja` };
  }
  , passwordReset: () => {
    return { subject: 'Password reset', body: `Password reset` };
  }
  , deleteUser: () => {
    return { subject: 'Account deleted', body: `Account deleted` };
  }
  , createDepartment: () => {
    return { subject: 'Department created', body: `Department created` };
  }
  , updateDepartment: () => {
    return { subject: 'Department updated', body: `Department updated` };
  }
  , deleteDepartment: () => {
    return { subject: 'Department deleted', body: `Department deleted` };
  }
  , createEmployee: () => {
    return { subject: 'Employee created', body: `Employee created` };
  }
  , updateEmployee: () => {
    return { subject: 'Employee updated', body: `Employee updated` };
  }
  , deleteEmployee: () => {
    return { subject: 'Employee deleted', body: `Employee deleted` };
  }
  , createLeave: () => {
    return { subject: 'Leave created', body: `Leave created` };
  }
  , notifyLeave: () => {
    return { subject: 'Leave notification', body: `Your employee has requested for a leave` };
  }
  , approveLeave: () => {
    return { subject: 'Leave approved', body: `Leave approved` };
  }
  , rejectLeave: () => {
    return { subject: 'Leave rejected', body: `Leave rejected` };
  }
  , deleteLeave: () => {
    return { subject: 'Leave deleted', body: `Leave deleted` };
  }
  , createPayroll: () => {
    return { subject: 'Payroll created', body: `Payroll created` };
  }
  , updatePayroll: () => {
    return { subject: 'Payroll updated', body: `Payroll updated` };
  }
  , deletePayroll: () => {
    return { subject: 'Payroll deleted', body: `Payroll deleted` };
  }
  , userLoggedIn: () => {
    return { subject: 'User logged in', body: `User logged in` };
  }

}

const prepareMail = (email, name, caseType) => {
  const emailTemplate = emailSwitch[caseType](email, name);
  const body = {
    to: email,
    subject: emailTemplate.subject,
    name: name,
    message: emailTemplate.body,
  }
  sendMail(body);
}


async function sendMail(body) {
  return request(`${API_URL}/mailer/sendMail`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}