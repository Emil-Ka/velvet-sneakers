import { User } from './user';

export interface RegisterRequest {
  email: string;
  password: string;
  phone: string;
  first_name: string;
  second_name: string;
}

export interface RegisterResponse {
  access: string;
  data: User;
}
