import JadinResume from "../assets/JadinHutchinsonResume2025Pt.2.pdf";

const Resume = () => {

    return(
        <div className="border-b border-b-neutral-900 py-5 pb-4">

            <h1 className="my-20 text-center text-4xl">My <span className="font-thin text-neutral-500">Resumé</span></h1>
            
            <div className="flex justify-center">
                <iframe
                    src={JadinResume}
                    className="w-full max-w-4xl h-auto sm:h-[800px] lg:h-[1000px]"
                    allowFullScreen
                />
            </div>
        
        </div>
    )
}

export default Resume;