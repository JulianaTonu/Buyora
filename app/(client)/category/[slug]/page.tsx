import CategoryProducts from '@/components/CategoryProducts';
import Container from '@/components/Container';
import { getCategories } from '@/sanity/queries';
import React from 'react';

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const categories = await getCategories();


    return (
        <div className="py-10">
            <Container>
                <h1>
                    Products by Category:{" "}
                    <span className="font-bold text-green-600 capitalize">
                        {slug && slug}
                    </span>
                </h1>
                <CategoryProducts categories= {categories}/>
            </Container>
        </div>
    );
};

export default CategoryPage;
