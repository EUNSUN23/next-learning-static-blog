import React from 'react';
import {Post} from "@/service/posts";
import PostCard from "@/components/PostCard";

type Props = {
    posts:Post[]
}

/* tailwind.css
*  - grid-gap : 그리드 아이템 간 간격 4px
*  - grid-cols-1 : grid=template-columns: repeat(1, minmax(0, 1fr));
*  - sm/md/lg:grid-cols-[n] : 화면 사이즈 ~이상에서의 그리드 칼럼 개수
*
* */
function PostsGrid({posts}:Props) {
    return (
        <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> {/* small사이즈 이상: Grid column 2개, md사이즈 : 3개, lg사이즈 이상: 4개 */}
            {posts.map(post => <li key={post.path}><PostCard post={post}/></li>)}
        </ul>
    );
}

export default PostsGrid;