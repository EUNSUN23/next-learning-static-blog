'use client';
import React from 'react';

type Props = {
    name:string,
    onClickCategory:(name:string) => void;
    active: boolean
}
function CategoryItem({name, active, onClickCategory}:Props) {
    const color = active ? 'text-sky-600' : 'text-stone-800';
    return (
        <li className={`${color} cursor-pointer hover:text-sky-500`}
            onClick={() => onClickCategory(name)}
        >
            {name}
        </li>
    );
}

export default CategoryItem;