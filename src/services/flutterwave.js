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

export async function sendAirtime(body) {
  return request(`${API_URL}/payments/airtime`, {
    method: 'post',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function createBankAccount(body) {
  return request(`${API_URL}/payments/createSubAccount`, {
    method: 'post',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function getAccountBalance(ref) {
  return request(`${API_URL}/payments/accountBalance/${ref}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}

export async function getAccountTransactions(ref) {
  return request(`${API_URL}/payments/accountTransactions/${ref}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
  });
}










