import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FiFeather } from "react-icons/fi";
import { BsBookmarkStar, BsBriefcase, BsPerson } from "react-icons/bs";
import Link from "next/link";

const Taskbar = () => {
  return (
    <>
      <div className="w-full md:hidden flex gap-4 fixed bottom-0 border px-4 py-3 justify-evenly items-center bg-white">
        <Link href="/">
          <a>
            <span className="">
              <BiHomeAlt size={28} />
            </span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="">
              <BsBookmarkStar size={28} />
            </span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="">
              <FiFeather size={30} />
            </span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="">
              <BsBriefcase size={28} />
            </span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="">
              <BsPerson size={28} />
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Taskbar;
