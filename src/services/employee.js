import request from 'umi-request';
import { API_URL, USER_TOKEN, USER_ID } from '../config/config';

export async function getAllEmployees(userId) {
  return request(`${API_URL}/api/employee/${USER_ID}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      id: userId,
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
  return request(`${API_URL}/api/employee/${userId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateEmployee(body, userId, employeeId) {
  return request(`${API_URL}/api/employee/${userId}?id=${employeeId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteEmployee(userId, employeeId) {
  return request(`${API_URL}/api/employee/${userId}?id=${employeeId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    params: {
      id: userId,
      employeeId: employeeId,
    },
  });
}
