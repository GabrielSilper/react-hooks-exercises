import React, { useState } from "react";
import TextContext from "./TextContext";

function TextProvider({ children }) {
  const [state, setState] = useState({
    text: "Meu texto que será modificado",
    color: "",
    size: "",
    background: "",
  });

  return (
    <TextContext.Provider value={{state, setState}}>{children}</TextContext.Provider>
  );
}

export default TextProvider;
