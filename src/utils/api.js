const basePath = "https://satisfactory.laurivirta.com/recipes";

const getItem = async (itemName) => {
  const response = await fetch(`${basePath}/item/${itemName}`);
  return response.json();
};

const getItemSearch = async (itemName) => {
  const response = await fetch(`${basePath}/item/search?input=${itemName}`);

  if (response.status == 400) {
    const { message } = await response.json();
    throw new Error(message);
  }

  return response.json();
};

const getItems = async () => {
  const response = await fetch(`${basePath}/items.json`);
  return response.json();
};

export { getItem, getItemSearch, getItems };
