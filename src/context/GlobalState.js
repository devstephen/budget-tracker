import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -200 },
    { id: 2, text: "Salary", amount: 500 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 200 },
  ],
};

// Create Global context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
