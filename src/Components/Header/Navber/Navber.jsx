import { Link, NavLink } from "react-router-dom"
import { BsSearch } from 'react-icons/bs';
import { useContext } from "react";
import { EagleTechSpotContext } from "../../../Context/Context";
const Navber = () => {
    const {currentuser,currentuserphoto}=useContext(EagleTechSpotContext)
    const menus = <>
        <li className="uppercase mx-1"><NavLink to={'/'}>Home</NavLink></li>
        <li className="uppercase mx-1"><NavLink to={'/addproduct'}>Add Product</NavLink></li>
        <li className="uppercase mx-1"><NavLink to={'/mycart'}>My Cart</NavLink></li>
        {
         !currentuser && <li className="uppercase mx-1"><NavLink to={'/login'}>Login</NavLink></li>
        }
        {
         currentuser && <li><button className="uppercase mx-1">logout</button></li>
        }
    </>
    return (
        <div className="">
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menus}
                            <form className="relative py-2">
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                <button className="absolute right-2 top-[50%] -translate-y-[50%] text-2xl"><BsSearch /></button>
                            </form>
                        </ul>
                    </div>
                    <Link to={'/'} className="sm:flex gap-1 justify-start items-center hidden">
                        <img className="w-12" src="/Eagle_Tech.png" alt="" />
                        <a className="normal-case text-xl text-red-600 italic font-bold">Eagle Tech</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menus}

                    </ul>
                </div>
                <div className="navbar-end">
                    <form className="relative hidden sm:block">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button className="absolute right-2 top-[50%] -translate-y-[50%] text-2xl"><BsSearch /></button>
                    </form>
                    <Link to={'/'} className="flex gap-1 justify-start items-center sm:hidden">
                        <img className="w-12" src="/Eagle_Tech.png" alt="" />
                        <a className="normal-case text-xl text-red-600 italic font-bold">Eagle Tech</a>
                    </Link>
                    {
                        currentuser && <h2 className="font-extrabold mx-2">{currentuser}</h2>
                    }
                    {
                        currentuserphoto && <img className="w-10 h-10 rounded-full " src={currentuserphoto} alt=""  />
                    }
                </div>
            </div>
        </div>
    )
}

export default Navber
