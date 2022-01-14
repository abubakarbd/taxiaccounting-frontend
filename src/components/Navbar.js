import { useState } from "react";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from '../img/logo.png';

const navLinks = [
    {id: 1, title: "home", route: "/home"},
    {id: 2, title: "about", route: "/about"},
    {id: 3, title: "services", route: "/faq"},
    {id: 4, title: "features", route: "/blog"}
  ]
function Navbar() {
    const [selectedMenu, setSelectedMenu] = useState(1)
    const [mobileTab, setMobileTab] = useState(false)
    const {pathname} = useLocation();
    return (
            <div>
                <nav className="navbar md:px-16 w-full md:flex justify-between pt-6 pb-8 ">
                    <div className="flex justify-between w-full">
                        <div className="w-full flex justify-between">
                            <div >
                                <img  src={logo} width="50" alt="" />
                            </div>
                            <FaBars onClick={() => setMobileTab(!mobileTab)} className="cursor-pointer md:hidden" />
                        </div>
                        <div className="flex text-black text-3xl mr-1.5">
                            <FaPhoneAlt className="mr-3" />
                            <h2 className="font-mont-alt font-semibold">01916918791</h2>
                        </div>
                        
                        <div className="hidden md:flex">
                            <Link  to="/home" className={`px-8 py-3 font-mon-alt font-semibold mx-1 rounded-full focus:outline-none hover:bg-prim hover:text-white "bg-prim text-white": "text-black bg-white"}`}>
                                Home
                            </Link>
                            <Link  to="/about" className={`px-8 py-3 font-mon-alt font-semibold mx-1 rounded-full focus:outline-none hover:bg-prim hover:text-white "bg-prim text-white": "text-black bg-white"}`}>
                            About
                            </Link>
                            <Link  to="/faq" className={`px-8 py-3 font-mon-alt font-semibold mx-1 rounded-full focus:outline-none hover:bg-prim hover:text-white "bg-prim text-white": "text-black bg-white"}`}>
                            Services
                            </Link>
                            <Link  to="/blog" className={`px-8 py-3 font-mon-alt font-semibold mx-1 rounded-full focus:outline-none hover:bg-prim hover:text-white "bg-prim text-white": "text-black bg-white"}`}>
                            Features
                            </Link>
                            <a target="_blank" href="https://taxiaccounting.co.uk/backend/" className={`px-8 py-3 font-mon-alt font-semibold mx-1 rounded-full focus:outline-none hover:bg-prim hover:text-white "bg-prim text-white": "text-black bg-white}`}>LOGIN</a>
                            <a target="_blank" href="https://taxiaccounting.co.uk/backend/register" className={`px-8 py-3 font-mon-alt font-semibold mx-1 rounded-full focus:outline-none hover:bg-prim hover:text-white "bg-prim text-white": "text-black bg-white}`}>REGISTER</a>
                        </div>
                    </div>
                    {/* <div className="ml-4">
                        <button className="py-2 px-3 bg-black text-white rounded-full">Signup / Login</button>
                    </div> */}
                    {mobileTab &&
                    <div className="bg-black md:hidden">
                        {navLinks.map(nav => 
                        <Link onClick={() => setSelectedMenu(nav.id)} to={nav.route} key={nav.id} className="block w-full">
                            <button className={`w-full text-left text-white font-thin p-5 ${selectedMenu === nav.id? "bg-yellow-600 text-white": "bg-black"}`}>{nav.title}</button>
                        </Link>
                        )}
                    </div>}
                </nav>
                <div className="navbar_footer"></div>
            </div>
            
    );
}

export default Navbar;