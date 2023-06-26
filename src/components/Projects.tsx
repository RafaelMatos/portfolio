import coffeeDelivery from "../../public/assets/projects/coffeeDelivery.gif";
import dtmoney from "../../public/assets/projects/dtmoney.gif";
import igniteShop from "../../public/assets/projects/igniteShop.gif";
import timeLine from "../../public/assets/projects/timeline.gif";

import { ProjectCard } from "./ProjectCard";


export function Projects() {
  return (
    <div className="w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-2xl tracking-widest text-purple-700">
          Projetos
        </p>
        <h2 className="py-4 ml-2">O que já construi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard imageUrl={coffeeDelivery} projectName="Coffee Delivery" projectUrl="coffeeDelivery" techName="React JS"/>
          <ProjectCard imageUrl={dtmoney} projectName="Dt Money" projectUrl="dtMoney" techName="React JS"/>
          <ProjectCard imageUrl={igniteShop} projectName="Ignite Shop" projectUrl="/igniteShop" techName="Next JS"/>
          <ProjectCard imageUrl={timeLine} projectName="Timeline NLW" projectUrl="/timeLine" techName="Next JS"/>
        </div>
      </div>
    </div>
  );
}
