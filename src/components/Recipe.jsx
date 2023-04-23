import { useState } from "react";
import { TriangleSvg } from "@/components";
import styles from "./Recipe.module.scss";

export default function Recipe({ data }) {
  const [isRotated, setIsRotated] = useState(false);
  return (
    <>
      <h4
        onClick={() => {
          setIsRotated(!isRotated);
        }}
      >
        <TriangleSvg small={true} rotated={isRotated} />
        {data.name}
      </h4>
      <ul className={styles.topLevelList}>
        <li>Crafting time: {data.time}s</li>
        <li>
          Produced in:
          <ul>
            {data.producedIn.map((machine, index) => (
              <li key={index}>{machine}</li>
            ))}
          </ul>
        </li>
        <li>
          Products:
          <ul>
            {data.products.map((product, index) => (
              <li key={index}>
                {product.item} ({product.amount})
              </li>
            ))}
          </ul>
        </li>
        <li>
          Ingredients:
          <ul>
            {data.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.item} ({ingredient.amount})
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}