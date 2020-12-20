const themeKey = 'theme';

export function getTheme(): 'dark' | 'light' {
  const theme = localStorage.getItem(themeKey);
  if (theme === 'dark' || theme === 'light') {
    return theme;
  }
  return 'dark';
}

export function setTheme(theme: 'dark' | 'light'): void {
  localStorage.setItem(themeKey, theme);
}
