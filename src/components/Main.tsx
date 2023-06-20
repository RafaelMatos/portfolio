import { FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";
import {AiOutlineMail } from "react-icons/ai";

export function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Vamos construir algo juntos!
          </p>
          <h1 className="py-4 text-gray-700">
            Oi, sou o <span className="text-purple-500">Rafael</span>!
          </h1>
          <h2 className="py-4 text-gray-700">Um Desenvolvedor Front-End</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Sou desenvolvedor web e estou me especializando em desenvolvimento
            Front-end, mas também já passei pelo back-end. Atualmente estou
            focado em aprimorar minhas skills utilizando a stack do{" "}
            <span className="text-blue-500 font-bold">React</span>
            ,com o framework{" "}
            <span className="text-gray-900 font-bold">Next.js</span> e
            estilização com o{" "}
            <span className="text-blue-400 font-bold">TailwindCSS</span>, além
            de outras ferramentas para criação de aplicações sofisticadas e
            responsivas.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer hover:text-purple-800 
                 hover:scale-105 ease-in duration-500 ">
              <FaLinkedin size={25}/>
            </div>
            <div className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer hover:text-purple-800 
                 hover:scale-105 ease-in duration-500 ">
              <FaGithub size={25}/>
            </div>
            <div className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer hover:text-purple-800 
                 hover:scale-105 ease-in duration-500 ">
              <FaInstagram size={25}/>
            </div>
            <div className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer hover:text-purple-800 
                 hover:scale-105 ease-in duration-500 ">
              <AiOutlineMail size={25}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
