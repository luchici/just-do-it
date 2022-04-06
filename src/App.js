import styles from "./App.module.scss";

import Calendar from "./Component/Calendar";
import AddProject from "./Component/AddProject";

import ProjectCard from "./Layout/ProjectCard";
import NavBar from "./Layout/NavBar";
import NavBarPlaceholder from "./Component/NavBarPlaceholder";
import { useState } from "react";

const testProjects = [];
// const testProjects = [
//   {
//     title: "OneOne",
//     id: Math.random(),
//     taskList: [
//       {
//         title: "taskOne",
//         id: Math.random(),

//       },
//       {
//         title: "taskTwo",
//         id: Math.random(),
//       },
//     ],
//   },
//   {
//     title: "TwoTwo",
//     id: Math.random(),
//     taskList: [
//       {
//         title: "taskTwo",
//         id: Math.random(),
//       },
//     ],
//   },
//   {
//     title: "ThreeThree",
//     id: Math.random(),
//     taskList: [
//       {
//         title: "taskThree",
//         id: Math.random(),
//       },
//     ],
//   },
// ];

function App() {
  const [projectsList, setProjectsList] = useState(testProjects);

  const deleteProjectHandler = (id) => {
    const newProjectList = projectsList.filter((project) => {
      return project.id != id;
    });
    setProjectsList(newProjectList);
  };

  const addProjectHandler = (project) => {
    setProjectsList([project, ...projectsList]);
    console.log(projectsList);
  };

  const projectEl = projectsList.map((project) => {
    return (
      <ProjectCard
        text={project.title}
        id={project.id}
        taskList={project.taskList}
        projectList={projectsList}
        onDeleteProject={deleteProjectHandler}
      ></ProjectCard>
    );
  });

  return (
    <div className={styles.grid}>
      <NavBarPlaceholder />
      <NavBar
        projectsList={projectsList}
        onDeleteProjects={deleteProjectHandler}
      />
      {projectEl}
      <Calendar />
      <AddProject onAddProject={addProjectHandler} />
    </div>
  );
}

export default App;
