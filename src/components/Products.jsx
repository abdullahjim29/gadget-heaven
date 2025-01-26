import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const productsData = useLoaderData();
  const { category } = useParams();

  const filteredCategory = [...productsData].filter(
    (product) => product.category === category
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        filteredCategory.length === 0 ? <div className="col-span-3">
        <h2 className="text-4xl text-red-600 text-center">NO DATA FOUND FOR THIS CATEGORY </h2>
      </div> : filteredCategory.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))
      }
    </div>
  );
};

export default Products;
