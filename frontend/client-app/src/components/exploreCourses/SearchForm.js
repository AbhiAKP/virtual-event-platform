import styles from "./SearchForm.module.css";
import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className={styles.searchSection}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.search}>
          <button className={styles.category}>Category</button>
          <div className={styles.searchBar}>
            <div className={styles.searchIconParent}>
              <button className={styles.searchIcon} type="submit">
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector.svg"
                />
              </button>
              <input
                className={`${styles.searchAnything} ${styles.noOutline}`}
                type="text"
                placeholder="Search Anything"
                maxLength={100}
                minLength={3}
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className={styles.category}>My Enrollments</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
