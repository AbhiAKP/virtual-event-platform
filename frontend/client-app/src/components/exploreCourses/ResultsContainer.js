import CourseCard from "./CourseCard";
import styles from "./ResultsContainer.module.css";

const ResultsContainer = () => {
  return (
    <div className={styles.resultsTab}>
      <div className={styles.resultCount}>
        <div className={styles.resultcount}>6 results</div>
      </div>
      <CourseCard
        courseImg="/saly2@1x.jpg"
        courseName="The Complete Data Science Bootcamp for Beginners"
        courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        instructorName="Jones Abile"
        rating="4.5"
        coursePrice="FREE"
      />
      <CourseCard
        courseImg="/saly2@1x.jpg"
        courseName="The Ultimate Web Developement Bootcamp for Beginners"
        courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        instructorName="Jacob Jones"
        rating="4.5"
        coursePrice="FREE"
      />
      <CourseCard
        courseImg="/saly2@1x.jpg"
        courseName="The Ultimate Machine Learning Bootcamp for Beginners"
        courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        instructorName="Jacob Jones"
        rating="4.5"
        coursePrice="FREE"
      />
      <CourseCard
        courseImg="/saly2@1x.jpg"
        courseName="The Ultimate Devops Bootcamp for Beginners"
        courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        instructorName="Jacob Jones"
        rating="4.5"
        coursePrice="FREE"
      />
      <CourseCard
        courseImg="/saly2@1x.jpg"
        courseName="The Ultimate Software Engineering Bootcamp for Beginners"
        courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        instructorName="Jacob Jones"
        rating="4.5"
        coursePrice="FREE"
      />
      <CourseCard
        courseImg="/saly2@1x.jpg"
        courseName="The Ultimate Cloud Computing Bootcamp for Beginners"
        courseDescription="Learn the fundamentals of UI/UX from the experienced Instructoras from Meta."
        instructorName="Jacob Jones"
        rating="4.5"
        coursePrice="FREE"
      />
    </div>
  );
};

export default ResultsContainer;
