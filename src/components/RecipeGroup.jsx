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
  const [recipeComponents, setRecipeComponents] = useState([]);

  const addRecipeRef = (ref) => {
    recipeComponents.push(ref);
    setRecipeComponents(recipeComponents);
  };

  let childrenScrollHeight = 0;

  useEffect(() => {
    if (!expandOnLoad) {
      return;
    }

    for (let i = 0; i < recipes.length; i++) {
      if (!recipes[i].name.includes("Alternate")) {
        const recipe = recipeComponents[i];
        toggleMaxHeight(recipe.ref.current, false);
        recipe.setIsExpanded(true);
        childrenScrollHeight += recipe.ref.current.scrollHeight;
      }
    }
    setIsExpanded(true);
    adjustMaxHeight(childrenScrollHeight);
  }, recipeComponents);

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
            addRef={addRecipeRef}
          />
        ))}
      </div>
    </div>
  );
}
