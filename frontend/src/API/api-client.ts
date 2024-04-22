import { NoteFormData } from "../forms/AddNotesForm";
import { TodoFormData } from "../forms/AddTodoForm";
import { SignInFormData } from "../pages/SignIn";
import { RegisterFormData } from "../pages/SignUp";
import { NoteType, TodoType } from "../types/modelTypes";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// USER  ENDPOINTS --------------------------------------------------------------//

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

// TODO  ENDPOINTS --------------------------------------------------------------//
// fetch Todos

export const fetchTodos = async (): Promise<TodoType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/todos`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching Todos..!");
  }
  return response.json();
};

// add new todo

export const addTodo = async (formData: TodoFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/todos`, {
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

// update todo check status

export const updateTodo = async (todoId: string) => {
  const response = await fetch(`${API_BASE_URL}/api/todos/${todoId}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error updating todo...!");
  }
  return response.json();
};

// delete todo

export const deleteTodo = async (todoId: string) => {
  const response = await fetch(`${API_BASE_URL}/api/todos/${todoId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error deleting todo...!");
  }
  return response.json();
};

// NOTES  ENDPOINTS --------------------------------------------------------------//

// add new note
export const addNote = async (formData: NoteFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/notes`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Error creating new note...!");
  }
  return response.json();
};

// get all note
export const fetchNotes = async (): Promise<NoteType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/notes`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching notes...!");
  }
  return response.json();
};
