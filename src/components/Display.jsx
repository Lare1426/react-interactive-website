import { Recipes } from "@/components";
import styles from "./Display.module.scss";

export default function Display({ data }) {
  return (
    <div className={styles.display}>
      {data ? (
        <>
          <h2>{data.itemName}</h2>
          {data.recipes ? (
            <Recipes recipes={data.recipes}>Recipes:</Recipes>
          ) : (
            ""
          )}
          {data.usedIn ? <Recipes recipes={data.usedIn}>Used in:</Recipes> : ""}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
