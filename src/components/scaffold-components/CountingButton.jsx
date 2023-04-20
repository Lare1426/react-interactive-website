import { useState } from "react";
import searchIcon from "../assets/searchIcon.png";
import { Button } from "./";
import styles from "./CountingButton.module.scss";

function CountingButton() {
  const [count, setCount] = useState(0);
  return (
    <Button
      className={styles.countingButton}
      onClick={() => setCount((count) => count + 1)}
    >
      <img src={searchIcon} /> count is {count}
    </Button>
  );
}

export default CountingButton;
