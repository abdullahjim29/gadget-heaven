import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { saveCartToLs, saveWishListToLs } from "../utilitis";
import { createContext } from "react";
const totalCostContext = createContext();
const ProductDetailsCard = ({ selectedProduct }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = selectedProduct;

  const handleAddToCart = product => {
    saveCartToLs(product)
  }

  const handleWishList = product => {
    saveWishListToLs(product)
  }
  return (
    <div className="flex flex-col lg:flex-row gap-10 bg-base-100 justify-center p-10 my-10 md:w-10/12 lg:w-8/12 mx-auto rounded-2xl absolute inset-x-0 top-56">
      <div className="bg-gray-200 p-10 w-full lg:w-3/6 rounded-2xl flex justify-center items-center">
        <img className="w-full" src={product_image} alt="" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl md:text-3xl font-bold">{product_title}</h2>
        <p className="text-[#09080FCC] text-xl">Price: ${price}</p>
        {availability ? (
          <div className="rounded-full ">
            <button className="rounded-full text-[#309C08] border px-6 border-[#309C08] btn">
              In Stock
            </button>
          </div>
        ) : (
          <div className="rounded-full">
            <button className="rounded-full text-red-500 border px-6 border-red-600 btn">
              Out Of Stock
            </button>
          </div>
        )}
        <p className="text-[#09080F99] text-base">{description}</p>
        <ol className="list-decimal">
          <span className="font-bold">Specification:</span>
          {specification.map((spce, idx) => (
            <li className="ml-4 text-[#09080F99] font-normal" key={idx}>
              {spce}
            </li>
          ))}
        </ol>
        <p className="font-bold text-base">Rating:</p>
        <p>
          <div className="flex gap-3 items-center">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            <p className="text-black bg-base-200 px-3 rounded-3xl font-bold">{rating}</p>
          </div>
        </p>
        <button onClick={() => handleAddToCart(selectedProduct)} className="btn bg-[#9538E2] hover:bg-[#683a8d] rounded-full text-white">
          Add To Card <HiOutlineShoppingCart size={20} />
        </button>
        <button onClick={() => handleWishList(selectedProduct)} className="bg-white border border-gray-500 p-2 rounded-full ml-2 cursor-pointer">
          <AiOutlineHeart size={25} />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
