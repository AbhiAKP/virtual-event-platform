import styles from "./CourseHeaderNav.module.css";
import { Link } from "react-router-dom";

const CourseHeaderNav = () => {
  return (
    <div className={styles.courseheadsection}>
      <div className={styles.coursepagetitle}>My Courses</div>
      <div className={styles.navsection}>
        <div className={styles.searchBar}>
          <div className={styles.searchgroup}>
            <button className={styles.searchIcon}>
              <img className={styles.vectorIcon} alt="" src="/vector_3.svg" />
            </button>
            <input
              className={`${styles.searchYourCourse} ${styles.noOutline}`}
              type="text"
              placeholder="Search Your Course"
              maxLength={100}
              minLength={3}
            />
          </div>
        </div>
        <div className={styles.navs}>
          <Link to={`/createcourse`}>
            <button className={styles.performance}>
              <img className={styles.vectorIcon1} alt="" src="/vector_4.svg" />
            </button>
          </Link>

          <Link className={styles.courseLink} to={`/createcourse`}>
            <button className={styles.addcourse}>
              <img className={styles.vectorIcon2} alt="" src="/vector_5.svg" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseHeaderNav;
