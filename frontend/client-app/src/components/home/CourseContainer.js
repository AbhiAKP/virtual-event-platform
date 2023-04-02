import CourseCard from "./CourseCard";
import styles from "./CourseContainer.module.css";

const CourseContainer = () => {
  return (
    <div className={styles.popularCourses}>
      <div className={styles.popularCourseHeadingContainer}>
        <span>
          <span>Most</span>
          <span className={styles.span}>{` `}</span>
        </span>
        <span className={styles.popularCourse}>Popular Course</span>
      </div>
      <div className={styles.courseSection}>
        <CourseCard
          courseImage="/saly1@1x.jpg"
          courseImageId="/arrowupright.svg"
          courseName="UI/UX by Meta"
          courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
          coursePrice="FREE"
        />
        <CourseCard
          courseImage="/saly11@1x.jpg"
          courseImageId="/arrowupright1.svg"
          courseName="UI/UX by Meta"
          courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
          coursePrice="FREE"
        />
        <CourseCard
          courseImage="/saly12@1x.jpg"
          courseImageId="/arrowupright2.svg"
          courseName="UI/UX by Meta"
          courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
          coursePrice="FREE"
        />
        <CourseCard
          courseImage="/saly13@1x.jpg"
          courseImageId="/arrowupright3.svg"
          courseName="UI/UX by Meta"
          courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
          coursePrice="FREE"
        />
      </div>
    </div>
  );
};

export default CourseContainer;
