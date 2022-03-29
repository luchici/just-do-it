import styles from "./App.module.scss";

import Calendar from "./Component/Calendar";

import ProjectCard from "./Layout/ProjectCard";
import NavBar from "./Layout/NavBar";

function App() {
  return (
    <div className={styles.grid}>
      <NavBar />
      <ProjectCard text="Here we are" />
      <ProjectCard text="Another one" />
      <ProjectCard text="Still here" />
      <ProjectCard text="Oooo yee!" />
      <Calendar />
    </div>
  );
}

export default App;
