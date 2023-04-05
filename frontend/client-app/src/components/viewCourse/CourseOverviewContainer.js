import Objectives from "./Objectives";
import CourseStat from "./CourseStat";
import styles from "./CourseOverviewContainer.module.css";

const CourseOverviewContainer = () => {
  return (
    <div className={styles.courseoverview}>
      <div className={styles.courseoverview1}>
        <div className={styles.courseobjective}>
          <div className={styles.heading}>What you will learn?</div>
          <div className={styles.courseobjectives}>
            <Objectives objectiveText="Understand Python language basics and how they apply to data science." />
            <Objectives objectiveText="Practice iterative data science using Jupyter notebooks on IBM Cloud." />
            <Objectives objectiveText="Analyze data using Python libraries like pandas and numpy." />
            <Objectives objectiveText="Learn Advanced Statistics and learn  how they apply to data science." />
            <Objectives objectiveText="Learn Advanced Statistics and learn  how they apply to data science." />
            <Objectives objectiveText="Create stunning data visualizations with matplotlib, folium, and seaborn." />
            <Objectives objectiveText="Build machine learning models using scipy and scikitlearn." />
            <Objectives objectiveText="Demonstrate proficiency in solving real life data science problems." />
          </div>
        </div>
        <div className={styles.coursestats}>
          <CourseStat statIcon="/staticon.svg" statText="Live Classes" />
          <CourseStat statIcon="/staticon1.svg" statText="Recorded Sessions" />
          <CourseStat statIcon="/staticon2.svg" statText="4 Months" />
          <CourseStat
            statIcon="/staticon3.svg"
            statText={`Interactive Polls & quizzes`}
          />
          <CourseStat statIcon="/staticon4.svg" statText="Live Doubt Session" />
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewContainer;
