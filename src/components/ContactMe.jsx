import { CONTACT } from "../constants";

const ContactME = () => {
    return (
        <div className="border-b border-b-neutral-900 pb-20">
            <h2 className="my-10 text-center text-4xl">Contact 
                <span className="text-neutral-500 font-thin"> Me</span>
            </h2>

            <div className="text-center tracking-tighter">
                <a target="_blank" href="https://mail.google.com" className="border-b">
                    {CONTACT.email}
                </a>
            </div>
                
        </div>
    )
}

export default ContactME;
