import Task from "../Component/Task";
import NewTask from "../Component/NewTask";
import styles from "./ProjectCard.module.scss";
import { minusI, deleteI } from "../UI/icons";
import { useState } from "react";

// TODO: #6 I need to add scroll to tasksWrapper(hidden until necessary and stilled) -JS tasks
// TODO: #13 Make the list dynamic - add and remove tasks
// TODO:

const taskListInin = [];

function ProjectCard(props) {
  const [taskList, setTaskList] = useState(taskListInin);

  const saveNewTaskHandler = (newTaskObj) => {
    const newTask = {
      ...newTaskObj,
      id: Math.random().toString(),
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
      <NewTask onSaveTask={saveNewTaskHandler} />
      <div className={styles.tasksWrapper}>{taskEl}</div>
    </div>
  );
}

export default ProjectCard;
