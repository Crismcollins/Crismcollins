import { getProfilePicture, getUser } from '@/services/user-services';
import React, { useEffect, useState } from 'react'

const useProfileData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { data: profile_picture } = getProfilePicture();
  const { data: user_data } = getUser('es');

  useEffect(() => {
    if (profile_picture && user_data)
      setLoading(false);
  }, [profile_picture, user_data])

  return {
    profile_picture,
    user_data,
    loading
  }
}

export default useProfileData;