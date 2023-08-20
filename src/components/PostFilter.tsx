'use client';
import React, {MouseEventHandler, useState} from 'react';

type PostFilterProps = {
    onClickHandler: Function,
    innerText: string,
    id: string,
    active: boolean
}

function PostFilter({onClickHandler, innerText, id}: PostFilterProps) {
    const [active, setActive] = useState(false);

    function onFilterClick(id: string) {
        setActive(active => !active);
        onClickHandler(id);
    }

    return (
        <li id={id}
            onClick={() => onFilterClick(id)}
            className={active ? 'text-sky-500' : 'text-stone-black'}
        >
            {innerText}
        </li>
    );
}

export default PostFilter;