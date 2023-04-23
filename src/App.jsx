import { Sidebar, Display } from "@/components";
import styles from "./App.module.scss";

function App() {
  const itemData = {
    itemName: "Battery",
    recipes: [
      {
        name: "Battery",
        time: 3,
        producedIn: ["Blender"],
        ingredients: [
          {
            item: "Sulfuric Acid",
            amount: 2.5,
          },
          {
            item: "Alumina Solution",
            amount: 2,
          },
          {
            item: "Aluminum Casing",
            amount: 1,
          },
        ],
        products: [
          {
            item: "Battery",
            amount: 1,
          },
        ],
      },
      {
        name: "Alternate: Classic Battery",
        time: 8,
        producedIn: ["Manufacturer"],
        ingredients: [
          {
            item: "Sulfur",
            amount: 6,
          },
          {
            item: "Alclad Aluminum Sheet",
            amount: 7,
          },
          {
            item: "Plastic",
            amount: 8,
          },
          {
            item: "Wire",
            amount: 12,
          },
        ],
        products: [
          {
            item: "Battery",
            amount: 4,
          },
        ],
      },
    ],
    usedIn: [
      {
        name: "Magnetic Field Generator",
        time: 120,
        producedIn: ["Manufacturer"],
        ingredients: [
          {
            item: "Versatile Framework",
            amount: 5,
          },
          {
            item: "Electromagnetic Control Rod",
            amount: 2,
          },
          {
            item: "Battery",
            amount: 10,
          },
        ],
        products: [
          {
            item: "Magnetic Field Generator",
            amount: 2,
          },
        ],
      },
      {
        name: "Alternate: Super-State Computer",
        time: 50,
        producedIn: ["Manufacturer"],
        ingredients: [
          {
            item: "Computer",
            amount: 3,
          },
          {
            item: "Electromagnetic Control Rod",
            amount: 2,
          },
          {
            item: "Battery",
            amount: 20,
          },
          {
            item: "Wire",
            amount: 45,
          },
        ],
        products: [
          {
            item: "Supercomputer",
            amount: 2,
          },
        ],
      },
    ],
  };

  return (
    <>
      <header className={styles.appHeader}>
        <h1>Satisfactory Recipes</h1>
        <hr></hr>
      </header>
      <main className={styles.appMain}>
        <Sidebar />
        <Display data={itemData} />
      </main>
    </>
  );
}

export default App;
