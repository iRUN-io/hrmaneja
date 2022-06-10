import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllLeaves() {
  return request(`${API_URL}/leaves`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}

export async function getEmployee(userId, id) {
    return request(`${API_URL}/api/leave/${userId}?id=${id}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
      params: {
        userId: userId,
        id: id,
      },
    });
  }

export async function createLeave(body, userId) {
  return request(`${API_URL}/leaves/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  });
}

export async function updateLeave(body, leaveId) {
  return request(`${API_URL}/leaves/update/${leaveId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteLeave(leaveId) {
  return request(`${API_URL}/leaves/delete/${leaveId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
