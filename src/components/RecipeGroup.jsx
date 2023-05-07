import { useState, useRef, useEffect } from "react";
import { TriangleSvg, Recipe } from "@/components";
import styles from "./RecipeGroup.module.scss";
import { toggleMaxHeight } from "@/utils";

export default function RecipeGroup({
  recipeGroup: { header, recipesArray: recipes },
  expandOnLoad = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const recipeGroupRef = useRef();

  useEffect(() => {
    if (!expandOnLoad) {
      return;
    }

    setIsExpanded(!isExpanded);
    let childrenScrollHeight = 0;
    for (const recipe of recipeQueue) {
      toggleMaxHeight(recipe.ref, false);
      recipe.setIsExpanded(true);
      childrenScrollHeight += recipe.ref.scrollHeight;
    }
    adjustMaxHeight(childrenScrollHeight);
  }, []);

  const recipeQueue = [];

  const toggleRecipeGroup = () => {
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

  const onRecipeLoad = (recipe) => {
    recipeQueue.push(recipe);
  };

  return (
    <div className={styles.recipeGroup}>
      {header && (
        <h3 onClick={toggleRecipeGroup}>
          <TriangleSvg rotated={isExpanded} />
          {header}
        </h3>
      )}
      <div className={header && styles.recipes} ref={recipeGroupRef}>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            data={recipe}
            onLoad={
              !recipe.name.includes("Alternate") && expandOnLoad && onRecipeLoad
            }
          />
        ))}
      </div>
    </div>
  );
}
