import { createContext } from 'react';
import { Theme } from '@material-ui/core/styles/';
import { dark } from '@/libs/theme';

export interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
export const ThemeContext = createContext<IThemeContext>({ theme: dark, setTheme: () => {} });
