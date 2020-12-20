import React, { useEffect, useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import ReactDOM from 'react-dom';

import { Routing } from '@/components/Routing';
import { getTheme } from './libs/localStorage';
import { dark, light } from './libs/theme';
import { ThemeContext } from './context/theme';
import { AuthContext } from './context/auth';
import { onChangeAuthState } from './libs/github';
import { authState } from './context/auth';
import { SquareLoading } from './components/atom/Loading/SquareLoading';

const app = document.getElementById('app');

const AppComponent: React.FC = () => {
  const userTheme = getTheme();
  const [theme, setTheme] = useState(userTheme === 'dark' ? dark : light);
  const [user, setUser] = useState<authState | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onChangeAuthState((changedUser) => {
      setUser(changedUser);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authStatus: user, isLoading }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {isLoading ? <SquareLoading /> : <Routing />}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};

ReactDOM.render(<AppComponent />, app);
