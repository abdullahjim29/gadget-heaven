import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";

export const costContext = createContext();
const MainLayout = () => {
  const [totalCost, setTotalCost] = useState(0);

  const handleTotalCost = (price) => {
    setTotalCost(totalCost + price);
  };

  const decriseTotalCost = price => {
    setTotalCost(totalCost - price)
  }
  return (
    <div>
      <costContext.Provider value={{handleTotalCost, totalCost, setTotalCost, decriseTotalCost}}>
        {/* navbar */}
        <Navbar />
        <Toaster />
        <div className="bg-base-200 pb-20 min-h-[calc(100vh-384px)]">
          <Outlet />
        </div>
        <Footer />
      </costContext.Provider>
    </div>
  );
};

export default MainLayout;
