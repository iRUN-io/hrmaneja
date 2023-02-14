
import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllAirtimeTransaction(COMPANY_ID) {
  return request(`${API_URL}/airtime/${COMPANY_ID}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}


export async function createAirtimeTransaction(body) {
  return request(`${API_URL}/airtime/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}
