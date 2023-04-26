import { useState, useEffect } from "react";
import { Sidebar, Display, ItemList } from "@/components";
import { getItemSearch } from "@/utils/api";
import styles from "./App.module.scss";

function App() {
  const [item, setItem] = useState();
  const [itemName, setItemName] = useState();

  useEffect(() => {
    if (itemName) {
      (async () => {
        const result = await getItemSearch(itemName);
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
        <ItemList />
      </main>
    </>
  );
}

export default App;
