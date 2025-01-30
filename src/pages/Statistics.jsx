import { useEffect } from "react";

const Statistics = () => {
    useEffect(() => {
        document.title = 'Statistics'
      })
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl md:text-5xl text-red-500">NO DATA</h2>
        </div>
    );
};

export default Statistics;