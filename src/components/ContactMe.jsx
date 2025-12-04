import { CONTACT } from "../constants";

const ContactME = () => {
    return (
        <div className="border-b border-b-neutral-900 pb-20">
            <div className="my-10 flex justify-center">
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
                    Contact <span className="text-neutral-400 font-thin">Me</span>
                </h2>
            </div>

            <div className="text-center tracking-tighter">
                <a target="_blank" href="https://mail.google.com" className="border-b">
                    {CONTACT.email}
                </a>
            </div>
                
        </div>
    )
}

export default ContactME;
