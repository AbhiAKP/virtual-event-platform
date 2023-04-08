import HeaderContainer from "../../components/global/HeaderContainer";
import CourseHeaderNav from "../../components/MyCourses/CourseHeaderNav";
import CourseCard from "../../components/MyCourses/CourseCard";
import SuggestionsContainer from "../../components/MyCourses/SuggestionsContainer";
import styles from "./MyCourses.module.css";
import FooterContainer from "../../components/global/FooterContainer";

const MyCourses = () => {
  return (
    <div className={styles.mycourses}>
      <HeaderContainer />
      <CourseHeaderNav />
      <div className={styles.coursesection}>
        <CourseCard
          courseName="The Ultimate Web Developement Bootcamp"
          courseStatus="PUBLIC"
          courseImg="/saly_1.jpg"
          courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        />
        <CourseCard
          courseName="The Ultimate Machine Learning Bootcamp"
          courseStatus="PUBLIC"
          courseImg="/saly_1.jpg"
          courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        />
        <CourseCard
          courseName="The Ultimate Devops and Cloud Bootcamp"
          courseStatus="DRAFT"
          courseImg="/saly_1.jpg"
          courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        />
      </div>
      <SuggestionsContainer />
      <FooterContainer />
    </div>
  );
};

export default MyCourses;
