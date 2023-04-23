import { useState } from "react";
import { TriangleSvg } from "@/components";
import styles from "./Recipe.module.scss";

export default function Recipe() {
  const [isRotated, setIsRotated] = useState(false);
  return (
    <>
      <h4
        onClick={() => {
          setIsRotated(!isRotated);
        }}
      >
        <TriangleSvg small={true} rotated={isRotated} />
        Battery
      </h4>
      <ul className={styles.topLevelList}>
        <li>Crafting time: 3s</li>
        <li>
          Produced in
          <ul>
            <li>Blender</li>
          </ul>
        </li>
        <li>
          Products
          <ul>
            <li>Battery (1)</li>
          </ul>
        </li>
        <li>
          Ingredients
          <ul>
            <li>Sulfuric acis (2.5)</li>
            <li>Alumina Solution (2)</li>
            <li>Aluminum Casing (1)</li>
          </ul>
        </li>
      </ul>
    </>
  );
}
