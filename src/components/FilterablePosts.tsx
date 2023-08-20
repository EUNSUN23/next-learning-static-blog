'use client';
import React, {useState} from 'react';
import {Post} from "@/service/posts";
import Category from "@/components/Category";
import PostsGrid from "@/components/PostsGrid";

type Props = {
    posts: Post[],
    categories:string[]
}
function FilterablePosts({posts, categories}:Props) {
    const [category, setCategory] = useState("ALL_POSTS");
    const filteredPosts = category === "ALL_POSTS" ? posts : posts.filter(post=> post.category === category);

    function onClickCategoryHandler(name:string){
        setCategory(name);
    }

    return (
        <section className='flex m-4'>
            <PostsGrid posts={filteredPosts}/>
            <Category categories={['ALL_POSTS',...categories]} activeCategory={category} onClickCategory={onClickCategoryHandler}/>
        </section>
    );
}

export default FilterablePosts;