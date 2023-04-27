import { useState } from "react";
import { Sidebar, Display, ItemList } from "@/components";
import styles from "./App.module.scss";

function App() {
  const [displayData, setDisplayData] = useState();

  return (
    <>
      <header className={styles.appHeader}>
        <h1>Satisfactory Recipes</h1>
        <hr></hr>
      </header>
      <main className={styles.appMain}>
        <Sidebar setDisplayData={setDisplayData} />
        <Display data={displayData} />
        <ItemList setDisplayData={setDisplayData} />
      </main>
    </>
  );
}

export default App;
