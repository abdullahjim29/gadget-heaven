import { useContext, useEffect, useState } from "react";
import { getStoredCart, removeFromCart } from "../utilitis";
import { RiSoundModuleLine } from "react-icons/ri";
import CartProductCard from "./CartProductCard";
import { costContext } from "../layout/MainLayout";
import payment from '/payment.png'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { totalCost, setTotalCost } = useContext(costContext);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const storedCartProducts = getStoredCart();
    setCartProducts(storedCartProducts);
  }, []);

  const handleRemove = (productId, price) => {
    removeFromCart(productId);
    const storedCartProducts = getStoredCart();
    setCartProducts(storedCartProducts);
    setTotalCost(totalCost - price);
  };

  const handleSort = () => {
    const storedCart = getStoredCart();
    const sorted = [...storedCart].sort((a, b) => b.price - a.price);
    setCartProducts(sorted);
  };
  return (
    <>
      <div className="flex flex-wrap md:flex-row w-9/12 mx-auto my-8 gap-5 items-center">
        <h3 className="flex-grow text-2xl font-bold">Cart</h3>
        <div className="text-xl font-bold">Total cost: {totalCost}</div>
        <div className="flex items-center gap-2 btn bg-white border-[#9538E2] border rounded-full text-[#9538E2] text-base font-bold hover:bg-[#9538E2] hover:text-white">
          <button onClick={handleSort}>Sort by Price</button>{" "}
          <RiSoundModuleLine />
        </div>
        <div className="btn cursor-pointer bg-[#9538E2] text-white rounded-full text-base">
          <button onClick={() => document.getElementById("my_modal_1").showModal()} className="btn bg-[#9538E2] border-none text-white">
            Purchase
          </button>
        </div>
      </div>
      <div className="w-9/12 mx-auto space-y-10">
        {cartProducts.length === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl">No Products In The Cart</h2>
          </div>
        ) : (
          cartProducts.map((product) => (
            <CartProductCard
              key={product.product_id}
              product={product}
              handleRemove={handleRemove}
            ></CartProductCard>
          ))
        )}
      </div>

      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center rounded-2xl">
          <div className="flex flex-col justify-center items-center mb-5"><img src={payment} alt="" /></div>
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <p className="py-4 text-[#09080F99] text-lg">
          Thanks for purchasing.
          </p>
          <p className="text-[#09080F99] text-lg">Total: {totalCost}</p>
          <div className="mt-5 rounded-full">
            <form className="" method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => navigate('/')} className="btn w-full rounded-full text-lg bg-gray-200">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Cart;
