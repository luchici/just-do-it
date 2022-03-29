import styles from "./NewTask.module.scss";

import { minusI, deleteI } from "../UI/icons";
import { useState } from "react";

function Task(props) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="New Task"
        className={styles.input}
        onKeyDown
      ></input>
      <img
        src={deleteI.imageSRC}
        alt={deleteI.alt}
        className={styles.deleteIcon}
      />
    </div>
  );
}

export default Task;
