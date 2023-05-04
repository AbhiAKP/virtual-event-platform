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

  const handleLogout = () => {
    // Delete access token from memory
    // setAccessToken(null);

    // Call backend API to delete refresh token cookie
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200 || response.status === 403) {
          // Successfully logged out or already logged out, clear access token and redirect to login page
          console.log("response is: ", response);
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
        } else {
          // Failed to log out, display error message
          window.alert("Failed to log out - response not ok");
        }
      })
      .catch((error) => {
        window.alert("Failed to log out", error);
      });
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
          <Link to="/" onClick={handleLogout}>
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
