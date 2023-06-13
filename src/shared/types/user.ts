export interface User {
  id: number;
  last_login: string;
  is_superuser: boolean;
  email: string;
  phone: string;
  first_name: string;
  second_name: string;
  address: string;
  is_staff: boolean;
  groups: string[];
  user_permissions: string[];
}
