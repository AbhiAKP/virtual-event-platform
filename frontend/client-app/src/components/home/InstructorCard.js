import { useMemo } from "react";
import styles from "./InstructorCard.module.css";

const InstructorCard = ({
  expertPhoto,
  expertRole = "XYZ Expert",
  propLeft,
  propBoxShadow,
}) => {
  const instructorStyle = useMemo(() => {
    return {
      left: propLeft,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propBoxShadow]);

  return (
    <button className={styles.instructor} style={instructorStyle}>
      <div className={styles.instructorImgParent}>
        <img className={styles.instructorImgIcon} alt="" src={expertPhoto} />
        <div className={styles.instructorNameParent}>
          <div className={styles.instructorName}>Jacob Jones</div>
          <div className={styles.instructorTitle}>{expertRole}</div>
        </div>
      </div>
    </button>
  );
};

export default InstructorCard;
