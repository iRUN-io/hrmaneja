import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllEmployees(userId, ref) {
  return request(`${API_URL}/api/employee/${userId}?ref=${ref}`, {
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


export async function deleteEmployee(userId, employeeId, ref) {
  return request(`${API_URL}/api/employee/${userId}?id=${employeeId}&ref=${ref}`, {
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
