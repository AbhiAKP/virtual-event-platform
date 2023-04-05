import { useMemo } from "react";
import styles from "./CourseIntroVideo.module.css";

const CourseIntroVideo = ({
  courseIntroVideoWidth,
  courseIntroVideoHeight,
}) => {
  const courseIntroVideoStyle = useMemo(() => {
    return {
      width: courseIntroVideoWidth,
      height: courseIntroVideoHeight,
    };
  }, [courseIntroVideoWidth, courseIntroVideoHeight]);

  return (
    <video
      className={styles.courseintrovideo}
      controls
      onLoadStart={(e) => (e.target.volume = 1)}
      style={courseIntroVideoStyle}
    >
      <source src="/pexels-ketut-subiyanto-4630091-1280x720-25fps.mp4" />
    </video>
  );
};

export default CourseIntroVideo;
