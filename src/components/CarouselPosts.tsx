import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomRightArrow from "@/components/CustomRightArrow";
import CustomLeftArrow from "@/components/CustomLeftArrow";
import {getNonFeaturedPosts, Post} from "@/service/posts";
import PostCard from "@/components/PostCard";
import MultiCarousel from "@/components/MultiCarousel";

/* tailwind.css
*  - text-2xl : font-size: 1.5rem (1rem이 16px이라고 치면 24px, line-height:32px)
* */
async function CarouselPosts() {

    const posts = await getNonFeaturedPosts();

    return (
        <section className='my-4'>
            <h2 className='text-2xl font-bold my-2'>You May Like</h2>
            <MultiCarousel>
                {posts.map(post => <PostCard key={post.path} post={post}/>)}
            </MultiCarousel>
        </section>
    );
}

export default CarouselPosts;