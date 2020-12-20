import React, { useContext } from 'react';
import { UnauthHome } from './UnauthHome';
import { AuthContext } from '../../context/auth';
import { AuthHome } from './AuthHome';

interface Props {}

export const Home: React.FC<Props> = () => {
  const auth = useContext(AuthContext);
  return auth.authStatus ? <AuthHome /> : <UnauthHome />;
};
