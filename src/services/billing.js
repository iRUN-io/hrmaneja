import request from 'umi-request';
import { API_URL, USER_TOKEN, USER_ID } from '../config/config';

export async function getAllBillings(company_id) {
  return request(`${API_URL}/billing/${company_id}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}

export async function getBilling(id) {
  return request(`${API_URL}/billing/${id}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    
  });
}

export async function createBilling(body) {
  return request(`${API_URL}/billing/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateBilling(body, payrollId) {
  return request(`${API_URL}/billing/${payrollId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteBilling(payrollId) {
  return request(`${API_URL}/billing/${payrollId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    params: {
      payrollId: payrollId,
    },
  });
}
