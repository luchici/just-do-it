import Task from "../Component/Task";
import NewTask from "../Component/NewTask";
import styles from "./ProjectCard.module.scss";
import { minusI, deleteI } from "../UI/icons";
import { useState } from "react";

// TODO: #6 I need to add scroll to tasksWrapper(hidden until necessary and stilled) -JS tasks
// TODO: #15 Add Drag and Drop function for tasks, from one project to another.

function ProjectCard(props) {
  const [taskList, setTaskList] = useState(props.taskList);

  const saveNewTaskHandler = (newTaskObj) => {
    const newTask = {
      ...newTaskObj,
      id: Math.random().toString(),
      projectId: props.projectId,
    };
    setTaskList([newTask, ...taskList]);
  };

  const deleteTaskHandler = (id) => {
    const newTaskList = taskList.filter((taskObj) => {
      return taskObj.id != id;
    });

    setTaskList(newTaskList);
  };

  const taskEl = taskList.map((task) => (
    <Task
      text={task.title}
      id={task.id}
      onDeleteTask={deleteTaskHandler}
    ></Task>
  ));

  const handlerDeleteProject = function () {
    props.onDeleteProject(props.id);
  };

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
          onClick={handlerDeleteProject}
        />
      </div>
      <NewTask onSaveTask={saveNewTaskHandler} />
      <div className={styles.tasksWrapper}>{taskEl}</div>
    </div>
  );
}

export default ProjectCard;
