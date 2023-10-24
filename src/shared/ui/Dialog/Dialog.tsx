import React from "react";
import { Button } from "..";
import styles from "./Dialog.module.css";

export interface DialogProps {
  dialog: React.ReactNode;
  unsetDialog: () => void;
  extraChildren?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  dialog,
  unsetDialog,
  extraChildren
}) => {
  return (
    <div className={styles["dialog-overlay"]}>
      <div className={styles["dialog-container"]}>{dialog}</div>
      {extraChildren}
      
      <Button
        variant="contained"
        color="white"
        onClick={unsetDialog}
        className={styles["dialog-close-button"]}
      >
        <span className={styles["dialog-close-button__icon"]}></span>
      </Button>
    </div>
  );
};

export default Dialog;
