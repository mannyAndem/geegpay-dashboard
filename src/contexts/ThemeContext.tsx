import { PropsWithChildren, createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const themeContext = createContext<ThemeContext | null>(null);

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(themeContext)!;

  return context;
};

export default ThemeContextProvider;
