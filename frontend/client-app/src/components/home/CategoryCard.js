import { useMemo } from "react";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({
  categoryLogo,
  categoryName,
  categoryNameColor,
  frame23BackgroundColor,
  frame23BoxSizing,
}) => {
  const categoryNameStyle = useMemo(() => {
    return {
      color: categoryNameColor,
    };
  }, [categoryNameColor]);

  const frameButtonStyle = useMemo(() => {
    return {
      backgroundColor: frame23BackgroundColor,
      boxSizing: frame23BoxSizing,
    };
  }, [frame23BackgroundColor, frame23BoxSizing]);

  return (
    <button className={styles.category}>
      <div className={styles.frameParent}>
        <div className={styles.categoryLogoParent}>
          <img className={styles.categoryLogoIcon} alt="" src={categoryLogo} />
          <div className={styles.categoryName} style={categoryNameStyle}>
            {categoryName}
            
          </div>
        </div>
        <button className={styles.searchWrapper} style={frameButtonStyle}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
        </button>
      </div>
    </button>
  );
};

export default CategoryCard;
