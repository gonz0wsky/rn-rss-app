import axios from 'axios';
import {API_ENDPOINT} from 'config';
import {ApiRequestParams} from './types';

const HEADERS = Object.freeze({
  Accept: 'application/xml',
  'Content-Type': 'application/xml',
});

export const getRequest = async <T>({path}: ApiRequestParams) => {
  try {
    return axios.get<T>(`${API_ENDPOINT}/${path}`, {
      headers: HEADERS,
    });
  } catch (error) {
    throw error;
  }
};
