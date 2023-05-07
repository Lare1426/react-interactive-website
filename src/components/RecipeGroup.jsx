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

  const expandRecipes = () => {
    toggleMaxHeight(recipeGroupRef.current, isExpanded);
    setIsExpanded(!isExpanded);
  };

  const adjustMaxHeight = (childScrollHeight) => {
    const maxHeight = parseInt(recipeGroupRef.current.style.maxHeight);
    const isChildCollapsing = maxHeight > recipeGroupRef.current.scrollHeight;
    const height = isChildCollapsing
      ? maxHeight
      : recipeGroupRef.current.scrollHeight;

    // Scroll height of current element only includes visible part of child.
    // Use expanded height of child to calculate the actual height.
    // This needs to be calculated for the complete animation.
    const updatedMaxHeight = childScrollHeight + height;
    recipeGroupRef.current.style.maxHeight = updatedMaxHeight + "px";
  };

  const onRecipeLoad = ({ ref, setIsExpanded }) => {
    expandRecipes();
    toggleMaxHeight(ref, false);
    setIsExpanded(true);
    adjustMaxHeight(ref.scrollHeight);
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
            onLoad={
              !recipe.name.includes("Alternate") && expandOnLoad && onRecipeLoad
            }
          />
        ))}
      </div>
    </div>
  );
}
