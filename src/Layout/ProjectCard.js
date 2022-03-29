import Task from "../Component/Task";
import NewTask from "../Component/NewTask";
import styles from "./ProjectCard.module.scss";
import { minusI, deleteI } from "../UI/icons";

// TODO: #6 I need to add scroll to tasksWrapper(hidden until necessary and stilled) -JS tasks

function ProjectCard(props) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardTitleWrapper}>
        <h3 className={styles.projectCardTitle}>{props.text}</h3>
        <img
          src={minusI.imageSRC}
          alt={minusI.alt}
          className={`${styles.icon} ${styles.minusI}`}
        />
        <img
          src={deleteI.imageSRC}
          alt={deleteI.alt}
          className={`${styles.icon} ${styles.deleteI}`}
        />
      </div>
      <NewTask />
      <div className={styles.tasksWrapper}>
        <Task text="fddfdsf fdsfsd fsdfsd sdfsdfsdf fsdfsdfdsd fsdf " />
        <Task text="" />
        <Task text="" />
        <Task text="" />
        <Task text="" />
        <Task text="" />
      </div>
    </div>
  );
}

export default ProjectCard;
