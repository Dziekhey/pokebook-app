import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const primary = '#E85382'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(primary);

  const currentTheme = (colour) => {
    setTheme(colour);
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
