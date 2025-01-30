import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDetailHeading from "../components/ProductDetailHeading";
import { useEffect } from "react";

const ProductDetails = () => {
    useEffect(() => {
        document.title = 'Product Details'
      })
    const {productId} = useParams();
    const products = useLoaderData();

    const selectedProduct = products.find(product => product.product_id === parseInt(productId));

    return (
        <div className="mb-[750px] md:mb-[900px] lg:mb-[450px]">
            <ProductDetailHeading title='Product Details' description='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'/>
            <ProductDetailsCard selectedProduct={selectedProduct}/>
        </div>
    );
};

export default ProductDetails;



