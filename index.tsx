import React from 'react';

import dynamic from 'next/dynamic';

const Component = dynamic(
  () => import('./Component'),
  { ssr: true, suspense: true },
);

export const Page = () => {
  return (
    <div>
      Test
      <Component />
    </div>
  );
  
};

export default Page;
