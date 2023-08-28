import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import ContactForm from "@/components/ContactForm";
import {Metadata} from "next";

const LINKS = [
    {icon: <AiFillGithub/>, url: ''},
    {icon: <AiFillLinkedin/>, url: ''},
    {icon: <AiFillYoutube/>, url: ''},

]

export const metadata: Metadata = {
    title: "Eunsun's blog | Contact",
    description: "Contact 페이지"
}

function ContactPage() {
    return (
        <section className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
            <p>info@eskim.com</p>
            <ul className='flex gap-4 my-2'> {/*웹앱 바깥의 다른 url 이동할때에는 a태그 */}
                {LINKS.map((link, index) =>
                    <a key={index}
                       href={link.url}
                       target='_blank'
                       rel='noreferrer'
                       className='text-5xl hover:text-yellow-400'
                    >{link.icon}</a>)}
            </ul>
            <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
            <ContactForm/>
        </section>
    );
}

export default ContactPage;