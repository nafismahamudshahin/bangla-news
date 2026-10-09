import { ICategoryType } from '@/types';
import Link from 'next/link';
import React from 'react';
interface CategorysProps {
    categories: ICategoryType[];
}
const CategoryLink = ({ categories }: CategorysProps) => {
    return (
        <div className="border-y border-base-200 bg-base-100">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none [&::-webkit-scrollbar]:hidden">
                    <Link
                        href="/"
                        className="shrink-0 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                    >
                        হোম
                    </Link>

                    {categories.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/category/${c.slug}`}
                            className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-base-content/70 transition-colors duration-200 hover:bg-base-200 hover:text-base-content"
                        >
                            {c.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryLink;