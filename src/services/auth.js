import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function loginUser(credentials) {
  return request(`${API_URL}/user/auth/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(credentials),
  });
}


export async function createUser(body) {
  return request(`${API_URL}/api/auth/create`, {
    method: 'post',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}
