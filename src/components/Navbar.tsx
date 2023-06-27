"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { IconList } from "./IconList";

export function Navbar() {
  const [navBar, setNavBar] = useState(false);
  function handleNavbar() {
    setNavBar(!navBar);
  }
  return (
    <div className=" w-full h-20 shadow-xl  ">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Image src={logo} width={75} height={50} alt="Rafa.tsx logo" />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase hover:text-purple-800 
              hover:font-semibold hover:border-b border-gray-400
               duration-500 ease-in-out"
              >
                Home
              </li>
            </Link>
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase hover:text-purple-800 
              hover:font-semibold hover hover:border-b hover:border-gray-400 
               duration-500 ease-in-out"
              >
                Sobre
              </li>
            </Link>
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase hover:text-purple-800 
              hover:font-semibold hover:border-b border-gray-400
               duration-500 ease-in-out"
              >
                Skills
              </li>
            </Link>
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase hover:text-purple-800 
              hover:font-semibold hover:border-b border-gray-400
               duration-500 ease-in-out"
              >
                Projetos
              </li>
            </Link>
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase hover:text-purple-800 
              hover:font-semibold hover:border-b border-gray-400
               duration-500 ease-in-out"
              >
                Contatos
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNavbar}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          !navBar
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            !navBar
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] " +
                "md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 " + " p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={logo}
                width={75}
                height={50}
                alt="Rafa.tsx logo"
              ></Image>
              <div
                onClick={handleNavbar}
                className="rounded-full shadow-sm hover:shadow-lg shadow-gray-400
                p-2 cursor-pointer hover:text-purple-800 hover:scale-110 
                ease-in-out duration-500"
              >
                <AiOutlineClose
                  size={20}
                  className="hover:scale-110 ease-in-out duration-500"
                />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4 ">Coding your dream!</p>
            </div>
          </div>
          <div className="py-4 flex flex-col ">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">
                  <p
                    className="hover:font-semibold hover:text-purple-800 
                  duration-500 ease-in-out"
                  >
                    Home
                  </p>
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">
                  <p
                    className="hover:font-semibold hover:text-purple-800 
                  duration-500 ease-in-out"
                  >
                    Sobre
                  </p>
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">
                  <p
                    className="hover:font-semibold hover:text-purple-800 
                  duration-500 ease-in-out"
                  >
                    Skills
                  </p>
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">
                  <p
                    className="hover:font-semibold hover:text-purple-800 
                  duration-500 ease-in-out"
                  >
                    Projetos
                  </p>
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">
                  <p
                    className="hover:font-semibold hover:text-purple-800 
                  duration-500 ease-in-out"
                  >
                    Contatos
                  </p>
                </li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Me chame pra uma conversa!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <IconList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
