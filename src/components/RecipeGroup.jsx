import { useState, useRef } from "react";
import { TriangleSvg, Recipe } from "@/components";
import styles from "./RecipeGroup.module.scss";
import { toggleMaxHeight } from "@/utils";

export default function RecipeGroup({
  recipeGroup: { header, recipesArray: recipes },
  isToExpand,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  let [childrenScrollHeight, setChildrenScrollHeight] = useState(0);
  const recipeGroupRef = useRef();

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

  const expandRecipeGroup = (childScrollHeight) => {
    childrenScrollHeight += childScrollHeight;
    setChildrenScrollHeight(childrenScrollHeight);
    if (!isExpanded) {
      toggleMaxHeight(recipeGroupRef.current, isExpanded);
      setIsExpanded(true);
      adjustMaxHeight(childrenScrollHeight);
    }
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
            adjustParentMaxHeight={adjustMaxHeight}
            isToExpand={isToExpand && !recipe.name.includes("Alternate")}
            expandParent={expandRecipeGroup}
          />
        ))}
      </div>
    </div>
  );
}
