import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  className?: string;
  error?: string;
}
const Input = React.forwardRef<HTMLInputElement, IProps>(
  ({ labelText, className, error, ...props }, ref) => {
    return (
      <>
     <div className="w-full and when focused do something speciak"></div>
      <div className="w-full and something special"></div>
        <div
          className={`${className} ${
            error && "animate-shake"
          } relative border-b-2 inline-flex justify-center`}
        >
          <input
            ref={ref}
            {...props}
            className="w-full focus:ring-0 border-transparent focus:border-transparent peer"
            type={"text"}
            placeholder=" "
          />
          <div className="border-sky-500 absolute top-full transition-all duration-300 bg-sky-500 w-0 h-0.5 peer-focus:w-full"></div>
          <label className="absolute -top-3 left-2 transition-all bg-white scale-75 px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-focus:-top-3 peer-focus:scale-75 peer-focus:-left-2 peer-focus:text-sky-500">
            {labelText}
          </label>
        </div>
        {error && (
          <p className={`${error && "animate-shake"} text-red-500 mt-1`}>
            {error}
          </p>
        )}
      </>
    );
  }
);

export default Input;
