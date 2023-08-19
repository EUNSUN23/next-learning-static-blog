import React from 'react';
import PostsGrid from "@/components/PostsGrid";
import {getFeaturedPosts} from "@/service/posts";

async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section>
            <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
            <PostsGrid posts={posts}/>
        </section>
    );
}

export default FeaturedPosts;