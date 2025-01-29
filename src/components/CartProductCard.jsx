import { TbXboxX } from "react-icons/tb";
const CartProductCard = ({product, handleRemove}) => {
    const {product_image, product_title, description, price, product_id} = product;

    return (
        <div className="bg-base-100 p-5 flex flex-col md:flex-row rounded-2xl gap-10">
            <div className="bg-gray-200 p-5 rounded-2xl w-full md:w-[250px] h-auto lg:h-[150px] flex justify-center items-center">
                <img className="w-2/6" src={product_image} alt="" />
            </div>
            <div className="flex-grow">
                <h2 className="text-3xl font-bold">{product_title}</h2>
                <p className="text-gray-600 text-base">{description}</p>
                <p className="text-xl font-semibold">Price: ${price}</p>
            </div>
            <div onClick={() => handleRemove(product_id, price)} className="text-red-500 btn bg-white border-none"><TbXboxX  size={30}/></div>
        </div>
    );
};

export default CartProductCard;