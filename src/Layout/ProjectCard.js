import Task from "../Component/Task";
import NewTask from "../Component/NewTask";
import styles from "./ProjectCard.module.scss";
import deleteIcon from "../Icons/delete.svg";

function ProjectCard(props) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardTitleWrapper}>
        <h3 className={styles.projectCardTitle}>{props.text}</h3>
        <img src={deleteIcon} alt="dadas" className={styles.deleteIcon} />
      </div>
      <NewTask />
      <Task text="" />
      <Task text="" />
      <Task text="" />
      <Task text="" />
    </div>
  );
}

export default ProjectCard;
