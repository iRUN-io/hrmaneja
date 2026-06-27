import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllTasks(COMPANY_ID) {
  return request(`${API_URL}/tasks/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}

export async function getEmployeeTask(employeeId) {
    return request(`${API_URL}/tasks/employee/${employeeId}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': USER_TOKEN,
      },
    });
  }

export async function createTask(body, userId) {
  return request(`${API_URL}/tasks/create`, {
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

export async function updateTask(body, taskId) {
  return request(`${API_URL}/tasks/update/${taskId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

export async function completeTask(body, taskId) {
    return request(`${API_URL}/tasks/completed/${taskId}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': USER_TOKEN,
      },
      body: JSON.stringify(body),
    });
  }

  export async function pendingTask(body, taskId) {
    return request(`${API_URL}/tasks/pending/${taskId}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': USER_TOKEN,
      },
      body: JSON.stringify(body),
    });
  }

  export async function deleteTask(taskId) {
    return request(`${API_URL}/tasks/delete/${taskId}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': USER_TOKEN,
      },
    });
  }





