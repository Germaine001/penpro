import Link from 'next/link'
import React from 'react'
import {ImBlog} from 'react-icons/im'


const Navbar = () => {
  return (
    <>
    <div className="flex py-5">
        <div className="flex-1 flex px-10 justify-evenly items-center"> 
            {/* logo */}
            <div className="flex gap-2 items-center">
                <ImBlog size={20} className=" text-green-500"/>
                <span className="text-lg font-serif italic font-bold text-green-800">Penpro</span>
            </div>
            {/* navigation */}
            <ul className="flex gap-4">
            <Link href='/'><li>Home</li></Link>
            <Link href='/'><li>Services</li></Link>
            <Link href='/'><li>About Us</li></Link>
            <Link href='/'><li>Contact Us</li></Link>
            </ul>
        </div>
        <div className="flex-1 px-5">
        <ul className="flex gap-4 items-center justify-end">
        <Link href='/'><li>Login</li></Link>
            <Link href='/'><li className="text-white bg-green-800 px-2 py-1 rounded-full">Sign up</li></Link>
            </ul>  
        </div>
    </div>

    </>
  )
}

export default Navbar