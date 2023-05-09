import React from "react";

const HomeFooter = () => {
  return (
    <section className=" absolute bottom-0 w-full left-0">
      <div className="p-5 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold font-serif">WeTransfet</h1>
        </div>

        <div>
          <p className=" font-semibold underline cursor-pointer">
            Develop by @Rubast.dev
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeFooter;
