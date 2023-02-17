import { useContext } from "react";
import "./App.css";
import FormCorFundo from "./components/FormCorFundo";
import FormCorTexto from "./components/FormCorTexto";
import FormTamanhoTexto from "./components/FormTamanhoTexto";
import TextContext from "./context/TextContext";

function App() {
  const textData = useContext(TextContext);
  const textStyle = {
    color: textData.state.color,
    backgroundColor: textData.state.background,
    fontSize: textData.state.size,
  };
  return (
    <div className="App">
      <h1>Editando texto com Context API - Custom Hooks*</h1>
      <h3 style={textStyle} className="text">{textData.state.text}</h3>
      <div className="forms-container">
        <FormCorTexto />
        <FormCorFundo />
        <FormTamanhoTexto />
      </div>
    </div>
  );
}

export default App;
