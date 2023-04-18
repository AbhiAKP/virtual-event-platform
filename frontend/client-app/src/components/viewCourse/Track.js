import styles from "./Track.module.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Track = ({ trackTitle, trackDesc, trackDate, trackLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`${styles.track} ${styles.accordion}`}
        onClick={toggleAccordion}
      >
        <div className={styles.tracktitle}>{trackTitle}</div>
        <img className={styles.dropdownicon} alt="" src="/dropdownicon.svg" />
      </button>
      {isOpen && (
        <div className={styles.panel}>
          <p className={styles.trackdesc}>{trackDesc}</p>
          <div className={styles.trackdata}>
            <div className={styles.date}>{trackDate}</div>
            <button className={styles.link}>
              <Link to={trackLink}>Watch Live</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Track;
