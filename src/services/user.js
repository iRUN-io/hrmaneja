import request from 'umi-request';
import { API_URL, USER_TOKEN, USER_ID } from '../config/config';

export async function getAllUsers() {
  return request(`${API_URL}/user`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    // params: {
    //   id: USER_ID,
    // },
  });
}

export async function getUser(id) {
  return request(`${API_URL}/api/user/${USER_ID}?id=${id}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      USER_ID: USER_ID,
      id: id,
    },
  });
}

export async function createUser(body) {
  return request(`${API_URL}/api/user/${USER_ID}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateUser(body) {
  return request(`${API_URL}/api/user/${USER_ID}?id=${USER_ID}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteUser(id) {
  return request(`${API_URL}/api/user/delete/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    params: {
      id: USER_ID,
    },
  });
}
