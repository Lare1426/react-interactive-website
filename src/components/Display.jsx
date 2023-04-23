import { useState } from "react";
import { TriangleSvg, Recipe } from "@/components";
import styles from "./Display.module.scss";

export default function Display() {
  const [isRotated, setIsRotated] = useState(false);
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
      <Recipe />
      <Recipe />
      <div className={styles.recipes}></div>
    </div>
  );
}
