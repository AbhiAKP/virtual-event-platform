import styles from "./CourseCard.module.css";

const CourseCard = ({
  courseName,
  courseStatus,
  courseImg,
  courseDescription,
}) => {
  return (
    <button className={styles.course}>
      <img className={styles.courseImgIcon} alt="" src={courseImg} />
      <div className={styles.courseData}>
        <div className={styles.courseName}>{courseName}</div>
        <div className={styles.courseDescription}>{courseDescription}</div>
        <div className={styles.cost}>
          <div className={styles.public}>{courseStatus}</div>
        </div>
      </div>
    </button>
    
  );
};

export default CourseCard;
