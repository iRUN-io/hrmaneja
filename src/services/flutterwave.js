import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllBanks() {
  return request(`${API_URL}/payments/banks`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}
