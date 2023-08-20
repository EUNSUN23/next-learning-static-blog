import {getAllPosts, Post} from "@/service/posts";
import Category from "@/components/Category";
import FilterablePosts from "@/components/FilterablePosts";

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