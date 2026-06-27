import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllActivities(COMPANY_ID) {
  return request(`${API_URL}/activities/${COMPANY_ID}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}

export async function getActivity(employeeId) {
  return request(`${API_URL}/activities/employee/${employeeId}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}

export async function createActivity(body, userId) {
  return request(`${API_URL}/activities/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateActivity(body, userId, myUserId) {
  return request(`${API_URL}/activities/${userId}?id=${myUserId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteActivity(userId, myUserId, ref) {
  return request(`${API_URL}/activities/${userId}?id=${myUserId}`, {
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
