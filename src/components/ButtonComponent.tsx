import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonPropsType extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export const ButtonComponent = ({
  children,
  ...otherProps
}: ButtonPropsType) => {
  return <button {...otherProps}>{children}</button>;
};