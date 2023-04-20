import styles from "./App.module.scss";
import satisfactoryPng from "@/assets/satisfactory.png";

function App() {
  return (
    <>
      <header className={styles.appHeader}>
        <h1>Satisfactory Recipes</h1>
        <hr></hr>
      </header>
      <main>
        <div>
          <img src={satisfactoryPng} />
        </div>
      </main>
    </>
  );
}

export default App;
