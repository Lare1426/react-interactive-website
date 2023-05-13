import { useState, useRef, useEffect } from "react";
import { TriangleSvg } from "@/components";
import styles from "./Recipe.module.scss";
import { toggleMaxHeight } from "@/utils";

export default function Recipe({
  data,
  isToExpand,
  expandParent,
  adjustParentMaxHeight,
}) {
  const topLevelListRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);

  const expandList = () => {
    toggleMaxHeight(topLevelListRef.current, isExpanded, parent);
    setIsExpanded(!isExpanded);
    adjustParentMaxHeight(topLevelListRef.current.scrollHeight);
  };

  useEffect(() => {
    if (isToExpand && !data.name.includes("Alternate") && !isExpanded) {
      toggleMaxHeight(topLevelListRef.current, false);
      setIsExpanded(true);
      expandParent(topLevelListRef.current.scrollHeight);
    }
  }, []);

  return (
    <>
      <h4 onClick={expandList}>
        <TriangleSvg small={true} rotated={isExpanded} />
        {data.name}
      </h4>
      <ul className={styles.topLevelList} ref={topLevelListRef}>
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
