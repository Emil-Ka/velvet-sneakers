import { BASE_URL } from 'config';
import { IProduct } from 'shared/types/product';
import { PRODUCTS } from './constants';

export function fetchProducts(): Promise<IProduct[]> {
  return fetch(`${BASE_URL}/product/`)
    .then((response) => response.json())
    .catch(() => PRODUCTS);
}
