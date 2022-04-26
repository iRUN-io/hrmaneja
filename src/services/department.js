import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllDepartments(userId) {
  return request(`${API_URL}/api/department`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      userId: userId,
    },
  });
}

export async function getDepartment(userId, id) {
  return request(`${API_URL}/api/department/?id=${id}`, {
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
  return request(`${API_URL}/api/department/${userId}?id=${departmentId}`, {
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
