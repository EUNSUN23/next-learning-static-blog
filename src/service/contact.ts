import {EmailData} from "@/service/email";

// Todo - 비동기 통신(fetch, axios등.. header에 넣는 content-type 등이 뭔지.. 정리가 필요함.
export async function sendContactEmail(email:EmailData) {
    const response = await fetch('/api/contact',{
        method:'POST',
        body: JSON.stringify(email),
        headers:{
            'Content-Type':'application/json',
        },
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || '서버 요청에 실패함');
    }

    return data;
}