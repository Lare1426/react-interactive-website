import { RecipeGroup } from "@/components";
import styles from "./Display.module.scss";

export default function Display({ data }) {
  if (!data) {
    return <div className={styles.display}></div>;
  }

  return (
    <div className={styles.display}>
      <h2>{data.header}</h2>
      {data.recipeGroups.map((recipeGroup) => (
        <RecipeGroup
          key={recipeGroup.id}
          recipeGroup={recipeGroup}
          expandOnLoad={recipeGroup.header === "Recipes:"}
        />
      ))}
    </div>
  );
}
