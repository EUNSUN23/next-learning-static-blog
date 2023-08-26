import * as yup from 'yup';

// request body의 이메일 데이터 형식 설정
const bodySchema = yup.object().shape({
    from: yup.string().email().required(), // yup에 정의된 string 타입이며, email타입이며, required(꼭 있어야 함)임.
    subject: yup.string().required(),
    message:yup.string().required()
});

export async function POST(request:Request){
    // yup에 정의한 데이터 형식에 부합한지 검사
    if (!bodySchema.isValidSync(request.body)) {
        return new Response('유효하지 않은 포맷',{status:400});
    }

    const {from, subject, message} = request.body;

    // 노드 메일러 이용해서 메일 전송


    return new Response("Hello, Next.js");
}

