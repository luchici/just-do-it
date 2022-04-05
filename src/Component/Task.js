import styles from "./Task.module.scss";

import deleteIcon from "../Icons/delete.svg";
import { useState } from "react";

// TODO: #8 when task done move the task at the end of the list
// TODO: #11 When click on a task, popup model with task editable data

function Task(props) {
  const [isChecked, setIsChecked] = useState(false);

  const checkedHandler = function () {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  const handlerDeleteTask = function () {
    props.onDeleteTask(props.id);
  };

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={checkedHandler}
      />
      <h3 className={isChecked ? styles.textStrike : styles.text}>
        {props.text}
      </h3>
      <img
        src={deleteIcon}
        alt="delete image"
        className={styles.img}
        onClick={handlerDeleteTask}
      />
    </div>
  );
}

export default Task;
