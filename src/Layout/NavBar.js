import styles from "./NavBar.module.scss";
import ProjectTitle from "../Component/ProjectTitle";

function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <div className={styles.username}>
        <button className={styles.singIn}>Log In</button>
        <button className={styles.singIn}>Sing In</button>
      </div>
      <ProjectTitle text="here we are" />
      <ProjectTitle text="not againe" />
      <ProjectTitle text="Why not" />
    </div>
  );
}

export default NavBar;
