import { useMemo } from "react";
import styles from "./StatsData.module.css";

const StatsData = ({
  statLogo,
  statValue,
  statType,
  propWidth,
  propBackground,
}) => {
  const statsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const statsIconStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div className={styles.stats} style={statsStyle}>
      <div className={styles.statsIcon} style={statsIconStyle}>
        <img className={styles.statsIcon1} alt="" src={statLogo} />
      </div>
      <div className={styles.statValueParent}>
        <div className={styles.statValue}>{statValue}</div>
        <div className={styles.statType}>{statType}</div>
      </div>
    </div>
  );
};

export default StatsData;
