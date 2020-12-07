import React, { ReactNode, ComponentProps, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

type RouterProps = ComponentProps<typeof Route>;

interface Props extends RouterProps {
  children: ReactNode;
}

// mock
const isAuthorized = () => {
  return Promise.resolve(false);
};

export const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const [isAuthorizedState, setAuthorizedStatus] = useState(false);
  const [isLoading, setLoading] = useState(true);

  if (isLoading) {
    isAuthorized().then((value) => {
      setAuthorizedStatus(value);
      setLoading(false);
    });
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoading || isAuthorizedState ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
