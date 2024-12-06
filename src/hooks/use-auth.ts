import { useContext } from "react";
import {AuthContext} from '../contexts/auth-context.tsx';

export function useAuthContext() {
  return useContext(AuthContext);
}