import { FormProvider, useForm } from "react-hook-form";

import AddImage from "../components/AddImage";
import * as apiClient from "../API/api-client";
import { useMutation, useQuery } from "react-query";
import { useEffect } from "react";

export type AccountSettings = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  imageFiles: FileList;
};

const AccountSettings = () => {
  const { data: userData } = useQuery("getUser", apiClient.getUser);
  console.log(userData);

  const formMethods = useForm<AccountSettings>({
    defaultValues: userData
      ? {
          firstName: userData.firstName,
          lastName: userData.lastName,
        }
      : undefined,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  const { mutate } = useMutation(apiClient.updateUser, {
    onSuccess: () => {
      console.log("SUCCESS");
    },
    onError: () => {
      console.log("ERROR");
    },
  });

  const onSubmit = handleSubmit((formDataJson: AccountSettings) => {
    const formData = new FormData();

    formData.append("firstName", formDataJson.firstName);
    formData.append("lastName", formDataJson.lastName);

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    console.log(formDataJson);
    onSave(formData);
  });

  const onSave = (userData: FormData) => {
    mutate(userData);
    console.log(userData);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-10 border-gray-5 rounded-2xl"
      >
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

        <AddImage name="imageFiles" title="Profile Picture" />

        <button
          type="submit"
          className="w-full py-3 mx-auto mt-6 font-semibold text-white rounded bg-green hover:bg-green/80"
        >
          Update Account Settings
        </button>
      </form>
    </FormProvider>
  );
};

export default AccountSettings;
