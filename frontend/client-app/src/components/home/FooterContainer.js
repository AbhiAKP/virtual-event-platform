import styles from "./FooterContainer.module.css";

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
        <button className={styles.home}>Home</button>
        <button className={styles.about}>About</button>
        <button className={styles.course}>Course</button>
        <button className={styles.blog}>Blog</button>
        <button className={styles.contact}>Contact</button>
      </div>
      <div className={styles.categorySection}>
        <div className={styles.category}>Category</div>
        <button className={styles.design}>Design</button>
        <button className={styles.development}>Development</button>
        <button className={styles.marketing}>Marketing</button>
        <button className={styles.business}>Business</button>
        <button className={styles.lifestyle}>Lifestyle</button>
      </div>
      <div className={styles.subscribeSection}>
        <div className={styles.subscribe}>Subscribe</div>
        <div className={styles.subscribeText}>
          Stay updated with the latest news and events at streamLearnr
        </div>
        <input
          className={styles.inputField}
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
