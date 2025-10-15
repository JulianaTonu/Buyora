import { Product } from "@/sanity.types";



interface Props {
  product: Product;
  className?: string;
}
const QuantityButtons({product,className}:Props)=>{
    const {addItem,remove,getItemCount}=useStore
    const itemCount=getItemCount(product?._id);
    const isOutOfStock = product?.stock === 0;

    return <div>QuantityButtons</div>
}

export default QuantityButtons;