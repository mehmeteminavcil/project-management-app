import logo from "../assets/logo.png";
import * as apiClient from "../API/api-client";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.signup, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate("/Overview");
    },
    onError: (error: Error) => {
      console.log(JSON.stringify(error));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-body">
      <form
        onSubmit={onSubmit}
        className="mx-auto border bg-[#fff] border-gray-5 max-w-[585px] w-full flex flex-col gap-4 p-10 rounded-2xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <img src={logo} alt="logo " width={38} height={38} />
          <h1 className="text-4xl font-medium text-gray-1">TaskFlow </h1>
          <h2 className="ml-auto text-3xl font-semibold text-gray-1">Signup</h2>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <label className="flex flex-col w-full gap-2">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-1">First Name</h2>
              <span className="text-error">{errors.firstName?.message}</span>
            </div>

            <input
              type="text"
              className="p-3 capitalize border rounded-md outline-none border-gray-5"
              {...register("firstName", {
                required: "This field is required!",
              })}
            />
          </label>
          <label className="flex flex-col w-full gap-2">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-1">Last Name</h2>
              <span className="text-error">{errors.lastName?.message}</span>
            </div>

            <input
              type="text"
              className="p-3 capitalize border rounded-md outline-none border-gray-5"
              {...register("lastName", { required: "This field is required!" })}
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 ">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-1">E-mail</h2>
            <span className="text-error">{errors.email?.message}</span>
          </div>

          <input
            type="email"
            className="p-3 border rounded-md outline-none border-gray-5"
            {...register("email", { required: "This field is required!" })}
          />
        </label>
        <label className="flex flex-col gap-2 ">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-1">Password</h2>
            <span className="text-error">{errors.password?.message}</span>
          </div>

          <input
            type="password"
            className="p-3 border rounded-md outline-none border-gray-5"
            {...register("password", {
              required: "This field is required!",
              minLength: {
                value: 6,
                message: "The password must be at least 6 characters long.",
              },
            })}
          />
        </label>
        <label className="flex flex-col gap-2 ">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-1">Confirm Password</h2>
            <span className="text-error">
              {errors.confirmPassword?.message}
            </span>
          </div>

          <input
            type="password"
            className="p-3 border rounded-md outline-none border-gray-5"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "This field is required!";
                } else if (watch("password") !== val) {
                  return "Your passwords do not match";
                }
              },
            })}
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 mx-auto mt-6 font-semibold text-white rounded bg-green hover:bg-green/80"
        >
          Create Account
        </button>
        <Link to="/signin" className=" text-[#0866ff] text-center mt-2 ">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
