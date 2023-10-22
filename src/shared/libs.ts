import { useEffect } from "react";

type Classes = string | number | null | boolean | undefined | Classes[];

export const cls = (...classes: Classes[]) => {
  return classes.filter(Boolean).join(" ");
};

export const useTimeout = (callback: () => void, delay?: number) => {
  useEffect(() => {
    const timer = setTimeout(callback, delay);

    return () => {
      clearTimeout(timer);
    };
  });
};
