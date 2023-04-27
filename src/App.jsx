import { useState, useEffect } from "react";
import { Sidebar, Display, ItemList } from "@/components";
import { getItem, getItemSearch } from "@/utils/api";
import styles from "./App.module.scss";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [item, setItem] = useState();
  const [itemName, setItemName] = useState();
  const [itemNameSearch, setItemNameSearch] = useState();

  useEffect(() => {
    if (!itemName) {
      return;
    }

    (async () => {
      const result = await getItem(itemName);
      setItem(result);
    })();
  }, [itemName]);

  useEffect(() => {
    if (!itemNameSearch) {
      return;
    }

    if (errorMessage) {
      setErrorMessage("");
    }

    (async () => {
      const result = await getItemSearch(itemNameSearch);
      if (result.isError) {
        setErrorMessage(result.message);
        return;
      }
      setItem(result);
    })();
  }, [itemNameSearch]);

  return (
    <>
      <header className={styles.appHeader}>
        <h1>Satisfactory Recipes</h1>
        <hr></hr>
      </header>
      <main className={styles.appMain}>
        <Sidebar
          setItem={setItem}
          setItemNameSearch={setItemNameSearch}
          errorMessage={errorMessage}
        />
        <Display item={item} />
        <ItemList setItemName={setItemName} />
      </main>
    </>
  );
}

export default App;
