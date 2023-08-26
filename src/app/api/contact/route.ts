import * as yup from 'yup';
import {sendEmail} from "@/service/email";

// request body의 이메일 데이터 형식 설정
const bodySchema = yup.object().shape({
    from: yup.string().email().required(), // yup에 정의된 string 타입이며, email타입이며, required(꼭 있어야 함)임.
    subject: yup.string().required(),
    message: yup.string().required()
});

export async function POST(request: Request) {
    const body = await request.json();
    // yup에 정의한 데이터 형식에 부합한지 검사
    if (!bodySchema.isValidSync(body)) {
        return new Response(JSON.stringify({message: "메일 전송에 실패했습니다."}), {
            status: 400
        });
    }

    // 노드 메일러 이용해서 메일 전송
    return sendEmail(body)
        .then(
            () =>
                new Response(JSON.stringify({message: "메일을 성공적으로 전송했습니다"}), {
                    status: 200
                })
        ).catch(error => {
            console.error(error);
            return new Response(JSON.stringify({message: "메일 전송에 실패했습니다."}), {
                status: 500
            })
        });
}

