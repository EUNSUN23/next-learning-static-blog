import React from 'react';
import PostsGrid from "@/components/PostsGrid";
import {getFeaturedPosts} from "@/service/posts";
import CarouselPosts from "@/components/CarouselPosts";

async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section className='my-2'>
            <h2 className='text-2xl font-bold my-4'>Featured Posts</h2>
            <PostsGrid posts={posts}/>

        </section>
    );
}

export default FeaturedPosts;