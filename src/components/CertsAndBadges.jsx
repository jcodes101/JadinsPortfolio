// import b1 from "../assets/certs_badges/impl_bdg.jpg"
import { CERTS_BADGES } from "../constants"

const CertsAndBadges = () => {
    return (
        <div className="border-b border-b-neutral-900 py-5 pb-4">
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
                    Certifications <span className="font-thin text-neutral-400">& Badges</span>
                </h2>
            </div>

            {/* 

                Actually lets start from the top... What even is a flexbox????
                - Flexbox is a CSS module that provides a one-dimensional layout model 
                for aligning and distributing space among items in a container

                You know what? What is (justify-content) and (align-items)?
                    - (justify-content) aligns items along the main axis, horizontally
                    and (align-items) is what aligns items along the cross axis, vertically

                justify-content: controls HORIZONTAL alignment
                align-items: controls VERTICAL alignment
                
                can change... md:justify-center to: md:justify-start, md:justify-end, md:justify-between, md:justify-around
                can change... md:items-center to: md:items-start, md:items-end, md:items-stretch
            */}
            <div 
                className="flex flex-col md:flex-row flex-wrap md:justify-around md:items-center gap-8"
                style={{ minHeight: '400px' }} // Added height to see vertical alignment effect
            >
                {CERTS_BADGES.map((c_b, index) => (
                    <div key={index} className="flex justify-center w-full md:w-1/2 lg:w-1/4">
                        <img 
                            src={c_b.image}
                            alt={c_b.title} 
                            width={400} 
                            height={400} 
                            className="mb-20 rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CertsAndBadges