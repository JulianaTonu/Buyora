import Brands from "@/components/Brands";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategory from "@/components/HomeCategory";
import ProductGrid from "@/components/ProductGrid";
import { getCategories } from "@/sanity/queries";

const Home =async () => {
  const category =await getCategories(6)
  
    console.log("category",category)
  
  return <Container className="">
    <HomeBanner/>
    <div className="py-10">
    <ProductGrid/>
    </div>
    <HomeCategory categories ={category}/>
    <Brands/>
  </Container>
}

export default Home;