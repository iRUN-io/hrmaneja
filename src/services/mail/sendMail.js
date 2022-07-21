
import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../../config/config';

export const sendEmail = async (email, name, caseType) => {
  if (localStorage.getItem('emailNotificationEnabled') === 'false')
  {
    return;
  }else{
    prepareMail(email, name, caseType);

  }
}

const emailSwitch = {
  userCreation: () => {
    return {
      subject: 'Welcome to Hrmaneja',
      body: `Thank you for taking a step further to boost your business. My name is Abasiama, on behalf of the team at IRun, we are pleased to welcome you to this great community.<br>

    At IRun, we believe that running a successful business could be less stressful. Hence, we aim to provide you with a personalized experience that helps you boost your business productivity using our first high speed software {HRmaneja} <br>
    
    Here’s a video guide on how to use the amazing features our software has in stock for your business. (Video link)<br>
    
    <name>, it’s really a pleasure to have you on board. On the course of this journey to business success, I’ll be your personal HR guide. Please feel free to reach out to me if you need any assistance.<br>
    
    I promise to also keep in touch with you because your business productivity is my utmost priority.<br>
    
    Welcome to IRun once again.<br>
    
    Your HR guide,
    Abasiama`
    };
  }
  , passwordResetRequest: () => {
    return {
      subject: 'Password reset', body: `
    You initiated a request to reset your password. Please click on the button below to change your password.<br>

    This link is valid for <no of hours> after which you would have to resubmit the request for a password reset.

    <Button for password change> <br>
    Thanks,` };
  }
  , passwordChange: () => {
    return {
      subject: 'Changed Password', body: `This email is to notify you that your password had been changed on your HR Maneja account.<br>
       If you did not perform this action, you can recover access by entering <your email> into <password reset link>
    Thanks,` };
  }
  , deleteUser: () => {
    return {
      subject: 'Account Deleted', body: `We received your request to delete your account; your account has been successfully deleted.<br>
    We hope you change your mind, please let us know your feedback and experience so far. If you need assistance in creating a new account, we are available to give you all the support.<br>
    Sincerely,` };
  }
  , createDepartment: () => {
    return {
      subject: 'Department created', body: `
    We have successfully received your details to create “department” department. You can update and include employees in your department.<br>
    If you need any assistance, we are always at your service. Best regards,<br>
    HRManeja<br>
    Support Team` };
  }
  , updateDepartment: () => {
    return {
      subject: 'Department Updated', body: `
    Your employee account has successfully been updated. <br>
    Thanks for choosing HR Maneja, if in need of assistance, reach out to our support team. <br>
    <link or mail to support team>
    Best regards,<br>
    HR Maneja` };
  }
  , deleteDepartment: () => {
    return {
      subject: 'Department Deleted', body: `We have received your request to delete {name} department. The department has successfully been deleted.
    If you didn’t initiate this request, please kindly send us a mail. <link or mail to support team><br>
    
    Best Regards,<br>
    HR support team` };
  }
  , createEmployee: () => {
    return {
      subject: 'Employee created', body: `
    Your employee account has successfully been created.<br>
    Thanks for choosing HR Maneja, if in need of assistance, reach out to our support team. <br>
    <link or mail to support team><br>
    Best regards,<br>
    HR Maneja`
    };
  }
  , updateEmployee: () => {
    return {
      subject: 'Employee Updated', body: `Your employee account has successfully been updated. <br>
    Thanks for choosing HR Maneja, if in need of assistance, reach out to our support team. <link or mail to support team><br>
    Best regards,<br>
    HR Maneja` };
  }
  , deleteEmployee: () => {
    return {
      subject: 'Employee Deleted', body: `Your request to delete your employee account is successful. <br>
    We look forward to working with you in subsequent time.<br> 
    Thanks for choosing HR Maneja.<br>
    Best regards,
    HR Maneja Team` };
  }
  , createLeave: () => {
    return {
      subject: 'Leave created', body: `Your application for <type of leave> has been received and would be reviewed. <br>
    An email would be sent upon approval or rejection by the management` };
  }
  , notifyLeave: () => {
    return { subject: 'Leave notification', body: `Your employee has requested for a leave` };
  }
  , approveLeave: () => {
    return {
      subject: 'Leave Approved', body: `Your application for a <type of leave> has been granted by the management, you can proceed in handing over your responsibilities to the <name of replacement> as a replacement.<br>
    The duration of your leave is <duration for leave granted> We wish you the best holidays!
    Thanks,` };
  }
  , rejectLeave: () => {
    return {
      subject: 'Rejection of leave', body: `Your application for a <type of leave> has been denied by the management <reason for denial> for the period you request; you may wish to reapply in future date within the year.<br>
    Sorry for the inconveniences this may cause.` };
  }
  , deleteLeave: () => {
    return { subject: 'Leave Deleted', body: `Leave deleted` };
  }
  , createPayroll: () => {
    return {
      subject: 'Payroll created', body: `Your payroll has successfully been created.<br> 
    You can now make updates and explore amazing services using our payroll system.<br>
    If you need assistance, we are always at your service. <br>
    <link or mail to support team><br>
    Best Regards,<br>
   HRManeja support team` };
  }
  , updatePayroll: () => {
    return {
      subject: 'Payroll Updated', body: `We received your updates in the payroll system, your updates have successfully been implemented. You can now manage your payroll system.<br>
    If you need any assistance, reach out to us. <link or mail to support team><br> Best regards,
    HR Maneja<br>
    Support Team` };
  }
  , deletePayroll: () => {
    return {
      subject: 'Payroll Deleted', body: `!
    Your request to delete your payroll has been approved and your payroll has been deleted.<br> If you did not initiate this request, kindly send us a mail. If you need assistance to create a new payroll<br>
    system, please reach out to us. <link or mail to support team><br>
    Best regards,
    HR Maneja<br> 
    Support Team` };
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