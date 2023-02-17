import React, { useContext } from "react";
import TextContext from "../context/TextContext";
import useTextData from "../hooks/useTextData";

function FormCorTexto() {
  const { state } = useContext(TextContext);
  const propertyName = "color";

  const color = useTextData(state[propertyName], propertyName);

  const handleClick = () => {
    color.updateChange();
    color.clear();
  };

  return (
    <form action="" className="FormCorTexto defaultForm">
      <h4>Mudar cor do Texto para ({state[propertyName]})</h4>
      <label htmlFor="input-color">
        <input
          type="text"
          id="input-color"
          onChange={color.handleChange}
          value={color.value}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Alterar
      </button>
    </form>
  );
}

export default FormCorTexto;
