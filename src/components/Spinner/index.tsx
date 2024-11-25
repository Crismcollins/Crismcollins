import React, { useEffect, useState } from 'react';
import { SpinnerProps } from './types';

const Spinner = () => {
  return (
    <div className={`flex justify-center items-center inset-0 h-full w-full bg-black z-50`}>
      <div className="w-16 h-16 border-4 rounded-full animate-spin border-gray-300 border-t-[var(--highlighted)]"></div>
    </div>
  );
};

export default Spinner;
