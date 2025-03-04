import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto max-w-[1186px] px-4 md:px-8   ${className}`}>
      {children}
    </div>
  );
};

export default Container;

