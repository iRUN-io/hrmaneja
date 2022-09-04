import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllRequisitions(COMPANY_ID) {
  return request(`${API_URL}/requisitions/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}

export async function getEmployeeRequisition(employeeId) {
    return request(`${API_URL}/requisitions/employee/${employeeId}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
    });
  }

  export async function getRequisition(requsitionId) {
    return request(`${API_URL}/requisitions/details/${requsitionId}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
    });
  }

export async function createRequisition(body, userId) {
  return request(`${API_URL}/requisitions/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  });
}

export async function updateRequisition(body, leaveId) {
  return request(`${API_URL}/requisitions/update/${leaveId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteRequisition(leaveId) {
  return request(`${API_URL}/requisitions/delete/${leaveId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}


export async function approveRequisition(leaveId) {
  return request(`${API_URL}/requisitions/approve/${leaveId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}


export async function disapproveRequisition(leaveId) {
  return request(`${API_URL}/requisitions/disapprove/${leaveId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}


