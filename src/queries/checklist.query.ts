import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "react-native-toast-notifications";

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
  const toast = useToast();
  let toastId: string;

  return useMutation({
    mutationFn: createTask,
    onMutate: () => {
      toastId = toast.show("Ajout...", { type: "loading" });
    },
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.update(toastId, `${response.name} ajouté !`, {
        type: "success",
      });
    },
    onError: (error: AxiosError) => {
      toast.update(toastId, `Une erreur est survenue: \n${error.message}`, {
        type: "danger",
      });
    },
  });
};

export const useMutationCreateCategory = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  let toastId: string;

  return useMutation({
    mutationFn: createCategory,
    onMutate: () => {
      toastId = toast.show("Création de la catégorie...", { type: "loading" });
    },
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.update(toastId, `Catégorie ${response.name} créée !`, {
        type: "success",
      });
    },
    onError: (error: AxiosError) => {
      console.log("Error create category:", error);
      toast.update(toastId, `Une erreur est survenue: \n${error.message}`, {
        type: "danger",
      });
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
  const toast = useToast();

  return useMutation({
    mutationFn: updateCategory,
    onMutate: () => {},
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.show("Modification réussie !", {
        type: "success",
      });
    },
    onError: (error: AxiosError) => {
      console.log("Error while updating category:", error.response);
      toast.show(`Une erreur est survenue: \n${error.message}`, {
        type: "danger",
      });
    },
  });
};

export const useMutationUpdateTask = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: updateTask,
    onMutate: () => {},
    onSuccess: (response: ITask) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error: AxiosError) => {
      console.log("error while checking task:", error.response);
      toast.show(`Une erreur est survenue: \n${error.message}`, {
        type: "danger",
      });
    },
  });
};

// DELETE
export const useMutationDeleteTask = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: removeTask,
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error: AxiosError) => {
      toast.show(`Une erreur est survenue: \n${error.message}`, {
        type: "danger",
      });
    },
  });
};

export const useMutationDeleteCategory = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: removeCategory,
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.show("Catégorie supprimée !", {
        type: "success",
      });
    },
    onError: (error: AxiosError) => {
      toast.show(`Une erreur est survenue: \n${error.message}`, {
        type: "danger",
      });
    },
  });
};
