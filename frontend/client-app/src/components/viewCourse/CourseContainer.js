import Track from "./Track";
import styles from "./CourseContainer.module.css";

const CourseContainer = () => {
  return (
    <div className={styles.coursetrack}>
      <div className={styles.sectionheading}>Course Content / Track</div>
      <div className={styles.coursetrack1}>
        <Track trackTitle="Python Basics for Data Science Day-1" />
        <Track trackTitle="Python Basics for Data Science Day-2A" />
        <Track trackTitle="Python Basics for Data Science Day-2B" />
        <Track trackTitle="Python Basics for Data Science Day-3" />
        <Track trackTitle="Python Basics for Data Science Day-4" />
        <Track trackTitle="Python Basics for Data Science Day-5" />
        <Track trackTitle="Python Basics for Data Science Day-6" />
        <Track trackTitle="Python Basics for Data Science Day-7" />
        <Track trackTitle="Python Basics for Data Science Day-8" />
        <Track trackTitle="Python Basics for Data Science Day-9" />
        <Track trackTitle="Python Basics for Data Science Day-10" />
        <Track trackTitle="Python Basics for Data Science Day-11" />
        <Track trackTitle="Python Basics for Data Science Day-12" />
        <Track trackTitle="Python Basics for Data Science Day-13" />
      </div>
    </div>
  );
};

export default CourseContainer;
