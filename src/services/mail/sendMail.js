
import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../../config/config';

export const sendEmail = async (email, name, caseType) => {
    prepareMail(email, name, caseType);
}


const emailSwitch = {
  createDemoSession: () => {
    const details = localStorage.getItem('bookingDetails');
    return {
      subject: 'Demo created', body: `You have a new support request on ${details}  ${details.hour}:${details.minute}:${details.second} ${details.meridiem} with email ${details.email} and notes ${details.note}` };
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