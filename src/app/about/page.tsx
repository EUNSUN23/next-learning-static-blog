import React from 'react';
import Hero from "@/components/Hero";
import {Metadata} from "next";

const TITLE_CLASS = 'bg-gray-100 shadow-lg p-8 m-8 text-gray-800 my-2';

export const metadata: Metadata = {
    title:"Eunsun's blog| About Eunsun",
    description: "Eunsun 프로파일 페이지",
}

function AboutPage() {
    return (
        <>
            <Hero/>
            <section className={TITLE_CLASS}>
                <h2>Who Am I?</h2>
                <p>
                    개발을 사랑하는 프론트엔드 개발자 <br/>
                    사람과 디자인을 담는 웹앱을 만들고 있음
                </p>
                <h2>Career</h2>
                <p>구글러(-Now)<br/>
                    메이스북(-2019)<br/>
                    삼준전자(-2015)
                </p>
                <h2 className={TITLE_CLASS}>Skills</h2>
                <p>React, Vue, Node<br/>
                </p>

            </section>
        </>
    );
}

export default AboutPage;