import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={`App ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
 */