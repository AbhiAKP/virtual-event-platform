import styles from "./CourseCard.module.css";
import { Link } from "react-router-dom"

const CourseCard = ({
  course_id,
  courseImg,
  courseName,
  courseDescription,
  instructorName,
  rating,
  coursePrice,

}) => {
  return (
    <div className={styles.course}>
      <img className={styles.courseImgIcon} alt="" src={courseImg} />
      <div className={styles.courseData}>
        <Link className={styles.courseLink} to={`/viewcourse/${course_id}`}>
          <a className={styles.courseName} href="#">{courseName}</a>
        </Link>
        <div className={styles.courseDescription}>{courseDescription}</div>
        <div className={styles.instructorName}>{instructorName}</div>
        <div className={styles.rating}>
          <div className={styles.rating45}>
            <span className={styles.rating1}>{`Rating: `}</span>
            <b>{rating}</b>
          </div>
        </div>
      </div>
      <div className={styles.cost}>
        <div className={styles.free}>{coursePrice}</div>
      </div>
    </div>
  );
};

export default CourseCard;
