import Link from "next/link";
import { ImBlog } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { BsPen } from "react-icons/bs";

const Navbar = () => {
  const { data: session } = useSession();

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
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>Services</li>
            </Link>
            <Link href="/">
              <li>About us</li>
            </Link>
            <Link href="/">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        {/* user auth */}
        <div className="flex-1 px-4 gap-4 text-sm md:text-base whitespace-nowrap flex items-center justify-end">
          <ul className="flex gap-5 items-center md:cursor-pointer cursor-none">
            {!session && <li onClick={() => signIn()}>Sign In</li>}
            {!session && (
              <Link href="/login">
                <li className="text-white font-light bg-slate-900 px-2 py-1 rounded-full">
                  Get Started
                </li>
              </Link>
            )}
            {session && (
              <Link href={'/write'}>
              <li className="rounded flex px-2 py-1 gap-1 text-slate-50 justify-center items-center bg-black">
              <BsPen size={16} /> Write
              </li>
              </Link>
            )}
            {session && (
              <li className="rounded text-red-900" onClick={() => signOut()}>
                SignOut
              </li>
            )}
            {session && (
              <Link href={"/profile"}>
                <li className="bg-green-500 p-1 rounded-full text-slate-500">
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
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
