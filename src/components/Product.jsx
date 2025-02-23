import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_image, product_title, price, product_id } = product;
  return (
    <div className="card bg-white rounded-2xl shadow-sm p-4 transition hover:scale-105 overflow-hidden">
      <figure className="p-6 bg-gray-200 rounded-2xl h-[220px]">
        <img src={product_image} alt={product_title} className="w-4/6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="text-gray-600 text-xl">Price: {price}</p>
        <div className="card-actions">
          <Link to={`/product-details/${product_id}`}>
            <button className="btn border border-[#9538E2] rounded-full bg-white text-[#9538E2] font-semibold hover:bg-[#9538E2] hover:text-white px-5 mt-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
