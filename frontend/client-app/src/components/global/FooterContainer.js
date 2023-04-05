import styles from "./FooterContainer.module.css";
import { Link } from "react-router-dom";

const FooterContainer = () => {
  return (
    <div className={styles.footer}>
      <i className={styles.textLogo}>
        <span>stream</span>
        <span className={styles.learnr}>Learnr</span>
      </i>
      <div className={styles.contactSection}>
        <div className={styles.contactUs}>Contact Us</div>
        <div className={styles.mobile}>Call : +123 400 123</div>
        <div className={styles.address}>
          <span className={styles.addressTxt}>
            <p className={styles.albertColonyAlpine}>
              Albert Colony, Alpine Lane, Sector - 5
            </p>
            <p className={styles.albertColonyAlpine}>
              Some State, Some Country
            </p>
          </span>
        </div>
        <div className={styles.email}>Email:streamlearnr@mail.com</div>
      </div>
      <div className={styles.exploreSection}>
        <div className={styles.explore}>Explore</div>
        <Link to="/home">
          <button className={styles.exploreItem}>Home</button>
        </Link>
        <Link to="/">
          <button className={styles.exploreItem}>About</button>
        </Link>
        <Link to="/explore">
          <button className={styles.exploreItem}>Course</button>
        </Link>
        <Link to="/">
          <button className={styles.exploreItem}>Blog</button>
        </Link>
        <Link to="/">
          <button className={styles.exploreItem}>Contact</button>
        </Link>
      </div>
      <div className={styles.categorySection}>
        <div className={styles.category}>Category</div>
        <Link to="/">
          <button className={styles.categoryItem}>Design</button>
        </Link>
        <Link to="/">
          <button className={styles.categoryItem}>Development</button>
        </Link>
        <Link to="/">
          <button className={styles.categoryItem}>Marketing</button>
        </Link>
        <Link to="/">
          <button className={styles.categoryItem}>Business</button>
        </Link>
        <Link to="/">
          <button className={styles.categoryItem}>Lifestyle</button>
        </Link>
      </div>
      <div className={styles.subscribeSection}>
        <div className={styles.subscribe}>Subscribe</div>
        <div className={styles.subscribeText}>
          Stay updated with the latest news and events at streamLearnr
        </div>
        <input
          className={`${styles.inputField} ${styles.noOutline}`}
          type="text"
          placeholder="Email here"
        />
        <button className={styles.subscribeButton}>
          <div className={styles.buttonText}>Subscribe Now</div>
        </button>
      </div>
    </div>
  );
};

export default FooterContainer;
