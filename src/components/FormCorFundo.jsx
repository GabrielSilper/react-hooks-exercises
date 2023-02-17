import React, { useContext, useState } from "react";
import TextContext from "../context/TextContext";

function FormCorFundo() {
  const { state, setState } = useContext(TextContext);

  const [background, setBackground] = useState(state.background);

  const handleChange = ({ target: { value } }) => {
    setBackground(value);
  };

  const handleClick = () => {
    setState({
      ...state,
      background,
    });
    setBackground("");
  };

  return (
    <form action="" className="FormCorFundo defaultForm">
      <h4>Mudar cor do Fundo</h4>
      <label htmlFor="input-background">
        <input
          type="text"
          id="input-background"
          onChange={handleChange}
          value={background}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Alterar
      </button>
    </form>
  );
}

export default FormCorFundo;
