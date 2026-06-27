import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllSupports(COMPANY_ID) {
  return request(`${API_URL}/supports/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}

export async function getEmployeeSupport(employeeId) {
    return request(`${API_URL}/supports/employee/${employeeId}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
    });
  }

export async function createSupport(body, userId) {
  return request(`${API_URL}/supports/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateSupport(body, leaveId) {
  return request(`${API_URL}/supports/update/${leaveId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}



