import styles from "./CourseStat.module.css";

const CourseStat = ({ statIcon, statText }) => {
  return (
    <div className={styles.coursestat}>
      <img className={styles.staticon} alt="" src={statIcon} />
      <div className={styles.stattext}>{statText}</div>
    </div>
  );
};

export default CourseStat;
