import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import { Button, CountingButton } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [isColoured, setIsColoured] = useState(false);
  const toggleIsColoured = () => setIsColoured(!isColoured);

  return (
    <div className={styles.app}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.react}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <CountingButton />
        <button
          className={isColoured ? styles.whiteBackground : ""}
          onClick={toggleIsColoured}
        >
          Click me!
        </button>
        <Button
          className={isColoured ? styles.whiteBackground : ""}
          onClick={toggleIsColoured}
        >
          Click Yes!
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
