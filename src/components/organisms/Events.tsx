import React, { useEffect, useContext, useState, useMemo, useCallback } from 'react';
import './Events.scss';
import { Octokit } from '@octokit/rest';
import { AuthContext } from '@/context/auth';
import { SpinnerLoading } from '../atom/Loading/SpinnerLoading';
import { Box, Grid } from '@material-ui/core';
import { Event } from '@/components/organisms/Event';
import { Reason } from '@/types/github';

interface Props {}

export const Events: React.FC<Props> = () => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const reasons: Reason[] = ['subscribed'];
  const exceptSelf = true;

  const octokit = useMemo(
    () =>
      new Octokit({
        auth: auth.authStatus!.token,
      }),
    [auth.authStatus]
  );

  type NotificationsReturn = ReturnType<typeof octokit.activity.listNotificationsForAuthenticatedUser> extends Promise<
    infer T
  >
    ? T
    : never;

  const [events, setEvents] = useState<NotificationsReturn['data']>([]);

  const fetch = useCallback((opts: { all?: boolean; participating?: boolean; since?: string; before?: string }) => {
    const { all, participating, since, before } = opts;
    return octokit.activity.listNotificationsForAuthenticatedUser({ all, participating, since, before });
  }, []);

  useEffect(() => {
    fetch({ all: true }).then((result) => {
      setLoading(false);
      let events = result.data.filter((e) => (reasons as string[]).includes(e.reason));
      if (exceptSelf) {
        events = events.filter((e) => e.repository.owner.login !== auth.authStatus?.githubId);
      }
      console.log(events, auth.authStatus?.githubId);
      setEvents(events);
    });
  }, []);

  return loading ? (
    loadingComponent
  ) : (
    <Grid container spacing={1}>
      {events.map((event) => {
        return (
          <Grid item sm={12} md={6} key={event.id}>
            <Event event={event} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const loadingComponent = (
  <Box display={'flex'} alignItems={'center'}>
    <SpinnerLoading />
    <Box ml={2}>Loading</Box>
  </Box>
);
