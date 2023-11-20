import { createContext, useContext } from "react";

const themeContext = createContext();

export const useTheme = () => useContext(themeContext);

export const MyTheme = ({ childeren, theme }) => {
  return (
    <>
      <themeContext.Provider value={theme}>{childeren}</themeContext.Provider>
    </>
  );
};
