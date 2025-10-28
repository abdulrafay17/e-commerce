"use client";

import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export function LoginProvider({ children }) {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [conditions, setConditions] = useState({ success: false, messages: "" });
  const [showModal, setShowModal] = useState(false);

  return (
    <AuthContext.Provider
      value={{ inputs, setInputs, conditions, setConditions, showModal, setShowModal }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
