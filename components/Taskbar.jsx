import React from "react"; 
import { FiFeather } from "react-icons/fi";
import { BsBook, BsBookmarkStar, BsBriefcase, BsPen, BsPerson } from "react-icons/bs";
import Link from "next/link";
import { useSession,signIn,signOut } from 'next-auth/react'
import Image from "next/image";

const Taskbar = () => {
  const {data: session} = useSession();

  return (
    <>
     {session && <div className="w-full md:hidden flex gap-4 fixed bottom-0 px-4 py-3 justify-evenly items-center bg-black text-slate-50">
        <Link href="/">
            <span className="">
              <BsBook size={28} />
            </span>
        </Link>
        <Link href="/">
            <span className="">
              <BsBookmarkStar size={28} />
            </span>
        </Link>
        <Link href="/write" > 
            <div className="">
              <BsPen size={28} />
            </div> 
        </Link>
        <Link href="/">
            <span className="">
              <BsBriefcase size={28} />
            </span>
        </Link>
        <Link href="/profile">
            <span className="">
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={session?.user.image || "/writer.png"}
                      fill
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      blurDataURL={session?.user.image || "/writer.png"}
                      placeholder="blur"
                      alt={"properties"}
                      priority
                      className="object-cover"
                    />
                  </div>
            </span>
        </Link>
      </div>}
    </>
  );
};

export default Taskbar;
