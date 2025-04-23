import React from "react";
import styles from "./Banner.module.css";

const Banner = ({
  title,
  subtitle,
  imageUrl,
  isImageClickable,
  onImageClick,
  showButton,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={styles.banner}>
      {imageUrl &&
        (isImageClickable ? (
          <img
            src={imageUrl}
            alt={styles.styles}
            className={styles.bannerImage}
            onClick={onImageClick}
          />
        ) : (
          <img
            src={imageUrl}
            alt={styles.styles}
            className={styles.bannerImage}
          />
        ))}

      <div className={styles.bannerContent}>
        {title && <h1 className={styles.bannerTitle}>{title}</h1>}
        {subtitle && <p className={styles.bannerSubtitle}>{subtitle}</p>}
        {showButton && (
          <button className={styles.bannerButton} onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
