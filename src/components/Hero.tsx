import React from 'react';
import Image from "next/image";
import profileImage from '../../public/images/profile.png';
import Link from "next/link";
// todo - public/images/ 이미지들 git add
function Hero() {
    return (
        <section className='text-center'>
            <Image
                className='rounded-full mx-auto'
                src={profileImage}
                alt='Pictures of the author'
                width={250}
                height={250}
                priority
            /> {/* priority: 가장 먼저 나타내도록 */}
            <h2 className='text-3xl font-bold mt2'>{"Hi, I'm Eunsun"}</h2>
            <h3 className='text-xl font-semibold'>{"FrontEnd Engineer"}</h3>
            <p>깊은 공부를 좋아하는 프로 독학러</p>
            <Link href='/contact'>
                <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact me</button>
            </Link>
        </section>
    );
}

export default Hero;