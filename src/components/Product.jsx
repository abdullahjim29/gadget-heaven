import { Link } from "react-router-dom";

const Product = ({product}) => {
  const {product_image, product_title, price, product_id} = product;
  return (
    <div className="card bg-white rounded-2xl shadow-sm p-4">
      <figure className="p-6 bg-base-200 rounded-2xl">
        <img
          src={product_image}
          alt={product_title}
          className="w-4/6"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="text-gray-600 text-xl">
          Price: {price}
        </p>
        <div className="card-actions">
          <Link to= {`/products/${product_id}`}>
          <button className="btn border border-[#9538E2] rounded-full bg-white text-[#9538E2] font-semibold hover:bg-[#9538E2] hover:text-white px-5 mt-3">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
