import React, { useState } from "react";
import TextContext from "./TextContext";

function TextProvider({ children }) {
  const [state, setState] = useState({
    text: "Meu texto que será modificado",
    color: "red",
    size: "",
    background: "",
  });

  const changeTextColor = (color) => {
    setState({
      ...state,
      color,
    });
  };

  return (
    <TextContext.Provider value={{state, changeTextColor, setState}}>{children}</TextContext.Provider>
  );
}

export default TextProvider;
