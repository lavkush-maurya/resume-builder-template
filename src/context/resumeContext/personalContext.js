import React, { createContext, useState } from "react";

export const PERSONALCONTEXT = createContext({
  inputPersonal: { photo: "", firstName: "", lastName: "", phone: "", address: "" },
  setInput: () => null,
});

function PersonalContext({ children }) {
  const [inputPersonal, setInputPersonal] = useState({
    photo: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });
  return (
    <PERSONALCONTEXT.Provider value={{ inputPersonal, setInputPersonal }}>
      {children}
    </PERSONALCONTEXT.Provider>
  );
}

export default PersonalContext;
