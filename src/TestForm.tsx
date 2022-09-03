import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";

interface Inputs {
  firstName: string;
  lastName: string;
}

const TestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("firstName")}
        className="mt-4"
        labelText="First Name"
      />
      <Input
        {...register("lastName", { required: true })}
        className="mt-4"
        labelText="LastName"
        error={errors.lastName && "This field is required"}
      />
      <button
        className="mt-2 transition duration-500 active:scale-95 py-2 px-4 bg-violet-500 hover:bg-violet-700 hover:bg-gra text-white shadow shadow-violet-600/25 rounded-md hover:shadow-violet-600/75"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default TestForm;
