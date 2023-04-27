import { useState, useEffect } from "react";
import styles from "./ItemList.module.scss";
import { getItems } from "@/utils/api";

export default function ItemList({ setItemName }) {
  const [itemNames, setItemNames] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getItems();
      setItemNames(result);
    })();
  }, []);

  return (
    <div className={styles.itemList}>
      <ul>
        {itemNames.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setItemName(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
