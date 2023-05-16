import { useState, useRef, useEffect } from "react";
import { TriangleSvg, Recipe } from "@/components";
import styles from "./RecipeGroup.module.scss";
import { toggleMaxHeight } from "@/utils";

export default function RecipeGroup({
  recipeGroup: { header, recipesArray: recipes },
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const recipeGroupRef = useRef();
  const [recipeRefs, setRecipeRefs] = useState([]);

  const addRecipeRef = (ref) => {
    recipeRefs.push(ref);
    setRecipeRefs(recipeRefs);
  };

  useEffect(() => {
    for (let i = 0; i < recipes.length; i++) {
      if (!recipes[i].name.includes("Alternate")) {
      }
    }
  }, recipeRefs);

  const expandRecipes = () => {
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
        <h3 onClick={expandRecipes}>
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
            addRef={addRecipeRef}
          />
        ))}
      </div>
    </div>
  );
}
