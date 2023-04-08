import styles from "./SuggestionsContainer.module.css";

const SuggestionsContainer = () => {
  return (
    <div className={styles.tipssection}>
      <div className={styles.tipssuggestions}>
        <div className={styles.tip2}>
          <img className={styles.tipimgIcon} alt="" src="/tipimg_1.png" />
          <div className={styles.tiptext}>
            <span className={styles.tiptextTxt}>
              <p className={styles.buildYour}>BUILD YOUR</p>
              <p className={styles.buildYour}>AUDIENCE</p>
            </span>
          </div>
        </div>
        <div className={styles.rightgroup}>
          <div className={styles.tip1}>
            <div className={styles.tiptext1}>
              <span className={styles.tiptextTxt}>
                <p className={styles.buildYour}>CREATE AN</p>
                <p className={styles.buildYour}>ENGAGING</p>
                <p className={styles.buildYour}>COURSE</p>
              </span>
            </div>
            <img className={styles.tipimgIcon} alt="" src="/tipimg_2.png" />
          </div>
          <div className={styles.tip3}>
            <div className={styles.tiptext2}>
              <span className={styles.tiptextTxt}>
                <p className={styles.buildYour}>{`START `}</p>
                <p className={styles.buildYour}>TEACHING</p>
                <p className={styles.buildYour}>LIVE</p>
              </span>
            </div>
            <img className={styles.tipimgIcon} alt="" src="/tipimg_3.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsContainer;
