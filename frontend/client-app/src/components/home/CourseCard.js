import styles from "./CourseCard.module.css";

const CourseCard = ({
  courseImage,
  courseImageId,
  courseName = "XYZ COURSE",
  courseDescription = "XYZ DESCRIPTION",
  coursePrice = "$ 0",
}) => {
  return (
    <div className={styles.course}>
      <img className={styles.courseImgIcon} alt="" src={courseImage} />
      <div className={styles.courseName}>{courseName}</div>
      <div className={styles.courseDescription}>{courseDescription}</div>
      <div className={styles.costParent}>
        <div className={styles.cost}>
          <div className={styles.free}>{coursePrice}</div>
        </div>
        <button className={styles.search}>
          <img className={styles.arrowuprightIcon} alt="" src={courseImageId} />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
