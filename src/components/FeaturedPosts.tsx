import React from 'react';
import PostsGrid from "@/components/PostsGrid";
import {getAllPosts} from "@/service/posts";

async function FeaturedPosts() {
    const posts = await getAllPosts();
    return (
        <section>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts}/>
        </section>
    );
}

export default FeaturedPosts;