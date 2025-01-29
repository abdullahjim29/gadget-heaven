import { NavLink, useLocation } from "react-router-dom";

const Categories = ({categories}) => {
  const {pathname} = useLocation();
  return (
    <div className="my-0 md:my-10 lg:my-0">
      <div className="">
        {/* sidebar */}
        <div className="bg-white p-5 rounded-2xl space-x-3 lg:space-y-5 grid md:grid-cols-2 lg:grid-cols-1 gap-2">
          <NavLink className={({isActive}) => isActive ||  pathname == '/'? 'bg-[#9538E2] font-bold btn rounded-full border-none w-full text-white' : 'btn rounded-full border-none w-full'} to='/allproducts'><div className=""><button>All Products</button></div></NavLink>
          {
            categories.map(category => <div key={category.id} className="bg-base-200 rounded-full"><NavLink to={`/categories/${category.category}`} className={({isActive}) => isActive ? 'bg-[#9538E2] font-bold btn rounded-full border-none w-full text-white' : 'btn rounded-full border-none w-full'}>{category.category}</NavLink></div>)

          }
        </div>
      </div>
    </div>
  );
};

export default Categories;
