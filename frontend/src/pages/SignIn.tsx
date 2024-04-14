import logo from "../assets/logo.png";
import * as apiClient from "../API/api-client";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signin, {
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
          <h2 className="ml-auto text-3xl font-semibold text-gray-1">SignIn</h2>
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

        <button
          type="submit"
          className="w-[40%] px-4 py-4 mt-6 font-semibold text-white rounded bg-green hover:bg-green/80"
        >
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;
