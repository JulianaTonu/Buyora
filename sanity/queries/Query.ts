import { defineQuery } from "next-sanity"

const BRAND_QUERY = defineQuery(`*[_type =='brand'] | order(title asc)`);

export {BRAND_QUERY};