import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import axiosInstance from "./axios";

import { ICategory, ITask } from "@interfaces/index";

// =====
// Axios
// =====

// CREATE
export const createTask = async ({
  name,
  categoryId,
}: {
  name: string;
  categoryId: string;
}): Promise<ITask> => {
  const { data } = await axiosInstance.post(
    "/tasks",
    { name },
    {
      params: { categoryId },
    }
  );
  return data;
};

export const createCategory = async ({
  name,
  color,
}: {
  name: string;
  color: string;
}): Promise<ICategory> => {
  const { data } = await axiosInstance.post("/category", { name, color });
  return data;
};

// RETRIEVE
export const retrieveCategories = async (): Promise<ICategory[]> => {
  const { data } = await axiosInstance.get("/category");
  return data;
};

export const retrieveTasks = async (): Promise<ITask[]> => {
  const { data } = await axiosInstance.get("/tasks");
  return data;
};

// UPDATE
export const updateCategory = async ({
  payload,
  id,
}: {
  payload: any;
  id: string;
}): Promise<ICategory> => {
  const { data } = await axiosInstance.patch(`/category/${id}`, payload);
  return data;
};

export const updateTask = async ({
  isDisabled,
  id,
}: {
  isDisabled: boolean;
  id: string;
}): Promise<ITask> => {
  const { data } = await axiosInstance.patch(`/tasks/${id}`, { isDisabled });
  return data;
};

// DELETE
export const removeTask = async (id: string): Promise<any> => {
  await axiosInstance.delete(`/tasks/${id}`);
};

export const removeCategory = async (id: string): Promise<any> => {
  await axiosInstance.delete(`/category/${id}`);
};

// ==========
// ReactQuery
// ==========

// CREATE
export const useMutationCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onMutate: () => {},
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error: AxiosError) => {},
  });
};

export const useMutationCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onMutate: () => {},
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error: AxiosError) => {
      console.log("Error create category:", error);
    },
  });
};

// RETRIEVE
export const useQueryRetrieveCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: retrieveCategories,
    retry: false,
    meta: { errorCode: "EErrorCodes.SOME_QUERY_ERROR" },
  });
};

export const useQueryRetrieveTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: retrieveTasks,
    retry: false,
    meta: { errorCode: "EErrorCodes.SOME_QUERY_ERROR" },
  });
};

// UPDATE
export const useMutationUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error: AxiosError) => {},
  });
};

export const useMutationUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error: AxiosError) => {
      console.log("error while checking task:", error.response);
    },
  });
};

// DELETE
export const useMutationDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeTask,
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error: AxiosError) => {},
  });
};

export const useMutationDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeCategory,
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error: AxiosError) => {},
  });
};
