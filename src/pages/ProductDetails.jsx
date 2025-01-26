import { useLoaderData, useParams } from "react-router-dom";
import ReusableTitle from "../components/ReusableTitle";
import ProductDetailsCard from "../components/ProductDetailsCard";

const ProductDetails = () => {
    const {productId} = useParams();
    const products = useLoaderData();

    const selectedProduct = products.find(product => product.product_id === parseInt(productId));

    return (
        <div className="mb-[750px] md:mb-[900px] lg:mb-[450px]">
            <ReusableTitle title='Product Details' description='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'/>
            <ProductDetailsCard selectedProduct={selectedProduct}/>
        </div>
    );
};

export default ProductDetails;



