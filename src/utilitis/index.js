import toast from "react-hot-toast";
const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    else{
        return [];
    }
}


const saveCartToLs = product => {
    const storedCart = getStoredCart();
    
    const isExist = storedCart.find(p => p.product_id === product.product_id);
    if(isExist){
        toast.error('This Product is Already Added To The Cart.');
    }
    else{
        storedCart.push(product);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart', storedCartStr);
        toast.success('The Product is Successfully Added To The Cart.')
    }
}



const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wishlist');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    else{
        return [];
    }
}


const saveWishListToLs = product => {
    const storedWishList = getStoredWishList();
    const isExist = storedWishList.find(p => p.product_id === product.product_id);
    if(isExist){
        toast.error('This Product is Already Added To The Wishlist.');
    }
    else{
        storedWishList.push(product);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wishlist', storedWishListStr);
        toast.success('The Product is Successfully Added To The Wishlist.')
    }
}
export {saveCartToLs, saveWishListToLs, getStoredCart, getStoredWishList}