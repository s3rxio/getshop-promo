import React from "react";
import { cls } from "../../libs";
import { Button } from "..";
import styles from "./Banner.module.css";

export interface BannerProps {
  className?: string;

  title: string;
  image?: string;
  description?: string;
  buttonText?: string;

  onOpen?: () => void;
}

const Banner: React.FC<BannerProps> = props => {
  const {
    className,
    title,
    image,
    description,
    buttonText = "OK",
    onOpen
  } = props;
  const bannerStyles = cls("banner", styles.banner, className);

  return (
    <div className={bannerStyles}>
      <h4 className={styles.banner__title}>{title}</h4>
      {image && <img src={image} alt={title} width={128} />}
      {description && (
        <p className={styles.banner__description}>{description}</p>
      )}
      <Button
        className={styles.banner__button}
        variant="contained"
        onClick={onOpen}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Banner;
