import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllDocuments(COMPANY_ID) {
  return request(`${API_URL}/documents/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
    // params: {
    //   userId: userId,
    // },
  });
}

export async function getDocument(id) {
  return request(`${API_URL}/documents/details/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
  });
}


export async function getEmployeeDocument(id) {
    return request(`${API_URL}/documents/employee/${id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': USER_TOKEN,
      },
    });
  }

export async function createDocument(body, userId) {
  return request(`${API_URL}/documents/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateDocument(body, documentId) {
  return request(`${API_URL}/documents/update/${documentId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteDocument(documentId) {
  return request(`${API_URL}/documents/delete/${documentId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}
