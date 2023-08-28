import path from "path";
import {readFile} from "fs/promises";
import {cache} from "react";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
}

// Post 타입 + {content:string} 타입
export type PostData = Post & { content: string };

export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    const metadata = await getAllPosts()
        .then((posts:Post[]) => posts.find((post:Post) => post.path === fileName));
    if (!metadata)
        throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

    const content = await readFile(filePath, 'utf-8');
    return {...metadata, content};
}

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts()
        .then((posts:Post[]) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
    return getAllPosts()
        .then((posts:Post[]) => posts.filter((post) => !post.featured));
}

// [성능 관련 문제 체크]
// 위의 여러 서비스로직에서 getAllPosts를 호출하므로, 한 페이지에서 여러 다른 컴포넌트 렌더링을 위해 getAllPosts를 여러번 호출한다.
// 빌드시 호출되는거면 문제가 없지만 ssr시에는 성능 이슈가 될 수 있다.
// (+ fetch자체는 중복호출을 자동으로 next.js에서 막아준다 )

// Next.js에서 제공하는 cache 사용해서 성능 최적화하기
// cache(async func() {}) : 동일한 인자를 받는 호출에 대해서는 이전에 cache해둔 값을 반환한다.
//  * 단, 모든 getAllPosts호출에 대해서 같은 cache를 사용하는것이 아니라, 페이지별로 cache를 저장하고 사용한다.
// (ex)
//      cache사용 전 : page1 - getAllPosts 2회 호출 / page2 - getAllPosts 2회 호출 / page3 - getAllPosts 1회 호출
//      cache 사용 후 : page1 - getAllPosts 1회 호출 / page2 - getAllPosts 1회 호출 / page3 - getAllPosts 1회 호출
export const getAllPosts = cache(async ()=>{
    console.log("getAllPosts called"); // cache사용 전에는 5회, 사용 후에는 3회 출력된다.
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    return readFile(filePath, 'utf-8')
        .then<Post[]>(JSON.parse)
        .then((posts) => posts.sort((a, b) => a.date > b.date ? -1 : 1));
});
