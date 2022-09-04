import request from 'umi-request';
import { API_URL } from '../config/config';


export async function createSession(body, userId) {
  return request(`${API_URL}/demos/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  });
}

export async function subscribe(body) {
  return request(`${API_URL}/subscribtion/create`, { // should pss to body of email in params ?
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  });
}


