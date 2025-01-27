import { Outlet } from "react-router-dom";
import ReusableTitle from "../components/ReusableTitle";
const Dashboard = () => {
    return (
        <div>
            <ReusableTitle title='Dashboard' description='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;