import { useState } from "react";
import "./Button.css";

function Button() {
  const [isColoured, setIsColoured] = useState(false);

  const toggleIsColoured = () => setIsColoured(!isColoured);

  return (
    <button
      className={isColoured ? "white-background" : ""}
      onClick={toggleIsColoured}
    >
      Click me!
    </button>
  );
}

export default Button;
