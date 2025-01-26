import { NavLink, useLoaderData } from "react-router-dom";
// import Products from "./Products";

const Categories = ({categories}) => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="my-0 md:my-10 lg:my-0">
      <div className="">
        {/* sidebar */}
        <div className="bg-white p-5 rounded-2xl space-x-3 lg:space-y-5 grid md:grid-cols-2 lg:grid-cols-1 gap-2">
        <div className="bg-base-200 rounded-full"><NavLink to='/allproducts' className="btn rounded-full border-none w-full">All Products</NavLink></div>
          {
            categories.map(category => <div key={category.id} className="bg-base-200 rounded-full"><NavLink to={`/categories/${category.category}`} className="btn rounded-full border-none w-full">{category.category}</NavLink></div>)

          }
        </div>

        {/* products */}
        {/* <div className="col-span-4">
          <Products/>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
