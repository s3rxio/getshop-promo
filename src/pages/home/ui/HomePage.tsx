import React, { useRef, useState } from "react";
import { Banner } from "../../../shared/ui";
import styles from "./HomePage.module.css";
import { cls, useDialog } from "../../../shared/libs";
import QrCode from "../../../shared/assets/qr_code.png";
import PromoVideo from "../../../shared/assets/promo.mp4";
import {
  AdditionalBanner,
  RegistrationDialog
} from "../../../features/registrationDialog";

export const HomePage: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { setDialog } = useDialog();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOnPlay = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }

    if (showBanner) {
      return;
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

    setDialog({
      dialog: <RegistrationDialog />,
      extraChildren: <AdditionalBanner />,
      onOpen: () => videoRef.current?.pause(),
      onClose: () => videoRef.current?.play()
    });
  };

  return (
    <div className={styles["home-page"]}>
      <video
        ref={videoRef}
        className={styles["home-page__video"]}
        src={PromoVideo}
        // autoPlay
        // muted
        controls
        onPlay={() => handleOnPlay()}
        loop
      />

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
