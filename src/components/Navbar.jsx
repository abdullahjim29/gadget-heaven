import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
const Navbar = () => {
const {pathname} = useLocation();
console.log(pathname);
  return (
    <div className="mt-4">
      <div className={`navbar ${pathname == '/' ? 'bg-[#9538E2] text-white' : 'bg-white text-black'} container mx-auto px-2 md:px-14 rounded-t-2xl`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4"
            >
              <NavLink className={({isActive}) => isActive && pathname == '/'? 'text-[#9538E2] font-bold' : 'font-semibold'} to='/'><li>Home</li></NavLink>
              <NavLink className={({isActive}) => isActive && pathname == '/statistics'? 'text-[#9538E2] font-semibold' : 'font-semibold text-black'} to='/statistics'><li>Statistics</li></NavLink>
              <NavLink className={({isActive}) => isActive && pathname == '/dashboard'? 'text-[#9538E2] font-semibold' : 'font-semibold text-black'} to='/dashboard'><li>Dashboard</li></NavLink>
              <NavLink className={({isActive}) => isActive && pathname == '/join'? 'text-[#9538E2] font-semibold' : 'font-semibold text-black'} to='/join'><li>Join</li></NavLink>
            </ul>
          </div>
          <Link to='/' className="text-xl md:text-2xl font-bold">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-9">
          <NavLink className={({isActive}) => isActive && pathname == '/'? 'underline font-bold' : 'font-semibold'} to='/'><li>Home</li></NavLink>
              <NavLink className={({isActive}) => isActive && pathname == '/statistics'? 'text-[#9538E2] font-semibold' : 'font-semibold'} to='/statistics'><li>Statistics</li></NavLink>
              <NavLink className={({isActive}) => isActive && pathname == '/dashboard'? 'text-[#9538E2] font-semibold' : 'font-semibold'} to='/dashboard'><li>Dashboard</li></NavLink>
              <NavLink className={({isActive}) => isActive && pathname == '/join'? 'text-[#9538E2] font-semibold' : 'font-semibold'} to='/join'><li>Join</li></NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-3 text-black">
          <div className="bg-base-200 p-2 rounded-full border border-gray-400"><HiOutlineShoppingCart size={20}/></div>
          <div className="bg-base-200 p-2 rounded-full border border-gray-400"><AiOutlineHeart size={20} /></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
