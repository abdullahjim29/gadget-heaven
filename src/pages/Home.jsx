import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import AllProducts from "../components/AllProducts";

const Home = () => {
    useEffect(() => {
        document.title = 'Gadgets Heaven'
      })
    const categoriesData = useLoaderData();
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('../products.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])
    return (
        <div className="">
            <Banner/>
            <h2 className="text-4xl font-bold text-center my-14">Explore Cutting-Edge Gadgets</h2>
            <div className="grid lg:grid-cols-5 w-10/12 mx-auto gap-6">
            <div className=""><Categories categories={categoriesData} allProducts={allProducts}/></div>
            <div className=" lg:col-span-4 items-center">
                {
                    allProducts.length == 0 ? <AllProducts/> : <Outlet/>
                }
            </div>
            </div>
        </div>
    );
};

export default Home;