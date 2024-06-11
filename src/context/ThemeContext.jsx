import { createContext, useReducer, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme.mjs'; // Adjust the import path as needed

const ThemeContext = createContext();

const INITIAL_STATE = {
  theme: typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
    document.documentElement.setAttribute('data-theme', state.theme);

    const currentTheme = state.theme === 'light' ? lightTheme : darkTheme;
    const root = document.documentElement;

    Object.entries(currentTheme.custom).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [state.theme]);

  const currentTheme = state.theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <MuiThemeProvider theme={currentTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
