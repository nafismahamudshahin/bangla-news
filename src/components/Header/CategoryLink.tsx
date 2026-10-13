"use client";
import { ICategoryType } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
interface CategorysProps {
    categories: ICategoryType[];
}
const CategoryLink = ({ categories }: CategorysProps) => {
    const path = usePathname();
    console.log(path)
    return (
        <div className="border-y border-base-200 bg-base-100">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none [&::-webkit-scrollbar]:hidden">
                    <Link
                        href='/'
                        className={`${path == `/` ? "bg-red-500 text-white" : ""} shrink-0 rounded-full px-4 py-2 text-sm font-medium text-base-content/70 transition-colors duration-200`}
                    >
                        হোম
                    </Link>

                    {categories.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/category/${c.slug}`}
                            className={`${path == `/category/${c.slug}` ? "bg-red-500 text-white" : ""} shrink-0 rounded-full px-4 py-2 text-sm font-medium text-base-content/70 transition-colors duration-200`}
                        >
                            {c.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default CategoryLink;