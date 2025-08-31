import { defineQuery } from "next-sanity";
import LatestBlog from "../../components/LatestBlog";

const BRAND_QUERY = defineQuery(`*[_type == "brand"] | order(title asc)`);

const LATEST_BLOG_QUERY = defineQuery(`
  *[_type == "blog" && isLatest == true] | order(name asc) {
    ...,
    blogcategories[]->{
      title
    }
  }
`);

export { BRAND_QUERY, LATEST_BLOG_QUERY };
