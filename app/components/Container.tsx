"use client";

import React from "react";

interface ContaiterProps {
  children: React.ReactNode;
}

const Contaiter: React.FC<ContaiterProps> = ({ children }) => {
  return (
    <div
      className="
       max-w-[2520px] 
       mx-auto
       xl:px-20
       md:px-10
       sm:px-2
       px-4
      "
    >
      {children}
    </div>
  );
};

export default Contaiter;
