import { v4 as uuid } from "uuid";
export const reconstructItem = (item) => {
  const recipeGroups = [];
  if (item.recipes) {
    recipeGroups.push({
      header: "Recipes:",
      recipesArray: item.recipes.map((recipe) => ({ ...recipe, id: uuid() })),
    });
  }
  if (item.usedIn) {
    recipeGroups.push({
      header: "Used in:",
      recipesArray: item.usedIn.map((recipe) => ({ ...recipe, id: uuid() })),
    });
  }

  return {
    header: item.itemName,
    recipeGroups,
  };
};

export const updateMaxHeight = (element) => {
  const elementScrollHeight = element.scrollHeight;
  element.style.maxHeight = elementScrollHeight + "px";
};
