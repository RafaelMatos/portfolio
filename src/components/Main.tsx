import { IconList } from "./IconList";

export function Main() {
  return (
    <div id="home" className="w-full h-screen lg:h-auto lg:mt-20 lg:my-20 text-center">
      <div className="max-w-[1240px] w-full h-full  mx-auto p-2 flex justify-center items-center ">
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
            Front-end, mas também já passei pelo Back-end. Atualmente estou
            focado em aprimorar minhas skills utilizando a stack do{" "}
            <span className="text-blue-500 font-bold">React</span>
            ,com o framework{" "}
            <span className="text-gray-900 font-bold">Next.js</span> e
            estilização com o{" "}
            <span className="text-[#38b2ac] font-bold">TailwindCSS</span>, além
            de outras ferramentas para criação de aplicações sofisticadas e
            responsivas.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <IconList/>
          </div>
        </div>
      </div>
    </div>
  );
}
