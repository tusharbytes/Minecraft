import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`container  m-auto  p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
