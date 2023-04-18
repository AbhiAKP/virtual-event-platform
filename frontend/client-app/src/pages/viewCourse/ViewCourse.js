import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderContainer from "../../components/global/HeaderContainer";
import CoursePreview from "../../components/viewCourse/CoursePreview";
import CourseOverviewContainer from "../../components/viewCourse/CourseOverviewContainer";
import CourseContainer from "../../components/viewCourse/CourseContainer";
import FooterContainer from "../../components/global/FooterContainer";
import styles from "./ViewCourse.module.css";



const ViewCourse = () => {
  const accessToken = localStorage.getItem("accessToken");
  const { course_id } = useParams();

  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const courseResponse = await fetch(`http://localhost:3000/view-course/course/${course_id}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const courseJson = await courseResponse.json();
        setCourseData(courseJson);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };
    fetchCourseData();
  }, [course_id, accessToken]);

  if (!courseData) {
    return <div>Loading...</div>;
  }



  return (
<div className={styles.viewcourse}>
<HeaderContainer />
<CoursePreview
  category={courseData.category}
  subCategory={courseData.subcategory}
  courseTitle={courseData.course_name}
  courseDescription={courseData.course_desc}
  instructorName={"Jones Abile" ?? courseData.instructor_name}
  courseRating={`Rating: ${"5.0" ?? courseData.rating}`}
  studentsCount={"523 students"}
  enrollValue={"Enroll"}
  buttonBgColor="#14EB50"
/>
<CourseOverviewContainer courseObjective={courseData.course_objective} courseDuration={courseData.course_duration}/>
<CourseContainer course_id={course_id}/>
<FooterContainer />
</div>
  );
};

export default ViewCourse;
