import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getCompany(id) {
    return request(`${API_URL}/companies/${id}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
    });
  }