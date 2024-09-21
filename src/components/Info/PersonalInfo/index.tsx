import useProfileData from '@/app/hooks/useProfileData';
import Container from '@/components/Container';
import NintendoSwitch from '@/components/NintendoSwitch';
import RRSSButton from '@/components/RRSSButton';
import Spinner from '@/components/Spinner';
import React, { useEffect, useState } from 'react'

const PersonalInfo = () => {

  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const { profile_picture, user_data, loading } = useProfileData();

  const renderLoading = () => (
    <Spinner color='background' fill='primary' />
  )
  console.log(profile_picture)
  return (
    <Container>
      {loadingImage && renderLoading()}
      <div className='-top-24 relative text-center'>
        <img
          className='h-52 w-52 rounded-2xl relative left-1/2 transform -translate-x-1/2'
          src={profile_picture?.imageLink}
          onLoad={() => setLoadingImage(false)}
        />
        <h3 className='text-2xl mt-4'>{user_data?.full_name}</h3>
        <h6 className='text-base mt-2'>{user_data?.profession}</h6>

        <div className='flex gap-2'>
          <RRSSButton
            className='bg-foreground'
            onClick={() => console.log("AAA")}
          >
            <img
              src='/icons/linkedin.svg'
              height={24}
              width={24}
            />
          </RRSSButton>

          <RRSSButton
            className='bg-foreground'
          >
            <img
              src='/icons/github.svg'
            />
          </RRSSButton>
        </div>
      </div>
    </Container>
  )
}

export default PersonalInfo;