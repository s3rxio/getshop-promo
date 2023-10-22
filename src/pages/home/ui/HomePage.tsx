import React, { useRef, useState } from "react";
import { Banner } from "../../../shared/ui";
import styles from "./HomePage.module.css";
import { cls } from "../../../shared/libs";
import QrCode from "../../../shared/assets/qr_code.png";
import PromoVideo from "../../../shared/assets/promo.mp4";

export const HomePage: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOnPlay = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }

    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  };

  const handleBannerOpen = () => {
    setShowBanner(false);

    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={styles["home-page"]}>
      <video
        ref={videoRef}
        className={styles["home-page__video"]}
        src={PromoVideo}
        autoPlay
        muted
        onPlay={() => handleOnPlay()}
        loop
      >
        Ваш браузер не поддерживает HTML5 video
      </video>

      <Banner
        title="Не ошибайтесь в своем выборе. Покупайте Volvo сейчас!"
        description="Сканируйте QR-код
        или нажмите ОК"
        image={QrCode}
        onOpen={handleBannerOpen}
        className={cls(
          styles["home-page__banner"],
          showBanner && styles["home-page__banner_show"]
        )}
      />
    </div>
  );
};
