import styles from "./Objectives.module.css";

const Objectives = ({ objectiveText }) => {
  return <div className={styles.objectives}>{objectiveText}</div>;
};

export default Objectives;
