import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import ThemeProvider, { useTheme } from "./context/ThemeContext";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
