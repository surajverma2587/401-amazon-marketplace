import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";
import { AppProvider } from "./context/AppProvider";

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};
