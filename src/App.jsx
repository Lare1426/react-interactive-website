import { useState, useEffect } from "react";
import { Sidebar, Display, ItemList } from "@/components";
import { getItem, getItemSearch } from "@/utils/api";
import styles from "./App.module.scss";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [displayData, setDisplayData] = useState();
  const [itemName, setItemName] = useState();
  const [itemNameSearch, setItemNameSearch] = useState();

  const reconstructItem = (item) => {
    const recipeGroups = [];
    if (item.recipes) {
      recipeGroups.push({ header: "Recipes:", recipesArray: item.recipes });
    }
    if (item.usedIn) {
      recipeGroups.push({ header: "Used in:", recipesArray: item.usedIn });
    }

    return {
      header: item.itemName,
      recipeGroups,
    };
  };

  useEffect(() => {
    if (!itemName) {
      return;
    }

    (async () => {
      const item = await getItem(itemName);
      setDisplayData(reconstructItem(item));
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
      setDisplayData(reconstructItem(result));
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
          setDisplayData={setDisplayData}
          setItemNameSearch={setItemNameSearch}
          errorMessage={errorMessage}
        />
        <Display data={displayData} />
        <ItemList setItemName={setItemName} />
      </main>
    </>
  );
}

export default App;
