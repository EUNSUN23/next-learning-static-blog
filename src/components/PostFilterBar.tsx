'use client';
import React, {useState} from 'react';



function PostFilterBar() {
    
    return (
        <section>
            <h3 className='text-lg font-bold'>Category</h3>
            <ul>
                <li>All Posts</li>
                <li>my story</li>
                <li>frontend</li>
                <li>backend</li>
                <li>javascript</li>
            </ul>
        </section>
    );
}

export default PostFilterBar;