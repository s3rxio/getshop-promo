import { useContext } from "react";
import { DialogContext } from "./providers";
type Classes = string | number | null | boolean | undefined | Classes[];

export const cls = (...classes: Classes[]) => {
  return classes.filter(Boolean).join(" ");
};

export const useDialog = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }

  return context;
};
