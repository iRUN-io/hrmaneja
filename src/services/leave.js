import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllLeaves(COMPANY_ID) {
  return request(`${API_URL}/leaves/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}

export async function getEmployeeLeave(employeeId) {
    return request(`${API_URL}/leaves/employee/${employeeId}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
    });
  }

export async function createLeave(body, userId) {
  return request(`${API_URL}/leaves/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  });
}

export async function updateLeave(body, leaveId) {
  return request(`${API_URL}/leaves/update/${leaveId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteLeave(leaveId) {
  return request(`${API_URL}/leaves/delete/${leaveId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}


export async function approveLeave(leaveId) {
  return request(`${API_URL}/leaves/approve/${leaveId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}


export async function disapproveLeave(leaveId) {
  return request(`${API_URL}/leaves/disapprove/${leaveId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}


