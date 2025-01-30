import { useLoaderData } from "react-router-dom";
import shopImage from "/shopImage.png";
import { useEffect, useState } from "react";
const Review = () => {
    const reviewsData = useLoaderData();
    const [reviews, setReviews] = useState([]);
    // setReviews(reviewsData)
    useEffect(()=> {
        setReviews(reviewsData.slice(0,7))
    }, [reviewsData])
    useEffect(() => {
      document.title = 'Reviews'
    })
  return (
    <>
      <div className="p-10 mt-10">
        <div className="text-center space-y-4">
          <h1 className="font-stylish text-3xl md:text-5xl lg:text-7xl">
            Customer <span className="text-[#9538e2]">Words.</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-extralight tracking-[4px] ">
            Peoples are taking about our Shop take a look.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <div className="lg:col-span-2">
            <img
              className="rounded-2xl cover w-full md:h-[250px] lg:h-auto"
              src={shopImage}
              alt=""
            />
          </div>

          {/* reviews cards */}
          {
            reviews.map(review => <div key={review.productId} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md border border-[#2fca2d] text-black ">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <h4 className="font-bold text-xl">Product : {review.productName}</h4>
                  <span className="text-xs">{review.date}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-[#ff8904]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">{review.rating}</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm">
              <p>
                {review.review}
              </p>
            </div>
          </div>)
          }
          {
            reviews.length <= 7 ? <div><button onClick={() => setReviews(reviewsData)} className="btn border-[#2fca2d] hover:bg-[#2fca2d] hover:text-white">Show All</button>
            </div> : <div><button onClick={() =>  setReviews(reviewsData.slice(0,7))} className="btn border-[#2fca2d] hover:bg-[#2fca2d] hover:text-white">Show Less</button></div>
          }
        </div>
      </div>
    </>
  );
};

export default Review;
