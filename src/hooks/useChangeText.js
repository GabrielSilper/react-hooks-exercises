import { useState } from "react";

function useChangeText(initialProperty) {
  const [property, setProperty] = useState(initialProperty);

  function changeProperty(value) {
    setProperty(value);
  }

  function clear() {
    setProperty("");
  }

  return {
    property,
    changeProperty,
    clear,
  };
}

export default useChangeText();