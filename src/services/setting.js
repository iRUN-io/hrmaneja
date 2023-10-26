import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getAllSetting(COMPANY_ID) {
  return request(`${API_URL}/setting/${COMPANY_ID}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}

export async function getSetting(companyId) {
    return request(`${API_URL}/setting/${companyId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': USER_TOKEN,
        },
    });
}

export async function createOrUpdateSetting(body) {
  return request(`${API_URL}/setting/create`, {
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

export async function updateSetting(body, settingId) {
  return request(`${API_URL}/setting/update/${settingId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteSetting(settingId) {
  return request(`${API_URL}/setting/delete/${settingId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}

// get total number of services 
export async function totalEmployees(companyId) {
  return request(`${API_URL}/setting/totalEmployees/${companyId}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': USER_TOKEN,
      },
  });
}

export async function totalDepartments(companyId) {
  return request(`${API_URL}/setting/totalDepartments/${companyId}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': USER_TOKEN,
      },
  });
}

export async function totalLeaves(companyId) {
  return request(`${API_URL}/setting/totalLeaves/${companyId}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': USER_TOKEN,
      },
  });
}

export async function totalUsers(companyId) {
  return request(`${API_URL}/setting/totalUsers/${companyId}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': USER_TOKEN,
      },
  });
}

export async function totalCompanies(companyId) {
  return request(`${API_URL}/setting/totalCompanies/${companyId}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': USER_TOKEN,
      },
  });
}

export async function totalRequisition(companyId) {
  return request(`${API_URL}/setting/totalRequisitions/${companyId}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': USER_TOKEN,
      },
  });
}

export async function totalJobs(companyId) {
  return request(`${API_URL}/setting/totalJobs/${companyId}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': USER_TOKEN,
      },
  });
}

export async function totalDocuments(companyId) {
  return request(`${API_URL}/setting/totalDocuments/${companyId}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': USER_TOKEN,
      },
  });
}

export async function getHolidays(country, year) {
  return request(`https://date.nager.at/api/v2/PublicHolidays/${year}/${country}`, {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Authorization': USER_TOKEN,
      },
  });
}