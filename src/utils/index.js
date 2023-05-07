import { v4 as uuid } from "uuid";
export const reconstructItem = (item) => {
  const recipeGroups = [];
  if (item.recipes) {
    recipeGroups.push({
      header: "Recipes:",
      recipesArray: item.recipes.map((recipe) => ({ ...recipe, id: uuid() })),
      id: uuid(),
    });
  }
  if (item.usedIn) {
    recipeGroups.push({
      header: "Used in:",
      recipesArray: item.usedIn.map((recipe) => ({ ...recipe, id: uuid() })),
      id: uuid(),
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
