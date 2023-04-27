import { Recipes } from "@/components";
import styles from "./Display.module.scss";

export default function Display({ item }) {
  if (!item) {
    return <div className={styles.display}></div>;
  }

  return (
    <div className={styles.display}>
      <h2>{item.itemName}</h2>
      {item.recipes ? <Recipes recipes={item.recipes}>Recipes:</Recipes> : ""}
      {item.usedIn ? <Recipes recipes={item.usedIn}>Used in:</Recipes> : ""}
    </div>
  );
}
