import HeaderContainer from "../../components/global/HeaderContainer";
import SearchForm from "../../components/exploreCourses/SearchForm";
import ResultsSection from "../../components/exploreCourses/ResultsSection";
import FooterContainer from "../../components/global/FooterContainer";
import styles from "./ExploreCourses.module.css";

const ExploreCourses = () => {
  return (
    <div className={styles.exploreCourses}>
      <HeaderContainer />
      <SearchForm />
      <ResultsSection />
      <FooterContainer />
    </div>
  );
};

export default ExploreCourses;
