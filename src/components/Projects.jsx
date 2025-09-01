import {PROJECTS} from "../constants";

const Projects = () => {
    return (

        <div className="border-b border-neutral-900 pb-4">

            <h2 className="my-20 text-center text-4xl">
                Projects
            </h2>

            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center gap-8">
                        <div className="w-full lg:w-1/4">
                            <img 
                                src={project.image} 
                                width={400} 
                                height={400} 
                                alt={project.title}
                                className="mb-20 rounded"
                            />
                        </div>

                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-2 text-neutral-400 font-thin">{project.description}</p>
                            <a className="underline" target="_blank" href={project.link}>{project.linkTitle}</a>
                            <div className="flex flex-wrap">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects;