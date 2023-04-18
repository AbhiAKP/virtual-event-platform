import CourseCard from "./CourseCard";
import styles from "./ResultsContainer.module.css";
import { useState, useEffect } from "react";

const ResultsContainer = ({ keywords = '' }) => {
  const accessToken = localStorage.getItem("accessToken");
  const [courses, setCourses] = useState([]);

  
  useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/search-courses/search?keywords=${keywords}`, { headers: {
      'Authorization': `Bearer ${accessToken}`
    }});
    const data = await response.json();
    setCourses(data);
  };
  
    fetchData();
  }, [keywords]);
  
  return (
    <div className={styles.resultsTab}>
      <div className={styles.resultCount}>
        <div className={styles.resultcount}>{courses.length} results</div>
      </div>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course_id={course.id}
          courseImg={"/saly2@1x.jpg" ?? course.course_img}
          courseName={course.course_name}
          courseDescription={course.course_desc}
          instructorName={course.instructor_name ?? "Jones Abile"}
          rating={course.rating ?? "4.5"}
          coursePrice="FREE"
        />
      ))}
    </div>
  );
};

export default ResultsContainer;