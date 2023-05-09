import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const FileTransfer = () => {
  return (
    <section className=" absolute top-[300px] w-[300px] left-20">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex flex-col ">
          <div className="p-5 flex items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex justify-center items-center">
              <button className="text-5xl p-4 font-bold">
                <FiPlusCircle />
              </button>
            </div>
            <div className="ml-3">
              <h2 className="text-2xl font-semibold">Upload File</h2>
              <p className="text-sm underline hover:text-blue-600 duration-300 cursor-pointer">
                Or Select a Folder
              </p>
            </div>
          </div>

          <div className="border-t border-b">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email to"
              className="p-3 w-full focus:outline-none"
            />
          </div>

          <div className=" border-b">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Email"
              className="p-3 w-full focus:outline-none"
            />
          </div>

          <div className=" border-b">
            <input
              type="text"
              name=""
              id=""
              placeholder="Title"
              className="p-3 w-full focus:outline-none"
            />
          </div>

          <div className=" border-b">
            <textarea
              name=""
              id=""
              cols="30"
              rows=""
              className="p-3 w-full focus:outline-none"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="p-5 flex items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex justify-center items-center">
              <button className="text-2xl p-4 font-bold">
                <BsThreeDots />
              </button>
            </div>
            <div className="ml-3">
              <button className="p-2 text-white bg-gray-400 font-semibold w-[150px] rounded-full hover:bg-blue-600 duration-300">
                Transfet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileTransfer;
