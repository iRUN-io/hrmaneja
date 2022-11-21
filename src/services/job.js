import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllJobs(COMPANY_ID) {
  return request(`${API_URL}/jobs/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}

export async function getJob(id) {
  return request(`${API_URL}/jobs/details/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
  });
}

export async function createJob(body, userId) {
  return request(`${API_URL}/jobs/create`, {
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

export async function updateJob(body, jobId) {
  return request(`${API_URL}/jobs/update/${jobId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteJob(jobId) {
  return request(`${API_URL}/jobs/delete/${jobId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}
