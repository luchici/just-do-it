import styles from "./NewTask.module.scss";

import deleteIcon from "../Icons/delete.svg";

function Task(props) {
  return (
    <div className={styles.task}>
      <img src={deleteIcon} alt="fgdgdf"></img>
    </div>
  );
}

export default Task;
