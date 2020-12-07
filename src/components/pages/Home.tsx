import React, { useContext } from 'react';
import { UnauthHome } from './UnauthHome';
import { AuthContext } from '../../context/auth';

interface Props {}

export const Home: React.FC<Props> = () => {
  const auth = useContext(AuthContext);
  return auth.authStatus ? <h1>auth home</h1> : <UnauthHome />;
};
