import { useState } from "react";
import { v4 as uuid } from "uuid";
import { satisfactoryPng, searchIconPng } from "@/assets/";
import styles from "./Sidebar.module.scss";
import { getItemSearch, getHardDriveRecipes } from "@/utils/api";
import { reconstructItem } from "@/utils";

function Sidebar({ setDisplayData }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onInputSearch(inputValue);
    }
  };

  const onInputSearch = async (itemNameSearch) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    const result = await getItemSearch(itemNameSearch);
    if (result.isError) {
      setErrorMessage(result.message);
      return;
    }
    setDisplayData(reconstructItem(result));
  };

  const onBulkRecipeButtonClick = async () => {
    const result = await getHardDriveRecipes();
    setDisplayData({
      header: "Recipes from hard drives:",
      recipeGroups: [
        { recipesArray: result.map((recipe) => ({ ...recipe, id: uuid() })) },
      ],
    });
  };

  return (
    <div className={styles.sidebarLeft}>
      <img className={styles.banner} src={satisfactoryPng} />
      <div className={styles.search}>
        <h2>Search</h2>
        <label>Enter the exact product you want below:</label>
        <div className={styles.searchRow}>
          <input
            type="text"
            placeholder="Product"
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onInputKeyDown}
          />
          <button
            onClick={() => {
              onInputSearch(inputValue);
            }}
          >
            <img src={searchIconPng} />
          </button>
        </div>
        <p className={styles.error}>{errorMessage}</p>
      </div>
      <button
        className={styles.bulkRecipeButton}
        onClick={onBulkRecipeButtonClick}
      >
        Recipes from hard drives
      </button>
    </div>
  );
}

export default Sidebar;
