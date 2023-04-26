import { useState } from "react";
import { TriangleSvg, Recipe } from "@/components";
import styles from "./Recipes.module.scss";

export default function Recipes({ children, recipes }) {
  const [isRotated, setIsRotated] = useState(false);
  return (
    <div className={styles.recipes}>
      <h3
        onClick={() => {
          setIsRotated(!isRotated);
        }}
      >
        <TriangleSvg rotated={isRotated} />
        {children}
      </h3>
      <div>
        {recipes.map((recipe, index) => (
          <Recipe key={index} data={recipe} />
        ))}
      </div>
    </div>
  );
}