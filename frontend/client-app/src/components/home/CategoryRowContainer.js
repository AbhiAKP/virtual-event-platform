import CategoryCard from "./CategoryCard";
import styles from "./CategoryRowContainer.module.css";

const CategoryRowContainer = () => {
  return (
    <div className={styles.categoryRow}>
      <CategoryCard categoryLogo="/categorylogo.svg" categoryName="Design" />
      <CategoryCard
        categoryLogo="/categorylogo1.svg"
        categoryName="Development"
        categoryNameColor="#1b1d1f"
        frame23BackgroundColor="#fff"
        frame23BoxSizing="border-box"
      />
      <CategoryCard
        categoryLogo="/categorylogo2.svg"
        categoryName="Marketing"
        categoryNameColor="#1b1d1f"
        frame23BackgroundColor="transparent"
        frame23BoxSizing="border-box"
      />
      <CategoryCard
        categoryLogo="/categorylogo3.svg"
        categoryName="Business"
        categoryNameColor="#1b1d1f"
        frame23BackgroundColor="transparent"
        frame23BoxSizing="border-box"
      />
    </div>
  );
};

export default CategoryRowContainer;
