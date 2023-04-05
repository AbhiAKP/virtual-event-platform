import styles from "./Track.module.css";

const Track = ({ trackTitle }) => {
  return (
    <button className={styles.track}>
      <div className={styles.tracktitle}>{trackTitle}</div>
      <img className={styles.dropdownicon} alt="" src="/dropdownicon.svg" />
    </button>
  );
};

export default Track;
