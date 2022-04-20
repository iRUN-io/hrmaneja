import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllActivities(userId, ref) {
  return request(`${API_URL}/api/activity/${userId}?ref=${ref}`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': USER_TOKEN,
    },
    params: {
      id: userId,
      ref: ref,
    },
  });
}

export async function getActivity(userId, id) {
  return request(`${API_URL}/api/activity/${userId}?id=${id}`, {
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

export async function createActivity(body, userId) {
  return request(`${API_URL}/api/activity/${userId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function updateActivity(body, userId, myUserId) {
  return request(`${API_URL}/api/activity/${userId}?id=${myUserId}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteActivity(userId, myUserId, ref) {
  return request(`${API_URL}/api/activity/${userId}?id=${myUserId}&ref=${ref}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    params: {
      id: userId,
      ref: ref,
    },
  });
}
