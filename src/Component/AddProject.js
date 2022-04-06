import styles from "./AddProject.module.scss";
import plusIcon from "../Icons/plus.svg";
import { useState } from "react";

// TODO: #16 Add enter to textarea field to create a new project.
// TODO: #17 Fix required attribute for textarea.

function AddProject(props) {
  const [projectTitle, setProjectTitle] = useState("");

  const textareaValueHandler = function (event) {
    setProjectTitle(event.target.value);
  };

  const handlerAddProject = function (event) {
    event.preventDefault();

    const project = {
      title: projectTitle,
      taskList: [],
      id: Math.random(),
    };

    props.onAddProject(project);

    setProjectTitle("");
  };

  return (
    <form className={styles.addProjectWrapper}>
      <textarea
        className={styles.inputTitle}
        placeholder="Add a new project!"
        onChange={textareaValueHandler}
        value={projectTitle}
        required
      />
      <img src={plusIcon} className={styles.icon} onClick={handlerAddProject} />
    </form>
  );
}

export default AddProject;
