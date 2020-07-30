import React, { useState } from "react";
import "./App.scss";
import Form from "./components/form";
import Output from "./components/output";

function App() {
  const [properties, setProperties] = useState({
    bg: "white",
    text: "black",
    fontwt: 1000,
    fontsize: 100,
  });
  return (
    <div className="App">
      <Form update={(properties) => setProperties(properties)} />
      <Output
        bg={properties.bg}
        text={properties.text}
        fontwt={properties.fontwt}
        fontsize={properties.fontsize}
      />
    </div>
  );
}

export default App;
