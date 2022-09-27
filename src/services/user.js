import request from 'umi-request';
import { API_URL, USER_TOKEN, USER_ID } from '../config/config';

export async function getAllUsers(COMPANY_ID) {
  return request(`${API_URL}/user/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}


export async function createUser(body) {
  return request(`${API_URL}/user/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateUser(body, userId) {
  return request(`${API_URL}/user/update/${userId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteUser(id) {
  return request(`${API_URL}/user/delete/${id}`, {
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

// reset password
export async function resetPassword(body) {
  return request(`${API_URL}/user/reset-password`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

// change password
export async function changePassword(body) {
  return request(`${API_URL}/user/change-password`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function createNormalUser(body) {
  return request(`${API_URL}/user/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


// confirm token 
export async function confirmToken(body) {
  return request(`${API_URL}/user/confirm-token`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}