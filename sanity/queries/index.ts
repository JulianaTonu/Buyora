import { sanityFetch } from "../lib/live";
import { BRAND_QUERY, DEAL_PRODUCTS, LATEST_BLOG_QUERY, PRODUCT_BY_SLUG_QUERY } from "./query";

const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == "category"] | order(name asc) [0...$quantity] {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)]),
          "slug": slug.current
        }`
      : `*[_type == "category"] | order(name asc) {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)]),
          "slug": slug.current
        }`;

    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });

    return data; // <- ensure array is returned
  } catch (error) {
    console.log("Error fetching categories", error);
    return [];
  }
};


const getAllBrands = async () => {
  try {
    const { data } = await sanityFetch({ query: BRAND_QUERY });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error)

  }
}

const getLatestBlogs = async () => {
  try {
    const { data } = await sanityFetch({ query: LATEST_BLOG_QUERY });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all latest blog ", error)
  }
}


const getDealProducts = async () => {
  try {
    const { data } = await sanityFetch({ query: DEAL_PRODUCTS });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching deal Products", error)
  }
}


const getProductBySlug =async (slug:string) =>{
  try {
    const product = await sanityFetch({
      query:PRODUCT_BY_SLUG_QUERY,
      params:{
        slug,
      },
    });
    return product?.data || null ;
  } catch (error) {
    console.error("Error fetching product by ID: ", error)
  }
}

export { getCategories, getAllBrands, getLatestBlogs, getDealProducts,getProductBySlug };