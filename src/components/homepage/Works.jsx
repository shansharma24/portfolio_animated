import Heading from "../ui/Heading";
import Project from "../ui/Project";

import { projects as projectsData } from "../../data/projects";

const Works = () => {
  return (
    <section id="projects" className="bg-accent-400 -mt-px pb-20 rounded-b-3xl">
      <Heading title="Projects" />
      <div className="mt-10 flex flex-col px-5 md:px-10 place-items-center lg:w-9/12 mx-auto md:grid gap-y-12 gap-x-12 grid-cols-12">
        {projectsData.map((project, index) => (
          <div
            key={project.name}
            className={index === 0 ? "col-span-12" : "col-span-12 md:col-span-6"}
          >
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
