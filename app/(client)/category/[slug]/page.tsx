import CategoryProducts from '@/components/CategoryProducts';
import Container from '@/components/Container';
import { getCategories } from '@/sanity/queries';
import React from 'react';

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } =await params;
    const categories = await getCategories();


    return (
        <div className="p-10">
            <Container>
                <h1 className='text-2xl mb-6 font-semibold'>
                    Products by Category:{" "}
                    <span className="font-bold text-lightColor capitalize">
                        {slug && slug}
                    </span>
                </h1>
                <CategoryProducts categories= {categories}/>
            </Container>
        </div>
    );
};

export default CategoryPage;
