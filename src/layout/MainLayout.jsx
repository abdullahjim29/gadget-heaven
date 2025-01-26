import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast, { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            <Toaster/>
            <div className="bg-base-200 pb-20 min-h-[calc(100vh-384px)]"><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default MainLayout;