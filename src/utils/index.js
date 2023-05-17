import { v4 as uuid } from "uuid";
export const reconstructItem = (item) => {
  const recipeGroups = [];
  if (item.recipes) {
    recipeGroups.push({
      id: uuid(),
      header: "Recipes:",
      recipesArray: item.recipes.map((recipe) => ({ ...recipe, id: uuid() })),
    });
  }
  if (item.usedIn) {
    recipeGroups.push({
      id: uuid(),
      header: "Used in:",
      recipesArray: item.usedIn.map((recipe) => ({ ...recipe, id: uuid() })),
    });
  }

  return {
    header: item.itemName,
    recipeGroups,
  };
};

export const toggleMaxHeight = (element, isExpanded) => {
  if (isExpanded) {
    element.style.maxHeight = "0px";
  } else {
    const elementScrollHeight = element.scrollHeight;
    element.style.maxHeight = elementScrollHeight + "px";
  }
};
