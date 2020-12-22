import React from 'react';
import { Container } from '@material-ui/core';
import { Events } from '@/components/organisms/Events';
interface Props {}

export const AuthHome: React.FC<Props> = () => {
  return (
    <Container>
      <Events />
    </Container>
  );
};
