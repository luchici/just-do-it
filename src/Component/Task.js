import styles from "./Task.module.scss";

import deleteIcon from "../Icons/delete.svg";

function Task(props) {
  return (
    <div className={styles.task}>
      <input type="checkbox" className={styles.checkbox} />
      <h3 className={styles.text}>aaaaa {props.text}</h3>
      <img src={deleteIcon} alt="dfsdfsdf" className={styles.img} />
    </div>
  );
}

export default Task;
