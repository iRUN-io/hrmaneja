import request from 'umi-request';
import { API_URL, USER_TOKEN } from '../config/config';

export async function getInventoryItems(COMPANY_ID) {
  return request(`${API_URL}/inventories/${COMPANY_ID}`, {
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

export async function getInventory(id) {
  return request(`${API_URL}/inventories/details/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
  });
}


export async function getEmployeeInventory(id) {
    return request(`${API_URL}/inventories/employee/${id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': USER_TOKEN,
      },
    });
  }

export async function createInventoryItem(body) {
  return request(`${API_URL}/inventories/create`, {
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


export async function getCategories() {
  return request(`${API_URL}/inventories/get/categories`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}
export async function updateInventoryItem(body, inventoryId) {
  return request(`${API_URL}/inventories/update/${inventoryId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
    },
    body: JSON.stringify(body),
  });
}


export async function deleteInventoryItem(inventoryId) {
  return request(`${API_URL}/inventories/delete/${inventoryId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': USER_TOKEN,
    },
  });
}
