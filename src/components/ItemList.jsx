import { useState, useEffect } from "react";
import styles from "./ItemList.module.scss";
import { getItems, getItem } from "@/utils/api";
import { reconstructItem } from "@/utils";

export default function ItemList({ setDisplayData }) {
  const [itemNames, setItemNames] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getItems();
      setItemNames(result);
    })();
  }, []);

  const onItemListClick = async (itemName) => {
    const item = await getItem(itemName);
    setDisplayData(reconstructItem(item));
  };

  return (
    <div className={styles.itemList}>
      <ul>
        {itemNames.map((item, index) => (
          <li key={index} onClick={() => onItemListClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
