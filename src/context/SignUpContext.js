"use client";

import { createContext, useContext, useState } from "react";

const SignContext = createContext();

export function SignProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [conditions, setConditions] = useState({
    success: false,
    messages: ''
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  return (
    <SignContext.Provider
      value={{showModal, setShowModal, conditions, setConditions, data, setData}}
    >
      {children}
    </SignContext.Provider>
  );
}

export function useSignUp() {
  return useContext(SignContext);
}