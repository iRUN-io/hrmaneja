import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllUsers(userId, ref) {
  return request(`${API_URL}/api/user/${userId}?ref=${ref}`, {
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

export async function createPayroll(body, userId) {
  return request(`${API_URL}/api/user/${userId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updatePayroll(body, userId, myUserId) {
  return request(`${API_URL}/api/user/${userId}?id=${myUserId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deletePayroll(userId, myUserId, ref) {
  return request(`${API_URL}/api/user/${userId}?id=${myUserId}&ref=${ref}`, {
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
