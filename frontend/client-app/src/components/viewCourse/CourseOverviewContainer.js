import Objectives from "./Objectives";
import CourseStat from "./CourseStat";
import styles from "./CourseOverviewContainer.module.css";

const CourseOverviewContainer = ({ courseObjective, courseDuration}) => {
  const objectives = Object.values(JSON.parse(courseObjective));
  // window.alert(typeof objectives);

  return (
    <div className={styles.courseoverview}>
      <div className={styles.courseoverview1}>
        <div className={styles.courseobjective}>
          <div className={styles.heading}>What you will learn?</div>
          <div className={styles.courseobjectives}>
            {objectives.map((objective, key) => (
              <Objectives key={key} objectiveText={objective} />
              
            ))}
          </div>
        </div>
        <div className={styles.coursestats}>
          <CourseStat statIcon="/staticon.svg" statText="Live Classes" />
          <CourseStat statIcon="/staticon1.svg" statText="Recorded Sessions" />
          <CourseStat statIcon="/staticon2.svg" statText={`${courseDuration} Months`} />
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
