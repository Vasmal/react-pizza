import React from "react";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Ничего не найдено :( </h1>
      <p>Такой страницы не существует!</p>
    </div>
  );
};

export default NotFound;
