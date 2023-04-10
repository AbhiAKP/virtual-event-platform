import styles from "./HeaderContainer.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeNavState = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
      document.getElementById("mySidenav").style.width = "0";
    } else {
      setIsOpen(!isOpen);
      document.getElementById("mySidenav").style.width = "300px";
    }
  };

  return (
    <>
      <div id="mySidenav" className={styles.sidenav}>
        <button className={styles.closeBtn} onClick={changeNavState}>
          &times;
        </button>
        <ul className={styles.navLiItems}>
          <Link to="/mycourse">
            <li>My Profile</li>
          </Link>
          <Link to="/mycourse">
            <li>Enrolled Courses</li>
          </Link>
          <Link to="/mycourse">
            <li>My Courses</li>
          </Link>
          <Link to="/mycourse">
            <li>Settings</li>
          </Link>
          <Link to="/mycourse">
            <li>Logout</li>
          </Link>
        </ul>
      </div>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <i className={styles.textlogo}>
            <span>stream</span>
            <span className={styles.learnr}>Learnr</span>
          </i>
          <div className={styles.navLinks}>
            <Link to="/home">
              <button className={styles.navItem}>Home</button>
            </Link>
            <Link to="/">
              <button className={styles.navItem}>About</button>
            </Link>
            <Link to="/explore">
              <button className={styles.navItem}>Course</button>
            </Link>
            <Link to="/">
              <button className={styles.navItem}>Blog</button>
            </Link>
            <Link to="/">
              <button className={styles.navItem}>Contact</button>
            </Link>
          </div>
          <button className={styles.userIcon} onClick={changeNavState} />
        </div>
      </div>
    </>
  );
};

export default HeaderContainer;
