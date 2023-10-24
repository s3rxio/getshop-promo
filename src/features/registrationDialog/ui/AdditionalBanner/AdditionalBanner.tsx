import React from "react";
import styles from "./AdditionalBanner.module.css";
import QrCode from "../../../../shared/assets/qr_code.png";

const AdditionalBanner: React.FC = () => {
  return (
    <div className={styles["additional-banner"]}>
      <span>Сканируйте QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</span>
      <img src={QrCode} alt="qr code" width={110} />
    </div>
  );
};

export default AdditionalBanner;
