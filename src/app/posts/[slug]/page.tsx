import Image from 'next/image';
import React from 'react';
import {getFeaturedPosts, getPostData} from "@/service/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownViewer from "@/components/MarkdownViewer";
import {AiTwotoneCalendar} from "react-icons/ai";
import {Metadata} from "next";

type Props = {
    params:{
        slug:string;
    }
}

/* tailwind.css
*  h-1/5 max-h-[500px] : 기본 높이는 전체 브라우저 높이의 1/5이지만 높이가 500px을 넘어가면 더이상 증가하지 않는다.
* */

// 동적으로 metadata 생성
export async function generateMetadata({params: {slug}}: Props):Promise<Metadata>{
    const {title,description,date, path, content} = await getPostData(slug);
    return {
        title, description
    }
}

async function PostPage({params}:Props) {
    const {title,description,date, path, content} = await getPostData(params.slug);

    return (
        <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
            <Image
                className='w-full h-1/5 max-h-[500px]'
                src={`/images/posts/${path}.png`}
                alt={title}
                width={760}
                height={420}
            />
            <section className='flex flex-col p-4'>
                <div className='flex items-center self-end text-sky-600'>
                    <AiTwotoneCalendar/>
                    <p className='font-semibold ml-2'>{date.toString()}</p>
                </div>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='text-xl font-bold'>{description}</p>
                <div className='w-44 border-2 border-sky-600 mt-4 mb-8'></div>
                <MarkdownViewer
                    content={content}
                />
            </section>
        </article>
    );
}

// featured posts에 한해서 미리 페이지 생성
export async function generateStaticParams(){
    const posts = await getFeaturedPosts();
    return posts.map(post => {
        slug:post.path
    })
}

export default PostPage;