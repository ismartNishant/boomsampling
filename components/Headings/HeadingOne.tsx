import React from 'react';

const HeadingOne: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h1 className="text-2xl lg:text-4xl font-bold tracking-wide">
      {children}
    </h1>
  );
};

export default HeadingOne;
