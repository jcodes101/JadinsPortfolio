import { EXPERIENCES } from "../constants"

const Experience = () => {
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
                    Experience
                </h2>
            </div>
        
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
                                {experience.role} - <span className="text-sm text-stone-400">{experience.company}</span>
                            </h6>

                            <p className="mb-4 font-thin">{experience.description}</p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((tech, index) => (
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

export default Experience;