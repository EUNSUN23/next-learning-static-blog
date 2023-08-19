'use client'; // 스크롤링 등 브라우저 api사용하는 외부 라이브러리이므로 클라이언트 컴포넌트로 만들어준다.
import React from 'react';
import CustomLeftArrow from "@/components/CustomLeftArrow";
import CustomRightArrow from "@/components/CustomRightArrow";
import {Post} from "@/service/posts";
import PostCard from "@/components/PostCard";
import Carousel from "react-multi-carousel";

type Props = {
    children: React.ReactNode
}

function MultiCarousel({children}: Props) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 4 // FeaturedPosts의 최대 카드갯수에 맞춤
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        }
    };

    return (
        <Carousel
            infinite
            autoPlay
            responsive={responsive}
            itemClass='m-2'
        >
            {children}
        </Carousel>
    );
}

export default MultiCarousel;