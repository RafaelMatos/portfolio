import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageUrl: string | StaticImageData;
  projectUrl: string;
  projectName: string;
  techName: string;
}

export function ProjectCard({ imageUrl, projectName,techName,projectUrl }: ProjectCardProps) {
  return (
    <div
      className=" group relative flex items-center justify-center h-auto w-full
           shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r 
           from-[#5651e5] to-[#709dff]"
    >
      <Image
        src={imageUrl}
        className=" rounded-xl group-hover:opacity-10"
        alt={`${projectName} screen`}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-white tracking-widest text-center">
          {projectName}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{techName}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-500">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}
