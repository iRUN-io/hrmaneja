import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllUsers(userId) {
  return request(`${API_URL}/api/user/${userId}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      id: userId,
    },
  });
}

export async function getUser(userId, id) {
  return request(`${API_URL}/api/user/${userId}?id=${id}`, {
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

export async function createUser(body, userId) {
  return request(`${API_URL}/api/user/${userId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateUser(body, userId, myUserId) {
  return request(`${API_URL}/api/user/${userId}?id=${myUserId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteUser(userId, myUserId, ref) {
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
