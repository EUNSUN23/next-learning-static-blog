import nodemailer from 'nodemailer';

export type EmailData = {
    from: string;
    subject: string;
    message: string;
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { // .env.local 파일(보안상 깃헙에 올라가지 않음)에 저장된 user, password(구글 계정에 설정한 App password) 입력
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
    }
});

export async function sendEmail({subject, from, message}: EmailData) {
    const mailData = {
        to: process.env.AUTH_PASS,
        subject: `[BLOG] ${subject}`,
        from,
        html: `
            <h1>${subject}</h1>
            <div>${message}</div>
            <br/>
            <p>보낸사람: ${from}</p>
            `
    };

    return transporter.sendMail(mailData);
}