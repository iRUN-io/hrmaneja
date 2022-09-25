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


export async function createCompany(body) {
  return request(`${API_URL}/companies/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function verifyEmail(token) {
  return request(`${API_URL}/companies/verify-email/${token}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
  });
}


export async function resendConfirmationEmail(body) {
  return request(`${API_URL}/companies/resend-confirmation`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

