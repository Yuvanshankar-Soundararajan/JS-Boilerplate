import React, { useState } from "react";
import Checkbox from "./checkbox";
import "./earning.css"
function App() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  return (
    <div >
      <button id = "button" onClick={onClick}>Earning</button>
      {showText ? <Text /> : null}
    </div>
  );
}
const Text = () => <div><Checkbox></Checkbox></div>;
export default App;