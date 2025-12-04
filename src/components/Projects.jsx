import {PROJECTS} from "../constants";

const Projects = () => {
    return (

        <div className="border-b border-neutral-900 pb-4">

            <div className="my-20 flex justify-center">
                <h2 
                    className="inline-block rounded-full px-10 py-4 text-center text-3xl sm:text-4xl backdrop-blur-xl"
                    style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(30px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                >
                    Projects
                </h2>
            </div>

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
                                    <span key={index} className="inline-block rounded-2xl px-4 py-2 mt-1 text-center text-xs backdrop-blur-xl"
                                    style={{
                                        background: 'rgba(0, 0, 0, 0.4)',
                                        backdropFilter: 'blur(30px) saturate(180%)',
                                        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                                    }}>
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