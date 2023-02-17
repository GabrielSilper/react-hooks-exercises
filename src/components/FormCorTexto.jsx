import React, { useContext, useState } from "react";
import TextContext from "../context/TextContext";

function FormCorTexto() {
  const textData = useContext(TextContext);

  const [color, setColor] = useState("");

  const handleChange = ({ target: { value } }) => {
    setColor(value);
  };

  const handleClick = () => {
    textData.changeTextColor(color);
    setColor("");
  };

  return (
    <form action="" className="FormCorTexto defaultForm">
      <h4>Mudar cor do Texto</h4>
      <label htmlFor="input-color">
        <input
          type="text"
          id="input-color"
          value={color}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Alterar
      </button>
    </form>
  );
}

export default FormCorTexto;
