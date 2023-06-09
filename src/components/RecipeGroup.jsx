import { useState, useRef, useEffect } from "react";
import { TriangleSvg, Recipe } from "@/components";
import styles from "./RecipeGroup.module.scss";
import { toggleMaxHeight } from "@/utils";

export default function RecipeGroup({
  recipeGroup: { header, recipesArray: recipes },
  expandOnLoad,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const recipeGroupRef = useRef();
  const recipeRefs = useRef({});

  let childrenScrollHeight = 0;

  useEffect(() => {
    if (!expandOnLoad) {
      return;
    }

    for (const recipe of recipes) {
      if (!recipe.name.includes("Alternate")) {
        const recipeRef = recipeRefs.current[recipe.id];
        recipeRef.expandRecipe();
        childrenScrollHeight += recipeRef.scrollHeight;
      }
    }
    setIsExpanded(true);
    adjustMaxHeight(childrenScrollHeight);
  }, []);

  const toggleRecipes = () => {
    toggleMaxHeight(recipeGroupRef.current, isExpanded);
    setIsExpanded(!isExpanded);
  };

  const adjustMaxHeight = (childrenScrollHeight) => {
    const maxHeight = parseInt(recipeGroupRef.current.style.maxHeight);
    const isChildCollapsing = maxHeight > recipeGroupRef.current.scrollHeight;
    const height = isChildCollapsing
      ? maxHeight
      : recipeGroupRef.current.scrollHeight;

    // Scroll height of current element only includes visible part of child.
    // Use expanded height of child to calculate the actual height.
    // This needs to be calculated for the complete animation.
    const updatedMaxHeight = childrenScrollHeight + height;
    recipeGroupRef.current.style.maxHeight = updatedMaxHeight + "px";
  };

  return (
    <div className={styles.recipeGroup}>
      {header && (
        <h3 onClick={toggleRecipes}>
          <TriangleSvg rotated={isExpanded} />
          {header}
        </h3>
      )}
      <div className={header && styles.recipes} ref={recipeGroupRef}>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            data={recipe}
            adjustParentMaxHeight={adjustMaxHeight}
            ref={(node) => {
              if (node) {
                recipeRefs.current[recipe.id] = node;
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
