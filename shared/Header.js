import React from "react";
import Link from "next/link";
// import { IoIosArrowDown } from "react";

const Header = () => {
  const menuItems = [
    {
      name: "pricing",
      link: "pricing",
    },
    {
      name: "features",
      link: "features",
      sub: [
        {
          name: "sub menu",
          link: "sub menu",
        },
      ],
    },
    {
      name: "company",
      link: "company",
    },
    {
      name: "help",
      link: "help",
    },
    {
      name: "sign up",
      link: "sign up",
    },
    {
      name: "log in",
      link: "log in",
    },
  ];

  return (
    <section className="fixed top-0 left-0 w-full">
      <div className="py-4 px-6 flex justify-between items-center h-full w-full">
        <div className="">
          {/* logo  */}
          <Link href={"/"}>
            <img
              className="w-[70px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/WeTransfer_logo.svg/2560px-WeTransfer_logo.svg.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* menu item  */}

        {/* learge screen  */}
        <div className="bg-white rounded-md ">
          <div className="">
            {menuItems?.map((menu) => (
              <Link href={"/"} className="">
                <button className="capitalize text-sm p-1 w-[80px] h-full border-r font-semibold text-center  hover:bg-gray-100 duration-300 ">
                  {menu.name}{" "}
                  {menu?.sub && <span>{/* <IoIosArrowDown /> */}l</span>}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
