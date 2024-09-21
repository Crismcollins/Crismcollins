import { Language, ProfilePicture, User } from "@/types/profile";
import { useGetQuery, usePatchQuery } from "./fetchs"

export const getUser = (language: Language) => {
  return useGetQuery<User>(`/client/user/${language}`, 'Get User');
}

export const updateUser = () => {
  return usePatchQuery<User>('/client/user', 'Update user')
}

export const getProfilePicture = () => {
  return useGetQuery<ProfilePicture>('/storage/profile-picture', 'Get profile picture');
}
