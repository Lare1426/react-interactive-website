import { useState } from "react";
import { satisfactoryPng, searchIconPng } from "@/assets/";
import styles from "./Sidebar.module.scss";
import { getHardDriveRecipes } from "@/utils/api";

function Sidebar({ setDisplayData, setItemNameSearch, errorMessage }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setItemNameSearch(inputValue);
    }
  };

  const onBulkRecipeButtonClick = async () => {
    const result = await getHardDriveRecipes();
    setDisplayData({
      header: "Recipes from hard drives:",
      recipeGroups: [{ recipesArray: result }],
    });
  };

  return (
    <div className={styles.sidebarLeft}>
      <img className={styles.banner} src={satisfactoryPng} />
      <div className={styles.search}>
        <h2>Search</h2>
        <label>Enter the exact product you want below:</label>
        <input
          type="text"
          placeholder="Product"
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
        />
        <button
          onClick={() => {
            setItemNameSearch(inputValue);
          }}
        >
          <img src={searchIconPng} />
        </button>
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
