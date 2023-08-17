import React from 'react';
import {Post} from "@/service/posts";

type Props = {
    posts:Post[]
}
function PostsGrid({posts}:Props) {
    return (
        <ul>
            {posts.map(post => <li key={post.path}>{post.title}</li>)}
        </ul>
    );
}

export default PostsGrid;