import Container from '@/components/Container';
import { getCategories } from '@/sanity/queries';
import React from 'react';

const CategoryPage = async ({ params }: { params: { slug: string; } }) => {
  const { slug } = params;

  // All categories fetch
  const categories = await getCategories();

  // Find the matching category by slug
  const category = categories.find(
    (cat: any) => cat?.slug?.current === slug
  );

  return (
    <div className="py-10">
      <Container>
        <h1>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize">
            {category?.title || slug}
          </span>
        </h1>
      </Container>
    </div>
  );
};

export default CategoryPage;
