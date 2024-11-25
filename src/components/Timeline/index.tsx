import React, { useState } from 'react'
import TimeLineItem, { TimelineItemProps } from '../TimeLineItem';

type TimelineProps = {
  items: TimelineItemProps[];
};

const TimeLine: React.FC<TimelineProps> = ({
  items,
}) => {

  const RenderLine = () => (
    <div className='flex ml-[3rem] xl:ml-[4.5rem] w-full'>
      <div className='relative w-1 h-12 rounded-lg border-r-2 border-l-2 border-text'></div>
    </div>
  )

  return (
    <div className="flex flex-col justify-center">
      {items?.map((item, index) => (
        <div key={`div-${index}`} className='mb-2'>
          <TimeLineItem key={index} {...item} />
          { index !== ( items.length - 1 ) && <RenderLine key={`line-${index}`}/>}
        </div>
      ))}
    </div>
  )
}

export default TimeLine;