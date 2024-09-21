import React from 'react'
import { CardProps } from './type';

const Container = ({
  children
}:CardProps ) => {
  return (
    <div className='bg-background rounded-2xl px-6'>
      { children }
    </div>
  )
}

export default Container;