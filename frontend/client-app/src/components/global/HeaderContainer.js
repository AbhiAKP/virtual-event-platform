import styles from "./HeaderContainer.module.css";

const HeaderContainer = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <i className={styles.textlogo}>
          <span>stream</span>
          <span className={styles.learnr}>Learnr</span>
        </i>
        <div className={styles.navLinks}>
          <button className={styles.home}>Home</button>
          <button className={styles.about}>About</button>
          <button className={styles.about}>Course</button>
          <button className={styles.about}>Blog</button>
          <button className={styles.about}>Contact</button>
        </div>
        <button className={styles.userIcon} />
      </div>
    </div>
  );
};

export default HeaderContainer;
