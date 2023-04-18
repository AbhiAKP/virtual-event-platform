import { useState, useEffect } from "react";
import Track from "./Track";
import styles from "./CourseContainer.module.css";

const CourseContainer = ({ course_id }) => {
  const accessToken = localStorage.getItem("accessToken");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/view-course/course/${course_id}/tracks`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    })
      .then((response) => response.json())
      .then((data) => setTracks(data))
      .catch((error) => console.error(error));
  }, [course_id]);

  return (
    <div className={styles.coursetrack}>
      <div className={styles.sectionheading}>Course Content / Track</div>
      <div className={styles.coursetrack1}>
        {tracks.map((track) => (
          <Track
            key={track.id}
            trackTitle={track.track_title}
            trackDesc={track.track_desc}
            trackDate={track.track_date}
            trackLink={`/join-meet/${track.track_link_id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseContainer;
