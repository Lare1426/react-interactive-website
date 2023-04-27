import { useState, useEffect } from "react";
import { Sidebar, Display, ItemList } from "@/components";
import { getHardDriveRecipes, getItem, getItemSearch } from "@/utils/api";
import styles from "./App.module.scss";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [item, setItem] = useState();
  const [requestInfo, setRequestInfo] = useState();

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage("");
    }
    if (requestInfo) {
      (async () => {
        let result;
        if (requestInfo.isItem) {
          result = await getItem(requestInfo.itemName);
        } else {
          if ((requestInfo.itemName = "bulk")) {
            result = await getHardDriveRecipes();
          } else {
            result = await getItemSearch(requestInfo.itemName);
          }
        }
        if (result.status == 400) {
          const { message } = await result.json();
          setErrorMessage(message);
          throw new Error(message);
        }
        setItem(await result.json());
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
        <Sidebar setRequestInfo={setRequestInfo} errorMessage={errorMessage} />
        <Display data={item} />
        <ItemList setRequestInfo={setRequestInfo} />
      </main>
    </>
  );
}

export default App;
