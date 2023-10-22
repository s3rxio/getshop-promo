import React, { forwardRef } from "react";
import { cls } from "../../libs";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "outlined" | "contained";
  color?: "black" | "white";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    props,
    ref
  ) => {
    const {
      children,
      className,
      variant = "outlined",
      color = "black",
      disabled,
      ...restProps
    } = props;

    const buttonStyles = cls(
      styles.button,
      styles[`button_variant_${variant}`],
      styles[`button_color_${color}`],
      disabled && styles.button_disabled,
      className
    );

    return (
      <button ref={ref} className={buttonStyles} {...restProps}>
        {children}
      </button>
    );
  }
);
export default Button;
