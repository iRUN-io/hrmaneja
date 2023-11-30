import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function createNotification(body, userId) {
    return request(`${API_URL}/notification/create`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': USER_TOKEN,
      },
      body: JSON.stringify(body),
    });
  }

  export async function getAllNotifications(company_id) {
    return request(`${API_URL}/notification/${company_id}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
    });
  }

  export async function getNotification(employeeId) {
    return request(`${API_URL}/notification/employee/${employeeId}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
    });
  }