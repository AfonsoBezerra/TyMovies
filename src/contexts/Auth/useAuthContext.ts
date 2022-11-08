import { useContext } from 'react';
import AuthContext from '.';

export const useAuthContext = () => useContext(AuthContext);
