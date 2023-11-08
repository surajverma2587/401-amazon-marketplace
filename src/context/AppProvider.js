import { createContext, useContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    basket: [],
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
