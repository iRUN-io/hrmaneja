import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllEmployees() {
  return request(`${API_URL}/employees`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}

export async function getEmployee(userId, id) {
    return request(`${API_URL}/api/employee/${userId}?id=${id}`, {
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

export async function createEmployee(body, userId) {
  return request(`${API_URL}/employees/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  });
}

export async function updateEmployee(body, employeeId) {
  return request(`${API_URL}/employees/update/${employeeId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteEmployee(employeeId) {
  return request(`${API_URL}/employees/delete/${employeeId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
