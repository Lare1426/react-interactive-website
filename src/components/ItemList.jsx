import styles from "./ItemList.module.scss";

export default function ItemList() {
  return (
    <div className={styles.itemList}>
      <ul>
        <li>AI Limiter</li>
        <li>AWESOME Shop</li>
        <li>Yes</li>
      </ul>
    </div>
  );
}
