import React from 'react';
import {Post} from "@/service/posts";
import Link from "next/link";
import Image from "next/image";

type Props = {
    post:Post
}

/*
* tailwind.css
*  - rounded-md : 모서리 중간정도로 둥글게 처리
*  - shadow-lg : 큰 범위 그림자
*  - w-full : width:100%;
*  - items-center : align-items:center
*  - p-4 : padding:4px;
*  - px-2 : (양옆) padding:2px;
*  - my-2 : (위아래) margin: 2px;
*  - self-end : align-self: flex-end;
*  - truncate :
*    	overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
   - hover:shadow-xl : 마우스 hover시 box-shadow:xl사이즈
*
* */
function PostCard({post: {title, description, date, category, path}}:Props) {
    return (
        <Link href={`/posts/${path}`}>
            <article className='rounded-md overflow-hidden shadow-md hover:shadow-xl'>
                <Image
                    className='w-full'
                    src={`/images/posts/${path}.png`}
                    alt={title}
                    width={300}
                    height={200}
                />
                <div className='flex flex-col items-center p-4'>
                    <time className='self-end text-gray-700'>{date.toString()}</time>
                    <h3 className='text-lg font-bold'>{title}</h3>
                    <p className='w-full truncate text-center'>{description}</p>
                    <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>{category}</span>
                </div>
            </article>
        </Link>
    );
}

export default PostCard;