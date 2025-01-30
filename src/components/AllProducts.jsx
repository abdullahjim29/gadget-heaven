import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const AllProducts = () => {
    const productsData = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    productsData.map((p, idx) => <Product key={idx} product={p}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;