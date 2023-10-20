type Classes = string | number | null | boolean | undefined | Classes[];

export const cls = (...classes: Classes[]) => {
  return classes.filter(Boolean).join(" ");
};
