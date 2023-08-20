import React from 'react';
import {getPostData} from "@/service/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownViewer from "@/components/MarkdownViewer";

type Props = {
    params:{
        slug:string;
    }
}

async function PostPage({params}:Props) {
    const post = await getPostData(params.slug);

    if(!post) return null;
    return (
        <>
            <h1>{post.title}</h1>
            <MarkdownViewer content={post.content}/>
        </>
    );
}

export default PostPage;