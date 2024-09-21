import { Job, Language } from "@/types/profile";
import { useDeleteQuery, useGetQuery, usePatchQuery, usePostQuery } from "./fetchs"

export const getAllJobs = (language?: Language) => {
  return useGetQuery<Job[]>(`/client/jobs/${language ?? ''}`, 'Get all jobs');
}

export const getJobById = (id: number) => {
  return useGetQuery<Job>(`/client/jobs/${id}`, 'Get job by id');
}

export const addJob = () => {
  return usePostQuery(`/client/jobs`, 'Create Job');
}

export const updateJob = () => {
  return usePatchQuery(`/client/jobs`, 'Update Job');
}

export const deleteJob = (id: number) => {
  return useDeleteQuery(`/client/jobs/${id}`, 'Delete Job');
}