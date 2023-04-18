import { useMemo } from "react";
import CourseIntroVideo from "./CourseIntroVideo";
import styles from "./CoursePreview.module.css";

const CoursePreview = ({
  category,
  subCategory,
  courseTitle,
  courseDescription,
  instructorName,
  courseRating,
  studentsCount,
  enrollValue = "Enroll",
  buttonBgColor,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: buttonBgColor,
    };
  }, [buttonBgColor]);

  return (
    <div className={styles.coursepreview}>
      <div className={styles.coursepreview1}>
        <img
          className={styles.coursepreviewChild}
          alt=""
          src="/rectangle-1.svg"
        />
        <CourseIntroVideo
          courseIntroVideoWidth="fixed"
          courseIntroVideoHeight="fixed"
        />
        <div className={styles.coursedata}>
          <div className={styles.categoryinfo}>
            <div className={styles.category}>{category}</div>
            <div className={styles.subCategory}>{subCategory}</div>
          </div>
          <div className={styles.coursetitle}>{courseTitle}</div>
          <div className={styles.coursedescription}>{courseDescription}</div>
          <div className={styles.coursedescription1}>
            <span className={styles.coursedescriptionTxt}>
              <span>{`Created By: `}</span>
              <span className={styles.jonesAbile}>{instructorName}</span>
            </span>
          </div>
          <div className={styles.ratningenrollgroup}>
            <div className={styles.rating}>
              <div className={styles.rating1}>
                <b className={styles.rating45}>{courseRating}</b>
              </div>
              <div className={styles.studentscount}>({studentsCount})</div>
            </div>
            <button className={styles.button} style={buttonStyle}>
              <div className={styles.enroll}>{enrollValue}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
