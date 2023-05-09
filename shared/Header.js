import React from "react";

const Header = () => {
  return (
    <section className="fixed top-0 left-0 w-full">
      <div className="py-4 px-6 flex justify-between items-center h-full w-full">
        <div className="">
          {/* logo  */}
          <h2>We</h2>
        </div>

        {/* menu item  */}
        <div>
          <button>Home</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
