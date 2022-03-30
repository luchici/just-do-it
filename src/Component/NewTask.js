import styles from "./NewTask.module.scss";

import { minusI, deleteI } from "../UI/icons";
import { useState } from "react";

// TODO: #9 insert date and time. Both fields appear after click on inputbox

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
