import request from 'umi-request';
import { FLUTTERWAVE_TOKEN } from '../config/config';

export async function getAllBanks() {
  return request(`https://api.flutterwave.com/v3/banks/NG`, {
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': FLUTTERWAVE_TOKEN,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    },
  });
}

