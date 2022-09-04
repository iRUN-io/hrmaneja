import request from 'umi-request';
import { API_URL, USER_TOKEN, USER_ID } from '../config/config';

export async function getAllPayrolls(company_id) {
  return request(`${API_URL}/payroll/${company_id}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}

export async function getPayroll(id) {
  return request(`${API_URL}/payroll/${USER_ID}?id=${id}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      userId: USER_ID,
      id: id,
    },
  });
}

export async function createPayroll(body) {
  return request(`${API_URL}/payroll/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updatePayroll(body, payrollId) {
  return request(`${API_URL}/payroll/${payrollId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deletePayroll(payrollId) {
  return request(`${API_URL}/payroll/${payrollId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    params: {
      payrollId: payrollId,
    },
  });
}
