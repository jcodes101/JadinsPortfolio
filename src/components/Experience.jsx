import { EXPERIENCES } from "../constants"

const Experience = () => {
    return (

        <div className="border-b border-neutral-900 pb-4">
            
            <h2 className="my-20 text-center text-4xl">Experience</h2>
        
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div 
                        key={index} 
                        className="mb-8 flex flex-wrap lg:justify-center">

                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>

                        <div className="w-full max-w-xl lg:2-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - <span className="text-sm text-blue-200">{experience.company}</span>
                            </h6>

                            <p className="mb-4 font-thin">{experience.description}</p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-slate-400">
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

export default Experience;