import React, { useContext, useState } from "react";
import TextContext from "../context/TextContext";

function FormTamanhoTexto() {
  const { state, setState } = useContext(TextContext);

  const [size, setSize] = useState(state.size);

  const handleClick = () => {
    setState({
      ...state,
      size,
    });
    setSize("");
  };

  const handleChange = ({ target: { value } }) => {
    setSize(value);
  };

  return (
    <form action="" className="FormTamanhoTexto defaultForm">
      <h4>Mudar tamanho do Texto</h4>
      <label htmlFor="input-text-size">
        <input
          type="text"
          id="input-text-size"
          onChange={handleChange}
          value={size}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Alterar
      </button>
    </form>
  );
}

export default FormTamanhoTexto;
