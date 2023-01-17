import Link from "next/link";
import { ImBlog } from "react-icons/im";
import { BiDotsVertical } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="flex h-16 bg-white drop-shadow-sm relative">
        <div className="flex-1 flex px-5 md:px-10 md:justify-evenly items-center">
          
          {/* logo */}
          <div className="flex gap-2 items-center">
            <ImBlog size={20} className=" text-green-600" />
            <span className="text-xl font-serif italic font-bold text-green-800">
              Penpro
            </span>
          </div>

          {/* navigation */}
          <ul className="hidden md:flex gap-6">
            <Link href="/">
             <a><li>Home</li></a> 
            </Link>
            <Link href="/">
             <a> <li>Services</li></a>
            </Link>
            <Link href="/">
              <a><li>About us</li></a>
            </Link>
            <Link href="/">
             <a><li>Contact</li></a> 
            </Link>
          </ul>
        </div>

        {/* user auth */}
        <div className="flex-1 px-4 gap-4 text-sm md:text-base whitespace-nowrap flex items-center justify-end">
          <ul className="flex gap-3 items-center">
            <Link href="/">
              <li>Sign In</li>
            </Link>
            <Link href="/">
              <li className="text-white bg-slate-900 px-2 py-1 rounded-full">
                Get Started
              </li>
            </Link>
          </ul>
        </div>

        
      </div>
    </>
  );
};

export default Navbar;
