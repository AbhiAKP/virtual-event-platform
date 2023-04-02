import CategoryRowContainer from "./CategoryRowContainer";
import styles from "./CategoryContainer.module.css";

const CategoryContainer = () => {
  return (
    <div className={styles.popularyCategories}>
      <div className={styles.popularCategoryHeadingContainer}>
        <span>
          <span>Most</span>
          <span className={styles.span}>{` `}</span>
        </span>
        <span className={styles.popularCategory}>Popular Category</span>
      </div>
      <CategoryRowContainer />
      <CategoryRowContainer />
      <CategoryRowContainer />
    </div>
  );
};

export default CategoryContainer;
