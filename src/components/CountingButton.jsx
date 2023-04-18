import { useState } from "react";
import searchIcon from "../assets/searchIcon.png";
import { Button } from "./";
import styles from "./CountingButton.module.css";

function CountingButton() {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      <img src={searchIcon} className={styles.searchIcon} /> count is {count}
    </Button>
  );
}

export default CountingButton;
