import {getAllPosts, Post} from "@/service/posts";
import Category from "@/components/Category";
import FilterablePosts from "@/components/FilterablePosts";
import {Metadata} from "next";

export const metadata: Metadata = {
    title:"All Posts",
    description:"프론트엔드 기술 관련 블로그 글"
}
async function PostsPage() {
    const posts = await getAllPosts();
    const categories = Array.from(new Set(posts.map(post => post.category)));
    return (
        <>
            <FilterablePosts categories={categories} posts={posts}/>
        </>
    );
}

export default PostsPage;