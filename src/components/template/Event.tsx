import React, { useEffect, useContext, useState, useMemo, useCallback } from 'react';
import './Event.scss';
import { Octokit } from '@octokit/rest';
import { AuthContext } from '@/context/auth';
import { SpinnerLoading } from '../atom/Loading/SpinnerLoading';
import { Box } from '@material-ui/core';
import { SquareLoading } from '../atom/Loading/SquareLoading';

interface Props {}

export const Event: React.FC<Props> = () => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

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

  const [notifications, setNotifications] = useState<NotificationsReturn['data']>([]);

  const fetch = useCallback((all?: boolean, participating?: boolean, since?: string, before?: string) => {
    return octokit.activity.listNotificationsForAuthenticatedUser({ all, participating, since, before });
  }, []);

  useEffect(() => {
    fetch().then((notifications) => {
      setLoading(false);
      setNotifications(notifications.data);
    });
  }, []);

  return loading ? (
    loadingComponent
  ) : (
    <div>
      {notifications.map((notificate) => {
        return notificate.subject.title;
      })}
    </div>
  );
};

const loadingComponent = (
  <Box display={'flex'} alignItems={'center'}>
    <SpinnerLoading />
    <Box ml={2}>Loading</Box>
  </Box>
);
