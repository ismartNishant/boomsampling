import React from 'react';

const HeadingOne: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h1 className="text-2xl lg:text-4xl tracking-wide bebas-neue-regular">
      {children}
    </h1>
  );
};

export default HeadingOne;
