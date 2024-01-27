import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
