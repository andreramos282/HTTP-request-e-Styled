import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { LotteryProvider } from "./contexts/LotteryContext";
import Megasena from "./pages/Megasena";
import ThemeToggle from "./components/ThemeToggle";
import { lightTheme, darkTheme } from "./themes";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <LotteryProvider>
        <Megasena />
        <ThemeToggle themeMode={theme} toggleTheme={toggleTheme} />
      </LotteryProvider>
    </ThemeProvider>
  );
}