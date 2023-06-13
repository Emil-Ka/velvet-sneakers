import { store } from 'store';
import { ssrServerApi } from '../api';

export const updateStore = async () => {
  try {
    await ssrServerApi.post('/update-store', store.getState(), {
      headers: {
        Cookie: document.cookie,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
