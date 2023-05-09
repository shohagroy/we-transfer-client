import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <h2>Admin layout</h2>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
