import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllReport(COMPANY_ID) {
    return request(`${API_URL}/report/${COMPANY_ID}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': USER_TOKEN,
  
      },
    });
  }
  
  export async function getEmployeeReport(employeeId) {
      return request(`${API_URL}/report/employee/${employeeId}`, {
        method: 'get',
        headers: {
           'Content-Type': 'application/json',
           'Authorization': USER_TOKEN,
        },
      });
    }
  
  export async function createReport(body, userId) {
    return request(`${API_URL}/report/create`, {
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
  
  export async function updateReport(body, reportId) {
    return request(`${API_URL}/report/update/${reportId}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': USER_TOKEN,
      },
      body: JSON.stringify(body),
    });
  }

  export async function deleteReport(reportId) {
    return request(`${API_URL}/report/delete/${reportId}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': USER_TOKEN,
      },
    });
  }