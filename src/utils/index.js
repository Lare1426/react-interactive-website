export const reconstructItem = (item) => {
  const recipeGroups = [];
  if (item.recipes) {
    recipeGroups.push({ header: "Recipes:", recipesArray: item.recipes });
  }
  if (item.usedIn) {
    recipeGroups.push({ header: "Used in:", recipesArray: item.usedIn });
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
