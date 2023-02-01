import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllCandidates(jobId) {
  return request(`${API_URL}/candidates/${jobId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}

export async function getCandidate(id) {
  return request(`${API_URL}/candidates/details/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
  });
}

export async function createCandidate(body, userId) {
  return request(`${API_URL}/candidates/create`, {
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

export async function updateCandidate(body, candidateId) {
  return request(`${API_URL}/candidates/update/${candidateId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function scoreCandidate(body, jobId) {
  return request(`${API_URL}/candidates/score/${jobId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteCandidate(candidateId) {
  return request(`${API_URL}/candidates/delete/${candidateId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}
