import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
    const categoriesData = useLoaderData();
    return (
        <div className="">
            <Banner/>
            <h2 className="text-4xl font-bold text-center my-14">Explore Cutting-Edge Gadgets</h2>
            <div className="grid lg:grid-cols-5 w-10/12 mx-auto gap-6">
            <div className=""><Categories categories={categoriesData}/></div>
            <div className=" lg:col-span-4 items-center"><Outlet/></div>
            </div>
        </div>
    );
};

export default Home;