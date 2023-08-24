'use client';
import React, {ChangeEvent, FormEvent, useState} from 'react';

type Form = {
    from:string;
    subject: string;
    message: string;
}
function ContactForm() {
    const [form, setForm] = useState<Form>({from:'', subject:'', message:''});
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]:value}))
    }

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="from">Your Email</label>
                <input type="email" id="from" name="from" required autoFocus value={form.from} onChange ={onChange}/>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required autoFocus value={form.subject} onChange ={onChange}/>
                <label htmlFor="message">Message</label>
                <textarea rows={10} id="message" name="message" required autoFocus value={form.message} onChange ={onChange}/>
                <button>Submit</button>
            </form>
        </>
    );
}

export default ContactForm;