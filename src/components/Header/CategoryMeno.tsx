
import { ICategoryType } from '@/types';
import CategoryLink from './CategoryLink';
import { Suspense } from 'react';



const LoadCategory = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const selectedCategory: ICategoryType[] = data.data;
    const categories: ICategoryType[] = selectedCategory.filter(c => c.scrapable);
    return <CategoryLink categories={categories}></CategoryLink>
}
const CategoryMeno = () => {
    return (
        <>
            <Suspense fallback="Loading...">
                <LoadCategory></LoadCategory>
            </Suspense>
        </>
    );
};

export default CategoryMeno;