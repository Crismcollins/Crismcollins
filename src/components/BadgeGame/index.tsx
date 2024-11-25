import React from 'react'
import { URL_APP_STORE_BADGE, URL_PLAY_STORE_BADGE } from './const';

type BadgeGameProps = {
  url: string;
  store?: 'play_store' | 'appstore';
}

const BadgeGame = ({
  url,
  store
}: BadgeGameProps) => {

  const urlStore = store === 'play_store' ? URL_PLAY_STORE_BADGE : store === 'appstore' ? URL_APP_STORE_BADGE : null;
  const renderBadge = () => (
    urlStore !== null && (
      <img
        src={urlStore}
        width={160}
        height={100}
      />
    )
  )

  const renderText = () => (
    urlStore === null && (
      <p>TRY IT NOW</p>
    )
  )

  return (
    <a
      className={ urlStore === null ? 'bg-vibrantcoral p-3 rounded-3xl w-full text-center hover:bg-[#f3a12b]' : ''}
      target="_blank"
      href={url}
    >
      { renderBadge() }
      { renderText() }
    </a>
  )
}

export default BadgeGame;