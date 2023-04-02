import InstructorCard from "./InstructorCard";
import styles from "./InstructorsContainer.module.css";

const InstructorsContainer = () => {
  return (
    <div className={styles.bestInstructors}>
      <InstructorCard
        expertPhoto="/rectangle-16@1x.jpg"
        expertRole="Cyber Security Expert"
      />
      <InstructorCard
        expertPhoto="/rectangle-161@1x.jpg"
        expertRole="Business Idea Expert"
        propLeft="100px"
        propBoxShadow="unset"
      />
      <InstructorCard
        expertPhoto="/rectangle-162@1x.jpg"
        expertRole="Social Media Expert"
        propLeft="742px"
        propBoxShadow="unset"
      />
      <InstructorCard
        expertPhoto="/rectangle-163@1x.jpg"
        expertRole="UI-UX Design Expert"
        propLeft="1063px"
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      />
      <div className={styles.bestInstructorsHeadingContainer}>
        <span>Our Best</span>
        <span className={styles.instructors}> Instructors</span>
      </div>
    </div>
  );
};

export default InstructorsContainer;
