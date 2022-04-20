import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllPayrolls(userId, ref) {
  return request(`${API_URL}/api/payroll/${userId}?ref=${ref}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      id: userId,
      ref: ref,
    },
  });
}

export async function getPayroll(userId, id) {
  return request(`${API_URL}/api/payroll/${userId}?id=${id}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      userId: userId,
      id: id,
    },
  });
}

export async function createPayroll(body, userId) {
  return request(`${API_URL}/api/payroll/${userId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updatePayroll(body, userId, payrollId) {
  return request(`${API_URL}/api/payroll/${userId}?id=${payrollId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deletePayroll(userId, payrollId, ref) {
  return request(`${API_URL}/api/payroll/${userId}?id=${payrollId}&ref=${ref}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    params: {
      id: userId,
      ref: ref,
    },
  });
}
