import styles from "./Task.module.scss";

import deleteIcon from "../Icons/delete.svg";
import { useState } from "react";

// TODO: #7 make the task component reactive - checkbox - strikethrough task title
// TODO: #8 when task done move the task at the end of the list

function Task(props) {
  const [isChecked, setIsChecked] = useState(false);

  const checkedHandler = function () {
    console.log("ffffff");
    isChecked ? setIsChecked(false) : setIsChecked(true);
    console.log("sssada");
  };

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={checkedHandler}
      />
      <h3 className={isChecked ? styles.textStrike : styles.text}>
        aaaaa {props.text}
      </h3>
      <img src={deleteIcon} alt="dfsdfsdf" className={styles.img} />
    </div>
  );
}

export default Task;
