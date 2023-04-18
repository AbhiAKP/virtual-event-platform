import HeaderContainer from "../../components/global/HeaderContainer";
import SearchForm from "../../components/exploreCourses/SearchForm";
import ResultsSection from "../../components/exploreCourses/ResultsSection";
import FooterContainer from "../../components/global/FooterContainer";
import styles from "./ExploreCourses.module.css";
import { useState } from "react";

const ExploreCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    // window.alert(searchQuery);
  };

  return (
    <div className={styles.exploreCourses}>
      <HeaderContainer />
      <SearchForm onSearch={handleSearch} />
      <ResultsSection keywords={searchQuery} />
      <FooterContainer />
    </div>
  );
};

export default ExploreCourses;
