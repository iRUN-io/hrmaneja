import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllAccounts(userId, ref) {
  return request(`${API_URL}/api/account/${userId}`, {
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

export async function getAccount(userId, id) {
  return request(`${API_URL}/api/account/${userId}?id=${id}`, {
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

export async function createAccount(body, userId) {
  return request(`${API_URL}/api/account/${userId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateAccount(body, userId, myUserId) {
  return request(`${API_URL}/api/account/${userId}?id=${myUserId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteAccount(userId, myUserId, ref) {
  return request(`${API_URL}/api/account/${userId}?id=${myUserId}`, {
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
