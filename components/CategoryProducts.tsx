"use client"

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Category } from '@/sanity.types';
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import LoadingDots from './LoadingDots';
import NoProductAvailable from './NoProductAvailable';
import ProductCard from './ProductCard';

interface Props {
  slug: string;
  categories: Category[];
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    setCurrentSlug(newSlug);
    router.push(`/category/${newSlug}`);
  };

  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `
        *[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc) {
          ...,
          "categories": categories[]->title
        }
      `;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data); // ✅ save to state
      console.log("fetchData", data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]); // ✅ trigger on slug change

  return (
    <div className="flex items-start">
      {/* Categories List */}
      <div className="flex flex-col md:min-w-40 border">
        {categories.map((item) => (
          <Button
            key={item._id}
            onClick={() => handleCategoryChange(item.slug as string)} // ✅ slug is string
            className={`bg-transparent order-0 p-0 border-lightColor/20 rounded-none text-black shadow-none hover:bg-lightColor hover:text-white border-b last:border-b-0 capitalize hoverEffect ${
              item.slug === currentSlug ? "bg-lightColor text-white" : ""
            }`}
          >
            <p className="w-full text-left px-2">{item.title}</p>
          </Button>
        ))}
      </div>

      {/* Products List */}
      <div className="flex-1 p-4">
        {loading ? (
         <div className='flex flex-col items-center justify-center py-10 min-h-80 bg-gray-100 w-full mt-10'>
                   <LoadingDots/>   
                    <span>Product is Loading...</span>
                </div>
        ) : products?.length > 0 ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10'>
                    {products.map((product)=>(
                        <div key={product?._id}>
                           <div>
                           <ProductCard product={product}/>
                           </div>
                        </div>
                    ))}
                    
                    </div>
        ) : (
          <NoProductAvailable selectedTab ={currentSlug}
          className="mt-0 w-full"/>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
