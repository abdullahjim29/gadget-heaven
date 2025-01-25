import bannerImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="bg-[#9538E2] container mx-auto py-8 pb-34 text-center space-y-6 rounded-b-2xl ">
      <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl w-full md:w-11/12 lg:w-6/12 mx-auto">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-white w-full md:w-7/12 mx-auto px-3 md:px-0">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="text-[#9538E2] bg-white px-5 py-6 rounded-full btn font-bold">
        Shop Now
      </button>
      <div className="md:w-3/6 absolute border-2 border-white rounded-2xl backdrop-blur-2xl p-4 md:-bottom-80 md:left-40 lg:-bottom-40 lg:left-80">
        <img className="rounded-2xl w-full md:h-[270px] lg:h-[350px]" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
