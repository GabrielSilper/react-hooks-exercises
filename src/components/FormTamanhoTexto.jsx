import React, { useContext } from "react";
import TextContext from "../context/TextContext";
import useTextData from "../hooks/useTextData";

function FormTamanhoTexto() {
  const { state } = useContext(TextContext);
  const propertyName = "size";

  const size = useTextData(state[propertyName], propertyName);

  const handleClick = () => {
    size.updateChange();
    size.clear();
  };

  return (
    <form action="" className="FormTamanhoTexto defaultForm">
      <h4>Mudar tamanho do Texto({state[propertyName]})</h4>
      <label htmlFor="input-text-size">
        <input
          type="text"
          id="input-text-size"
          onChange={size.handleChange}
          value={size.value}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Alterar
      </button>
    </form>
  );
}

export default FormTamanhoTexto;
