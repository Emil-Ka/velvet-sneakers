import axios from 'axios';

import { SSR_SERVER_URL } from 'config';

export const ssrServerApi = axios.create({
  baseURL: SSR_SERVER_URL,
});
