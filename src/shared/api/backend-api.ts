import axios from 'axios';

import { BACKEND_URL } from 'config';

export const backendApi = axios.create({
  baseURL: BACKEND_URL,
});
