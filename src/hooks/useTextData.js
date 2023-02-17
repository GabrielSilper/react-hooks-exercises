import { useContext, useState } from "react";
import TextContext from "../context/TextContext";

function useTextData(initialValue, nameValue) {
  const [value, setValue] = useState(initialValue);
  const { state, setState } = useContext(TextContext);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const clear = () => {
    setValue("");
  };

  const updateChange = () => {
    setState({
      ...state,
      [nameValue]: value,
    });
  };

  const handleClick = () => {
    updateChange();
    clear();
  };

  return {
    value,
    updateChange,
    clear,
    handleChange,
    handleClick,
  };
}

export default useTextData;
