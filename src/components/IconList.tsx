import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function IconList() {
  return (
    <>
      <div
        className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer hover:text-purple-800 
                 hover:scale-105 ease-in duration-500 "
      >
        <FaLinkedin size={25} />
      </div>
      <div
        className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer hover:text-purple-800 
                 hover:scale-105 ease-in duration-500 "
      >
        <FaGithub size={25} />
      </div>
      <div
        className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer hover:text-purple-800
                  hover:scale-105 ease-in duration-500 "
      >
        <FaInstagram size={25} />
      </div>
      <div
        className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer hover:text-purple-800
                  hover:scale-105 ease-in duration-500 "
      >
        <AiOutlineMail size={25} />
      </div>
    </>
  );
}
