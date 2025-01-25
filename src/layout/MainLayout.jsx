import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            <div className="bg-base-200"><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default MainLayout;