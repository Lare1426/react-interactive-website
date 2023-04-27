const basePath = "https://satisfactory.laurivirta.com/recipes";

const getItem = async (itemName) => {
  const response = await fetch(`${basePath}/item/${itemName}`);
  return response;
};

const getItemSearch = async (itemName) => {
  const response = await fetch(`${basePath}/item/search?input=${itemName}`);
  return response;
};

const getItems = async () => {
  const response = await fetch(`${basePath}/items.json`);
  return response.json();
};

const getHardDriveRecipes = async () => {
  const response = await fetch(`${basePath}/hard-drive-recipes.json`);
  return response;
};

export { getItem, getItemSearch, getItems, getHardDriveRecipes };
