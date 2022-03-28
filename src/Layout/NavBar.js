import styles from "./NavBar.module.scss";

function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <h3 className={styles.username}>Log In{props.username}</h3>
      <div>
        <h1 className={styles.projectTitle}>New Project 1</h1>
        <h1 className={styles.projectTitle}>New Project 2</h1>
        <h1 className={styles.projectTitle}>New Project 3</h1>
        <h1 className={styles.projectTitle}>New Project 4</h1>
      </div>
    </div>
  );
}

export default NavBar;
