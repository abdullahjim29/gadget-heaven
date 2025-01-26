const ReusableTitle = ({title, description, btn1, btn2}) => {
    return (
        <div className="bg-[#9538E2] text-center text-white pt-10 pb-20 space-y-3">
            <h2 className="text-xl md:text-3xl font-bold ">{title}</h2>
            <p className="w-9/12 md:w-6/12 mx-auto">{description}</p>
            <div className="flex justify-center gap-10 mt-8">
            <div><button className="btn text-[#9538E2] font-bold rounded-full bg-white px-10 text-base">{btn1}</button></div>
            <div><button className="btn shadow text-white rounded-full bg-[#9538E2] px-10 text-base">{btn2}</button></div>
            </div>
        </div>
    );
};

export default ReusableTitle;