import { Recipes } from "@/components";
import styles from "./Display.module.scss";

export default function Display({ data }) {
  return (
    <div className={styles.display}>
      {data ? (
        <>
          <h2>{data.itemName}</h2>
          <Recipes recipes={data.recipes}>Recipes:</Recipes>
          <Recipes recipes={data.usedIn}>Used in:</Recipes>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
