import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import ThemeProvider, { useTheme } from "./context/ThemeContext";
import Footer from "./components/Footer/Footer";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <Header />
      <Outlet data-testid="outlet" />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
