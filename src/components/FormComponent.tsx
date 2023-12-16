import {
  ComponentPropsWithoutRef,
  type FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

interface FormPropsType extends ComponentPropsWithoutRef<"form"> {
  getFormData: (data: unknown) => void;
}

export interface FormHandleType {
  clear: () => void;
}

const FormComponent = forwardRef<FormHandleType, FormPropsType>(
  ({ getFormData, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => ({
      clear() {
        console.log("CLEARING");
        form.current?.reset();
      },
    }));

    const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data: unknown = Object.fromEntries(formData);

      getFormData(data);
    };
    return (
      <form onSubmit={handelSubmit} {...otherProps} ref={form}>
        {children}
      </form>
    );
  },
);

export default FormComponent;
