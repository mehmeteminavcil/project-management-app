import { SignInFormData } from "../pages/SignIn";
import { RegisterFormData } from "../pages/SignUp";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// signup  -  create new user
export const signup = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

// login - user authentication

export const signin = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

// validate-token

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Token Invalid");
  }
  return response.json();
};

// signOut

export const signout = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/signout`, {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error during sign out!");
  }
};
