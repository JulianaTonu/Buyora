import Container from '@/components/Container';
import { getCategories } from '@/sanity/queries';
import React from 'react';

const CategoryPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {

    const categories = await getCategories();
    const { slug } = await params;
    return (
        <div className='py-10'>
            <Container>
                <h1>Products by Category:{categories.length}</h1>
                <span>
                    {slug}
                </span>
            </Container>
        </div>
    );
};

export default CategoryPage;