import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllDepartments(userId, ref) {
  return request(`${API_URL}/api/department/${userId}?ref=${ref}`, {
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

export async function createDepartment(body, userId) {
  return request(`${API_URL}/api/department/${userId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateDepartment(body, userId, departmentId) {
  return request(`${API_URL}/api/department/${userId}?id=${departmentId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteDepartment(userId, departmentId, ref) {
  return request(`${API_URL}/api/department/${userId}?id=${departmentId}&ref=${ref}`, {
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
