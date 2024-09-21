
import { Education, Language } from "@/types/profile";
import { useDeleteQuery, useGetQuery, usePatchQuery, usePostQuery } from "./fetchs"

export const getAllEducations = (language?: Language) => {
  return useGetQuery<Education[]>(`/client/educations/${language ?? ''}`, 'Get All Educations');
}

export const getEducationById = (id: number) => {
  return useGetQuery<Education[]>(`/client/educations/${id}`, 'Get education by id');
}

export const addEducation = () => {
  return usePostQuery('/client/educations', 'Add Education');
}

export const updateEducation = () => {
  return usePatchQuery('/client/educations', 'Update Education');
}

export const deleteEducation = (id: number) => {
  return useDeleteQuery(`/client/educations/${id}`, 'Delete skill');
}