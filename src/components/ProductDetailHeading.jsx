const ProductDetailHeading = ({title, description}) => {
    return (
        <div className="bg-[#9538E2] text-center text-white pt-10 pb-40 space-y-3">
            <h2 className="text-xl md:text-3xl font-bold ">{title}</h2>
            <p className="w-9/12 md:w-6/12 mx-auto">{description}</p>
        </div>
    );
};

export default ProductDetailHeading;