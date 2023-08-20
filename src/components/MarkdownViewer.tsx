import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// prose : tailwind.css를 사용하면 기본 css는 모두 reset되는데, @tailwindcss/typhograpy플러그인을 설치하고
// prose키워드를 사용하면 기본 css가 적용되게 할 수 있다.
function MarkdownViewer({content}:{content:string}) {
    return (
        <ReactMarkdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    );
}

export default MarkdownViewer;