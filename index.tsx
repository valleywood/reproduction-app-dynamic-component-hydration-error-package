import React from 'react';

import dynamic from 'next/dynamic';

const Component = dynamic(
  () => import('./Component'), 
);

// Switching from dynamic to this makes the hydration error go away
//import Component from './Component';

export const Page = () => {
  return (
    <div>
      Test
      <Component />
    </div>
  );
  
};

export default Page;
