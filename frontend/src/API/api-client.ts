import { TodoFormData } from "../forms/AddTodoForm";
import { SignInFormData } from "../pages/SignIn";
import { RegisterFormData } from "../pages/SignUp";
import {
  NoteType,
  TodoType,
  NoteFormData,
  ProjectType,
} from "../types/modelTypes";

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

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
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

// fetch note by ID
export const fetchNoteById = async (noteId: string): Promise<NoteType> => {
  const response = await fetch(`${API_BASE_URL}/api/notes/${noteId}`);
  if (!response.ok) {
    throw new Error("Error fetching note...!");
  }
  return response.json();
};

// update note
export const updateNote = async (NoteFormData: NoteFormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/notes/${NoteFormData._id}`,
    {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NoteFormData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update note..!");
  }

  return response.json();
};

// delete a note

export const deleteNote = async (noteId: string) => {
  const response = await fetch(`${API_BASE_URL}/api/notes/${noteId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error deleting note...!");
  }
  return response.json();
};

// create a new project
export const createProject = async (projectFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/projects`, {
    method: "POST",
    credentials: "include",

    body: projectFormData,
  });
  if (!response.ok) {
    throw new Error("Failed to create project..!");
  }
  return response.json();
};

// get projectCard

export const getProjectCards = async (): Promise<ProjectType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/projects`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching project cards...!");
  }
  return response.json();
};

/// Test

export const createTest = async (testFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/tests`, {
    method: "POST",
    credentials: "include",

    body: testFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to create Test");
  }
  return response.json();
};
