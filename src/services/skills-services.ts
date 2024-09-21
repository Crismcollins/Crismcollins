import { Language, Skill } from "@/types/profile";
import { useDeleteQuery, useGetQuery, usePatchQuery, usePostQuery } from "./fetchs"

export const getAllSkills = (language?: Language) => {
  return useGetQuery<Skill[]>(`/client/skills/${language ?? ''}`, 'Get all skills');
}

export const getSkillById = (id: number) => {
  return useGetQuery<Skill>(`/client/skills/${id}`, 'Get all skills');
}

export const addSkill = () => {
  return usePostQuery('/client/skills', 'Add skill');
}

export const updateSkill = () => {
  return usePatchQuery(`/client/skills`, 'Add skill');
}

export const deleteSkill = (id: number) => {
  return useDeleteQuery(`/client/skills/${id}`, 'Delete skill');
}
