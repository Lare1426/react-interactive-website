import { satisfactoryPng, searchIconPng } from "@/assets/";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebarLeft}>
      <img className={styles.banner} src={satisfactoryPng} />
      <div className={styles.search}>
        <h2>Search</h2>
        <label>Enter the exact product you want below:</label>
        <input type="text" placeholder="Product" />
        <button>
          <img src={searchIconPng} />
        </button>
        <p className={styles.error}></p>
      </div>
      <button className={styles.bulkRecipeButton}>
        Recipes from hard drives
      </button>
    </div>
  );
}

export default Sidebar;
