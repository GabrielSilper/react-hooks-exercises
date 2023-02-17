import React, { useContext } from "react";
import TextContext from "../context/TextContext";
import useTextData from "../hooks/useTextData";

function FormCorFundo() {
  const { state } = useContext(TextContext);
  const propertyName = "background";

  const background = useTextData(state[propertyName], propertyName);

  return (
    <form action="" className="FormCorFundo defaultForm">
      <h4>Mudar cor do Fundo({state[propertyName]})</h4>
      <label htmlFor="input-background">
        <input
          type="text"
          id="input-background"
          onChange={background.handleChange}
          value={background.value}
        />
      </label>
      <button type="button" onClick={background.handleClick}>
        Alterar
      </button>
    </form>
  );
}

export default FormCorFundo;
