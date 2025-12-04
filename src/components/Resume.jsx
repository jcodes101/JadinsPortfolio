import JadinResumePt8 from '../assets/Jadins_Resume_Pt8.pdf';

const Resume = () => {

    return(
        <div className="border-b border-b-neutral-900 py-5 pb-4">

            <div className="my-20 flex justify-center">
                <h1 
                    className="inline-block rounded-full px-10 py-4 text-center text-3xl sm:text-4xl backdrop-blur-xl"
                    style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(30px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                >
                    My <span className="font-thin text-neutral-400">Resumé</span>
                </h1>
            </div>
            
            <div className="flex justify-center">
                <iframe
                    src={JadinResumePt8}
                    className="w-full max-w-4xl h-auto sm:h-[800px] lg:h-[1000px]"
                    allowFullScreen
                />
            </div>
        
        </div>
    )
}

export default Resume;