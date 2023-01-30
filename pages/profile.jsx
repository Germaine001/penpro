import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { MdOutlineGeneratingTokens, MdOutlineStarRate, MdStarRate } from "react-icons/md";
import { useRouter } from "next/router";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  
  
  useEffect(() => { 

    if(!session) router.push({pathname:'/login'})
    
    return () => { 
    }
  }, [])
  
  if(!session) return <p>Please sign in .... <span className="text-blue-700" onClick={()=>signIn()}>Signin</span></p>;

  return (
    <div className="flex justify-center items-center m-auto w-full h-full p-6">
      <div className="border md:w-[32rem] p-6 rounded shadow bg-white">
        <div className="flex gap-4 items-center justify-center mb-6">
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
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
          <div>
            <h2 className="italic">Hi!</h2>
            <h3 className="font-semibold text-lg">{session?.user.name}</h3>
          </div>
        </div>
        <hr />
        <div className="mt-6 space-y-4 mb-6">
            <small className="italic">Whoami</small>
            <p className="text-slate-500">Experienced writer crafting compelling stories and engaging content. Specializing in [genre/niche], I bring a unique voice and expert research to every project. Driven to captivate audiences and deliver top-quality work.</p>
        </div>
        <hr />
        <div className="mt-6 mb-6 space-y-4">
            <small className="italic">Streaks</small>
            <div className="flex justify-between">
                <div className="flex gap-1 justify-center items-center">
                    <MdOutlineGeneratingTokens size={20} className="text-yellow-600"/> GHC 500 
                </div>
                <div className="flex justify-center items-center">
                    <span className="mr-2">Rating: </span> 
                    <MdStarRate size={20} className="text-yellow-500 shadow-sm"/>
                    <MdStarRate size={20} className="text-yellow-500 shadow-sm"/>
                    <MdStarRate size={20} className="text-yellow-500 shadow-sm"/>
                    <MdStarRate size={20} className="text-yellow-500 shadow-sm"/>
                    <MdOutlineStarRate  size={20}/> 
                </div>
            </div>
        </div>
        <hr />
        <div className="mt-6 space-y-4">
        <small className="italic">20 Publications</small>

        </div>
      </div>
    </div>
  );
};

export default Profile;
