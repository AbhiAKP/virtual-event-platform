import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div className={styles.searchSection}>
      <div className={styles.search}>
        <button className={styles.category}>Category</button>
        <div className={styles.searchBar}>
          <div className={styles.searchIconParent}>
            <button className={styles.searchIcon}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </button>
            <input
              className={`${styles.searchAnything} ${styles.noOutline}`}
              type="text"
              placeholder="Search Anything"
              maxLength={100}
              minLength={3}
            />
          </div>
        </div>
        <button className={styles.category}>My Enrollments</button>
      </div>
    </div>
  );
};

export default SearchForm;
