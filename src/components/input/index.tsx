import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: { message: string };
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div>
        <label className="headline">
          {label}
          <input
            className="w-full bg-transparent border-2 border-gray rounded-sm p-2 focus:outline-orange-500"
            ref={ref}
            {...rest}
          />
          {error ? <p className="text-red">{error.message}</p> : null}
        </label>
      </div>
    );
  }
);

