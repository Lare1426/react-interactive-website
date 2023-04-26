import { useState, useEffect } from "react";
import { Sidebar, Display } from "@/components";
import styles from "./App.module.scss";

const getItem = async (itemName) => {
  const response = await fetch(
    `https://satisfactory.laurivirta.com/satisfactory-recipes/item/${itemName}`
  );
  return response.json();
};

function App() {
  const [item, setItem] = useState();
  const [itemName, setItemName] = useState();

  useEffect(() => {
    if (itemName) {
      (async () => {
        const result = await getItem(itemName);
        setItem(result);
      })();
    }
  }, [itemName]);

  return (
    <>
      <header className={styles.appHeader}>
        <h1>Satisfactory Recipes</h1>
        <hr></hr>
      </header>
      <main className={styles.appMain}>
        <Sidebar setItemName={setItemName} />
        <Display data={item} />
      </main>
    </>
  );
}

export default App;
