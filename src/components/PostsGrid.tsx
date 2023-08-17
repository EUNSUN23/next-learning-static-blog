import React from 'react';
import {Post} from "@/service/posts";
import PostCard from "@/components/PostCard";

type Props = {
    posts:Post[]
}
function PostsGrid({posts}:Props) {
    return (
        <ul>
            {posts.map(post => <li key={post.path}><PostCard post={post}/></li>)}
        </ul>
    );
}

export default PostsGrid;