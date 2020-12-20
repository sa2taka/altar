import React from 'react';
import { Container } from '@material-ui/core';
import { Event } from '@/components/template/Event';
interface Props {}

export const AuthHome: React.FC<Props> = () => {
  return (
    <Container>
      <Event />
    </Container>
  );
};
