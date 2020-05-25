import { createContext, useContext } from 'react';

export const AuthAdminContext = createContext();

export function useAdminAuth() {
  return useContext(AuthAdminContext);
}
