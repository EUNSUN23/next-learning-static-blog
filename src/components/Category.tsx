import React from 'react';
import CategoryItem from "@/components/CategoryItem";

type Props = {
    categories: string[],
    activeCategory: string,
    onClickCategory: (name:string) => void
}

function Category({categories, activeCategory, onClickCategory}: Props) {
    return (
        <section className='text-center p-4'>
            <h3 className='text-lg font-bold border-b border-sky-500 mb-2'>Category</h3>
            <ul>
                {categories.map((category) =>
                    <CategoryItem
                        key={category}
                        name={category}
                        active={activeCategory === category}
                        onClickCategory={onClickCategory} />
                )}
            </ul>
        </section>
    );
}

export default Category;