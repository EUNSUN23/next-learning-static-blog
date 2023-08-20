import React from 'react';
import {getPostData} from "@/service/posts";

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
            <pre>{post.content}</pre>
        </>
    );
}

export default PostPage;