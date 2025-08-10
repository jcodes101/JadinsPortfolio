// import b1 from "../assets/certs_badges/impl_bdg.jpg"
import { CERTS_BADGES } from "../constants"

const CertsAndBadges = () => {
    return (
        <div className="border-b border-b-neutral-900 py-5 pb-4">
            <h2 className="my-20 text-center text-4xl">Certifications <span className="font-thin text-neutral-500">& Badges</span></h2>

            <div>
                {CERTS_BADGES.map((c_b, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center gap-8">
                        <div className="flex justify-center w-full lg:w-1/4">
                            <img 
                                src={c_b.image}
                                alt={c_b.title} 
                                width={400} 
                                height={400} 
                                className="mb-20 rounded"
                            />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default CertsAndBadges