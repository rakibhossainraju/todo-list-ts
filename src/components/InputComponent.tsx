import { type ComponentPropsWithoutRef } from "react";

interface InputPropsType extends ComponentPropsWithoutRef<"input"> {
  name: string;
}

const InputComponent = ({ name, ...otherProps }: InputPropsType) => {
  return <input name={name} {...otherProps} />;
};

export default InputComponent;
