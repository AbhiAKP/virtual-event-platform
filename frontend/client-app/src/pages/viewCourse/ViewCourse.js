import HeaderContainer from "../../components/global/HeaderContainer";
import CoursePreview from "../../components/viewCourse/CoursePreview";
import CourseOverviewContainer from "../../components/viewCourse/CourseOverviewContainer";
import CourseContainer from "../../components/viewCourse/CourseContainer";
import FooterContainer from "../../components/global/FooterContainer";
import styles from "./ViewCourse.module.css";

const ViewCourse = () => {
  return (
    <div className={styles.viewcourse}>
      <HeaderContainer />
      <CoursePreview
        category="Category"
        subCategory="Sub Category"
        courseTitle="The Complete Data Science Bootcamp for Beginners"
        courseDescription="Complete Data Science Training | Python | R | Excel | Statistics| Machine Learning |Deep Learning | Advanced Statistics  | Advanced Mathematics and Algorithms"
        instructorName="Jones Abile"
        courseRating="Rating: 4.5"
        studentsCount="(523 students)"
        enrollValue="Enroll"
        buttonBgColor="#14EB50"
      />
      <CourseOverviewContainer />
      <CourseContainer />
      <FooterContainer />
    </div>
  );
};

export default ViewCourse;
