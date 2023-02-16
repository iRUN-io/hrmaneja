
import request from 'umi-request';
import { getUser, getCompanyData } from '../../config/common';
import { API_URL, USER_TOKEN } from '../../config/config';

export const sendEmail = async (email, name, caseType) => {
  if (localStorage.getItem('emailNotificationEnabled') === 'false')
  {
    return;
  }else{
    prepareMail(email, name, caseType);

  }
}

const user = getUser();

const emailSwitch = {
  userCreation: () => {
    return {
      subject: 'Welcome to Hrmaneja',
      body: `Thank you for taking a step further to boost your business. My name is Abasiama, on behalf of the team at IRun, we are pleased to welcome you to this great community.

    At IRun, we believe that running a successful business could be less stressful. Hence, we aim to provide you with a personalized experience that helps you boost your business productivity using our first high speed software {HRmaneja} 
    
    Here’s a video guide on how to use the amazing features our software has in stock for your business. (Video link)
    
    It’s really a pleasure to have you on board. On the course of this journey to business success, I’ll be your personal HR guide. Please feel free to reach out to me if you need any assistance.
    
    I promise to also keep in touch with you because your business productivity is my utmost priority.
    
    Welcome to IRun once again.
    `
    };
  }
  , passwordResetRequest: () => {
    return {
      subject: 'Password reset', body: `
    You initiated a request to reset your password.  
    ` };
  }
  , passwordChange: () => {
    return {
      subject: 'Changed Password', body: `This email is to notify you that your password had been changed on your HR Maneja account.
       If you did not perform this action, you can recover access by entering <your email> into <password reset link>
    ` };
  }
  , deleteUser: () => {
    return {
      subject: 'Account Deleted', body: `We received your request to delete your account; your account has been successfully deleted.
    We hope you change your mind, please let us know your feedback and experience so far. If you need assistance in creating a new account, we are available to give you all the support.
    Sincerely,` };
  }
  , createDepartment: () => {
    return {
      subject: 'Department created', body: `
    We have successfully received your details to create “department” department. You can update and include employees in your department.
    If you need any assistance, please reach out to us @ support@hrmaneja.com.` };
  }
  , updateDepartment: () => {
    return {
      subject: 'Department Updated', body: `
    Your employee account has successfully been updated. 
     for choosing HR Maneja, if in need of assistance, please reach out to us @ support@hrmaneja.com.` };
  }
  , deleteDepartment: () => {
    return {
      subject: 'Department Deleted', body: `We have received your request to delete a department. The department has successfully been deleted.
    If you didn’t initiate this request,please reach out to us @ support@hrmaneja.com.` };
  }
  , createEmployee: () => {
    return {
      subject: 'Employee created', body: `
    Your employee account has successfully been created.
     for choosing HR Maneja, if in need of assistance, please reach out to us @ support@hrmaneja.com.`
    };
  }
  , updateEmployee: () => {
    return {
      subject: 'Employee Updated', body: `Your employee account has successfully been updated. 
     for choosing HR Maneja, if in need of assistance, please reach out to us @ support@hrmaneja.com.` };
  }
  , deleteEmployee: () => {
    return {
      subject: 'Employee Deleted', body: `Your request to delete your employee account is successful. 
    We look forward to working with you in subsequent time. ` };
  }
  , createLeave: () => {
    return {
      subject: 'Leave created', body: `Your application for leave has been received and would be reviewed. 
    An email would be sent upon approval or rejection by your management` };
  }
  , notifyLeave: () => {
    return { subject: 'Leave notification', body: `Your employee has requested for a leave` };
  }
  , approveLeave: () => {
    return {
      subject: 'Leave Approved', body: `Your application for a leave has been granted by the management !
    ` };
  }
  , rejectLeave: () => {
    return {
      subject: 'Rejection of leave', body: `Your application for leave has been denied by the management !` };
  }
  , deleteLeave: () => {
    return { subject: 'Leave Deleted', body: `Leave deleted` };
  }
  , createPayroll: () => {
    return {
      subject: 'Payroll created', body: `Your payroll has successfully been created. 
    You can now make updates and explore amazing services using our payroll system.
    If you need assistance, please reach out to us @ support@hrmaneja.com.` };
  }
  , updatePayroll: () => {
    return {
      subject: 'Payroll Updated', body: `We received your updates in the payroll system, your updates have successfully been implemented. You can now manage your payroll system.
    If you need any assistance, please reach out to us @ support@hrmaneja.com.` };
  }
  , deletePayroll: () => {
    return {
      subject: 'Payroll Deleted', body: `!
    Your request to delete your payroll has been approved and your payroll has been deleted. If you did not initiate this request, kindly send us a mail. If you need assistance to create a new payroll
    system, please reach out to us @ support@hrmaneja.com.` };
  }
  , userLoggedIn: () => {
    return { subject: 'User logged in', body: `Someone just logged in using your access, if this was not you, send a mail to support@hrmaneja.com.` };
  }
  , makeRequisition: () => {
    return {
      subject: 'Requisition made', body: `We have received your request for a requisition. Your request would be reviewed and an email would be sent to you upon approval or rejection.
    ` };
  }
  , approveRequisition: () => {
    return {
      subject: 'Requisition approved', body: `Your request for a requisition has been approved. You can now proceed in making your purchase.
    ` };
  }
  , rejectRequisition: () => {
    return {
      subject: 'Requisition rejected', body: `Your request for a requisition has been rejected.
    ` };
  },
  createSupportTicket: () => {
    return {
      subject: 'Support ticket created', body: `We have received your support ticket. Your ticket would be reviewed and an email would be sent to you upon update.
    ` };
  }
  ,
  createSupportTicketAdmin: () => {
    return {
      subject: 'Support ticket created', body: `You have a new support request from ${user.name} with email ${user.emailAddress}` };
  }
  ,remindSupportTicket: () => {
    const ticketId = localStorage.getItem('ticketId');
    return {
      subject: 'Support ticket reminder', body: `We are yet to receive an update on our support ticket: ${ticketId} . 
    ` };
  }
  , employeePayrollGenerated: () => {
    return {
      subject: 'Payroll generated', body: `Your salary for the month of ${new Date().toLocaleString('default', { month: 'long' })} has been generated, you should receive it shortly.
    ` };
  },
  createTask: () => {
    return {
      subject: 'Task created', body: `Your task has been created successfully. 
    ` };
  },
  updateTask: () => {
    return {
      subject: 'Task updated', body: `Your task has been updated successfully. 
    ` };
  },
  deleteTask: () => {
    return {
      subject: 'Task deleted', body: `Your task has been deleted successfully. 
    ` };
  },
  createJob: () => {
    return {
      subject: 'Job created', body: `Your job has been created successfully. 
    ` };
  },
  candidateAppliedAdmin: () => {
    return {
      subject: 'Application submitted', body: `New job application submitted ! 
      `
    }
  },
  candidateAppliedUser: () => {
    const companyName = sessionStorage.getItem('companyName');
    return {
      subject: 'Application received', body: `Thank you for your interest in joining ${companyName}, you will hear from us soon ! 
      `
    }
  },
  rejectCandidate: () => {
    const companyName = sessionStorage.getItem('companyName');
    const jobTitle = sessionStorage.getItem('jobTitle');
    return {
      subject: `Your application to ${jobTitle} at ${companyName}`, body: `
      Thank you for your interest in the ${jobTitle} position at ${companyName}. Unfortunately, They will not be moving forward with your application, but they appreciate your time and interest in ${companyName}. 
    ` };
  },
  approveCandidate: () => {
    const companyName = sessionStorage.getItem('companyName');
    const jobTitle = sessionStorage.getItem('jobTitle');
    return {
      subject: `Your application to ${jobTitle} at ${companyName}`, body: `
      Thank you for your interest in the ${jobTitle} position at ${companyName}. Congratulations, You were successful in the screening process, you will be contacted for next steps. 
    ` };
  },
  sendAirtime: () => {
    return {
      subject: 'Airtime Sent!', body: `Airtime Sent successfully ! 
      `
    }
  },
  walletAccountCreated: () => {
    return {
      subject: 'Wallet Account Created!', body: `Your Virtual wallet has been created successfully ! 
      `
    }
  },
  fundAccount: () => {
    return {
      subject: 'Wallet Account Funded!', body: `Your Virtual wallet has been funded successfully ! 
      `
    }
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