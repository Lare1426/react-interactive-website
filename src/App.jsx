import { useState, useEffect } from "react";
import { Sidebar, Display, ItemList } from "@/components";
import { getItem, getItemSearch } from "@/utils/api";
import styles from "./App.module.scss";

function App() {
  const [item, setItem] = useState();
  const [requestInfo, setRequestInfo] = useState();

  useEffect(() => {
    if (requestInfo) {
      (async () => {
        let result;
        if (requestInfo.isItem) {
          result = await getItem(requestInfo.itemName);
        } else {
          result = await getItemSearch(requestInfo.itemName);
        }
        setItem(result);
      })();
    }
  }, [requestInfo]);

  return (
    <>
      <header className={styles.appHeader}>
        <h1>Satisfactory Recipes</h1>
        <hr></hr>
      </header>
      <main className={styles.appMain}>
        <Sidebar setRequestInfo={setRequestInfo} />
        <Display data={item} />
        <ItemList setRequestInfo={setRequestInfo} />
      </main>
    </>
  );
}

export default App;
