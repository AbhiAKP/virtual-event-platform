import ResultsContainer from "./ResultsContainer";
import styles from "./ResultsSection.module.css";

const ResultsSection = ({ keywords }) => {
  return (
    <div className={styles.resultsSection}>
      <ResultsContainer  keywords={keywords} />
    </div>
  );
};

export default ResultsSection;
