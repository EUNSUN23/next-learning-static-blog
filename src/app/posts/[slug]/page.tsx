import React from 'react';
import {getPost} from "@/service/posts";

type Props = {
    params:{
        slug:string;
    }
}

async function PostPage({params}:Props) {
    const post = await getPost(params.slug);

    if(!post) return null;
    return (
        <section>
            <p>{post.title}</p>

        </section>
    );
}

export default PostPage;