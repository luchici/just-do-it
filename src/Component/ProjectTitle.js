import styles from "./ProjectTitle.module.scss";
import { deleteI } from "../UI/icons";

function ProjectTitle(props) {
  return (
    <div className={styles.projectTitleWrapper}>
      <h3 className={styles.projectTitle}>{props.text}</h3>
      <img src={deleteI.imageSRC} alt={deleteI.alt} className={styles.icon} />
    </div>
  );
}

export default ProjectTitle;
