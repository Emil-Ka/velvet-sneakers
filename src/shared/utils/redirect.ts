import { getFullHref } from './get-full-href';
import { updateStore } from './update-store';

export const redirect = async (to: string) => {
  await updateStore();

  window.location.href = getFullHref(to);
};
