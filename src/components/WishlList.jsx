import { useEffect, useState } from "react";
import { getStoredWishList, removeFromCart, removeFromWishList } from "../utilitis";
import WishListProductCard from "./WishListProductCard";

const WishlList = () => {
    const [wishListProducts, setWishListProducts] = useState([]);
  useEffect(() => {
    const storedCartProducts = getStoredWishList()
    setWishListProducts(storedCartProducts);
  }, []);

  const handleRemove = (productId) => {
    removeFromWishList(productId);
    const storedWishListProducts = getStoredWishList()
    setWishListProducts(storedWishListProducts);
  }; 
  return (
    <div>
      <div className="w-9/12 mx-auto my-8">
        <h3 className="flex-grow text-2xl font-bold">WishList</h3>
      </div>

      <div className="w-9/12 mx-auto space-y-10">
        {wishListProducts.map((product) => (
          <WishListProductCard
            key={product.product_id}
            product={product}
            handleRemove={handleRemove}
          ></WishListProductCard>
        ))}
      </div>
    </div>
  );
};

export default WishlList;
