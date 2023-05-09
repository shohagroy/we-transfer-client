import Header from "@/shared/Header";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CommonLayout;
