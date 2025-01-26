import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const productsData = useLoaderData();
  const { category } = useParams();

  const filteredCategory = [...productsData].filter(product => product.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredCategory.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
