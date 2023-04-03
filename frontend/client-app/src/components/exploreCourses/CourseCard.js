import styles from "./CourseCard.module.css";

const CourseCard = ({
  courseImg,
  courseName = "XYZ COURSE",
  courseDescription,
  instructorName = "XYZ INSTRUCTOR",
  rating,
  coursePrice,
}) => {
  return (
    <div className={styles.course}>
      <img className={styles.courseImgIcon} alt="" src={courseImg} />
      <div className={styles.courseData}>
        <a className={styles.courseName} href="https://www.google.com">{courseName}</a>
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
