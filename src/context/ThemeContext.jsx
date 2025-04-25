import { createContext, useContext, useEffect, useState } from "react";

const themes = {
  light: "light",
  dark: "dark",
};

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? themes.dark : themes.light;
  const localStorageTheme = localStorage.getItem("theme");
  const initialTheme = localStorageTheme || systemTheme;

  const [theme, setTheme] = useState(initialTheme);
  
  // Update the `data-theme` attribute on the `<html>` element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
