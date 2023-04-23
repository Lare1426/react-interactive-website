import { Sidebar, Display } from "@/components";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <header className={styles.appHeader}>
        <h1>Satisfactory Recipes</h1>
        <hr></hr>
      </header>
      <main className={styles.appMain}>
        <Sidebar />
        <Display />
      </main>
    </>
  );
}

export default App;
