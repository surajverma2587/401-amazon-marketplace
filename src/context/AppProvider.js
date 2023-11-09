import { createContext, useContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    basket: getFromLocalStorage("basket", []),
    wishlists: getFromLocalStorage("wishlists", []),
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
