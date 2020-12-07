import React, { useCallback } from 'react';
import { Box, Button, Container } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import './UnauthHome.scss';
import { signinWithGithubUsingFirebase } from '@/libs/github';

interface Props {}

export const UnauthHome: React.FC<Props> = () => {
  const onClickuseAuthButton = useCallback(signinWithGithubUsingFirebase, []);
  return (
    <Container>
      <Button className="github-button" onClick={onClickuseAuthButton}>
        <Box display={'flex'} alignItems={'center'}>
          <Box my={'auto'}>
            <GitHub />
          </Box>
          <Box ml={1} my={'auto'}>
            Sign in with Github
          </Box>
        </Box>
      </Button>
    </Container>
  );
};
