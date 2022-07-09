import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllDepartments(COMPANY_ID) {
  return request(`${API_URL}/departments/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    // params: {
    //   userId: userId,
    // },
  });
}

export async function getDepartment(id) {
  return request(`${API_URL}/departments/details/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
  });
}

export async function createDepartment(body, userId) {
  return request(`${API_URL}/departments/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  });
}

export async function updateDepartment(body, departmentId) {
  return request(`${API_URL}/departments/update/${departmentId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteDepartment(departmentId) {
  return request(`${API_URL}/departments/delete/${departmentId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
