import { useSelector } from 'react-redux';

import { dataAuthSelector } from 'store/auth';
import { User } from '../types';

interface UseAuthPositiveReturn {
  isAuth: true;
  user: User;
}

interface UseAuthNegativeReturn {
  isAuth: false;
  user: null;
}

type UseAuthReturn = UseAuthPositiveReturn | UseAuthNegativeReturn;

export const useAuth = (): UseAuthReturn => {
  const user = useSelector(dataAuthSelector);

  if (user) {
    return {
      isAuth: true,
      user,
    };
  }

  return {
    isAuth: false,
    user,
  };
};
