import HeroContainer from "../../components/home/HeroContainer";
import HeaderContainer from "../../components/global/HeaderContainer";
import StatsContainer from "../../components/home/StatsContainer";
import CourseContainer from "../../components/home/CourseContainer";
import CategoryContainer from "../../components/home/CategoryContainer";
import InstructorsContainer from "../../components/home/InstructorsContainer";
import FooterContainer from "../../components/global/FooterContainer";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <HeaderContainer />
      <HeroContainer />
      <StatsContainer />
      <CourseContainer />
      <CategoryContainer />
      <InstructorsContainer />
      <FooterContainer />
    </div>
  );
};

export default Home;
