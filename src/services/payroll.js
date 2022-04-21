import request from 'umi-request';
import { API_URL, USER_TOKEN, USER_ID } from '../config/config';

export async function getAllPayrolls(ref) {
  return request(`${API_URL}/api/payroll/${USER_ID}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      id: USER_ID,
    },
  });
}

export async function getPayroll(id) {
  return request(`${API_URL}/api/payroll/${USER_ID}?id=${id}`, {
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
  return request(`${API_URL}/api/payroll/${USER_ID}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updatePayroll(body, payrollId) {
  return request(`${API_URL}/api/payroll/${payrollId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deletePayroll(payrollId) {
  return request(`${API_URL}/api/payroll/${payrollId}`, {
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
