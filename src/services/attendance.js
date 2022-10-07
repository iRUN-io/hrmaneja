import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllAttendance(COMPANY_ID) {
  return request(`${API_URL}/attendance/${COMPANY_ID}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}

export async function getAttendance(employeeId) {
  return request(`${API_URL}/attendance/employee/${employeeId}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}

export async function createAttendance(body, userId) {
  return request(`${API_URL}/attendance/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateAttendance(body, userId, myUserId) {
  return request(`${API_URL}/attendance/${userId}?id=${myUserId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteAttendance(userId, myUserId, ref) {
  return request(`${API_URL}/attendance/${userId}?id=${myUserId}`, {
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
