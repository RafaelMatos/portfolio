import html from "devicon/icons/html5/html5-original.svg";
import css from "devicon/icons/css3/css3-original.svg";
import materialui from "devicon/icons/materialui/materialui-original.svg";
import typescript from "devicon/icons/typescript/typescript-original.svg";
import react from "devicon/icons/react/react-original.svg";
import next from "devicon/icons/nextjs/nextjs-original.svg";
import tailwind from "devicon/icons/tailwindcss/tailwindcss-plain.svg";
import angular from "devicon/icons/angularjs/angularjs-original.svg";
import node from "devicon/icons/nodejs/nodejs-original.svg";
import oracle from "devicon/icons/oracle/oracle-original.svg";
import express from "devicon/icons/express/express-original.svg";
import Image from "next/image";
import { SkillCard } from "./SkillCard";

export function Skills() {
  const prisma = 'https://img.icons8.com/?size=512&id=aqb9SdV9P8oC&format=png'
  const axios = 'https://icon.icepanel.io/Technology/svg/Azios.svg'
  return (
    <div className="w-full p-2 mt-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full gap-y-4">
        <p className="uppercase text-2xl tracking-widest text-purple-700">
          Skills
        </p>
        <h2 className="py-4 ml-2">O que posso fazer</h2>
        <div className=" mx-4">
          <p className="uppercase  text-lg tracking-widest text-purple-700">
            Front
          </p>
          <div className="py-2 text-gray-600 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SkillCard iconUrl={html} skillName="HTML" />
            <SkillCard iconUrl={css} skillName="CSS" />
            <SkillCard iconUrl={typescript} skillName="Typescript" />
            <SkillCard iconUrl={react} skillName="React" />
            <SkillCard iconUrl={next} skillName="Next.js" />
            <SkillCard iconUrl={tailwind} skillName="TailwindCSS" />
            <SkillCard iconUrl={materialui} skillName="MaterialUI" />
            <SkillCard iconUrl={angular} skillName="Angular.js" />
          </div>
        </div>
        <div className=" mx-2">
          <p className="uppercase  text-lg tracking-widest text-purple-700">
            Back
          </p>
          <div className="py-2 text-gray-600 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SkillCard iconUrl={node} skillName="Node.js" />
            <SkillCard iconUrl={oracle} skillName="Oracle" />
            <SkillCard iconUrl={axios} skillName="Axios" />
            <SkillCard iconUrl={prisma} skillName="Prisma" />
          </div>
        </div>
      </div>
    </div>
  );
}
