import StatsData from "./StatsData";
import styles from "./StatsContainer.module.css";

const StatsContainer = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.statSection}>
        <StatsData
          statLogo="/statsicon1.svg"
          statValue="300"
          statType="Instructor"
          propWidth="212px"
          propBackground="linear-gradient(180deg, #2af9b1, #20b486)"
        />
        <StatsData
          statLogo="/statsicon2.svg"
          statValue="20,000+"
          statType="Student"
          propWidth="253px"
          propBackground="linear-gradient(180deg, #a988f9, #6d3ae9)"
        />
        <StatsData
          statLogo="/statsicon3.svg"
          statValue="10,000+"
          statType="Video"
          propWidth="245px"
          propBackground="linear-gradient(180deg, #ffa4af, #ee455a)"
        />
        <StatsData
          statLogo="/statsicon4.svg"
          statValue="1,00,000+"
          statType="User’s"
          propWidth="275px"
          propBackground="linear-gradient(180deg, #92daf0, #21c9ff)"
        />
      </div>
    </div>
  );
};

export default StatsContainer;
