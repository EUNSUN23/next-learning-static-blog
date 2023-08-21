import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";

// prose : tailwind.css를 사용하면 기본 css는 모두 reset되는데, @tailwindcss/typhograpy플러그인을 설치하고
// prose키워드를 사용하면 기본 css가 적용되게 할 수 있다.
/* react-markdown
*  - components : 마크다운 태그에 대한 상세 설정 할수있는 속성
*
* */
function MarkdownViewer({content}:{content:string}) {
    return (
        <ReactMarkdown
            className='prose lg:prose-xl'
            remarkPlugins={[remarkGfm]}
            components={{
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            style={materialDark}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...props} className={className}>
                            {children}
                        </code>
                    )
                }
            }}

        >{content}</ReactMarkdown>
    );
}

export default MarkdownViewer;