import styles from "./HeroContainer.module.css";

const HeroContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero1}>
        <div className={styles.tagline}>START TO SUCCEED</div>
        <div className={styles.heroHeadline}>
          <div className={styles.headline}>
            <p className={styles.from300Instructors}>Access To 5000+ Courses</p>
            <p
              className={styles.from300Instructors}
            >{`from 300 Instructors `}</p>
            <p className={styles.institutions}>{`& Institutions`}</p>
          </div>
        </div>
        <div className={styles.searchbox}>
          <input
            className={`${styles.inputPlaceholder} ${styles.noOutline}`}
            type="text"
            placeholder="What do want to learn?"
            maxLength={100}
            minLength={3}
          />
          <button className={styles.searchCourses}>
            <img className={styles.searchIcon} alt="" src="/search-icon.svg" />
          </button>
        </div>
        <div className={styles.hero2}>
          <img className={styles.heroImgIcon} alt="" src="/heroimg@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
