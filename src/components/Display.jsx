import { useState } from "react";
import { TriangleSvg, Recipe } from "@/components";
import styles from "./Display.module.scss";

export default function Display() {
  const [isRotated, setIsRotated] = useState(false);
  const recipeData = {
    name: "Battery",
    time: 3,
    producedIn: ["Blender"],
    ingredients: [
      { item: "Sulfuric Acid", amount: 2.5 },
      { item: "Alumina Solution", amount: 2 },
      { item: "Aluminum Casing", amount: 1 },
    ],
    products: [{ item: "Battery", amount: 1 }],
  };

  return (
    <div className={styles.display}>
      <h2>Battery</h2>
      <h3
        onClick={() => {
          setIsRotated(!isRotated);
        }}
      >
        <TriangleSvg rotated={isRotated} />
        Recipes
      </h3>
      <Recipe data={recipeData} />
      <div className={styles.recipes}></div>
    </div>
  );
}
