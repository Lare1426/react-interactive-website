import { useState, useRef } from "react";
import { TriangleSvg, Recipe } from "@/components";
import styles from "./RecipeGroup.module.scss";
import { toggleMaxHeight } from "@/utils";

export default function RecipeGroup({
  recipeGroup: { header, recipesArray: recipes },
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const recipesRef = useRef();

  return (
    <div className={styles.recipeGroup}>
      {header && (
        <h3
          onClick={() => {
            toggleMaxHeight(recipesRef.current, isExpanded);
            setIsExpanded(!isExpanded);
          }}
        >
          <TriangleSvg rotated={isExpanded} />
          {header}
        </h3>
      )}
      <div className={header && styles.recipes} ref={recipesRef}>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} data={recipe} parent={recipesRef.current} />
        ))}
      </div>
    </div>
  );
}
