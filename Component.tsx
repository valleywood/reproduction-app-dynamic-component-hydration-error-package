import React from 'react';

const Component = () => {
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setNum(num + 1);
    }, 3000);
  }, [num]);
  return <div>Test Inner {num}</div>;
};

export default Component;
