"use client";

import styles from "./Masonry.module.css";
import Card from "./card";

export default function Masonry({ cards, columnCount }) {
  function generateColumns(items, columnCount) {
    const columns = [...Array(columnCount)].map(() => []);

    cards.forEach((image, i) => {
      const columnToAddImageTo = i % columnCount;
      columns[columnToAddImageTo].push(image);
    });

    return columns;
  }

  function renderItems(items) {
    return items.map((item) => {
      return <Card {...item} key={item.id} />;
    });
  }

  function renderColumns(columns) {
    return columns.map((items) => {
      return <div className={styles.column}>{renderItems(items)}</div>;
    });
  }

  const columns = generateColumns(cards, columnCount);

  return <div className={styles.container}>{renderColumns(columns)}</div>;
}
