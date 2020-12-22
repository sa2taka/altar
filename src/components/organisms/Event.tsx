import React from 'react';
import { Octokit } from '@octokit/rest';
import './Event.scss';
import { Box, Card } from '@material-ui/core';

type EventReturnType = ReturnType<Octokit['activity']['listNotificationsForAuthenticatedUser']> extends Promise<infer T>
  ? T
  : never;
interface Props {
  event: EventReturnType['data'][number];
}

export const Event: React.FC<Props> = ({ event }) => {
  return (
    <Card>
      <Box display={'flex'} alignItems={'center'}>
        <Box ml={2}>{event.repository.name}</Box>
        <Box ml={2}>{event.subject.title}</Box>
      </Box>
    </Card>
  );
};
