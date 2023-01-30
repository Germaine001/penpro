import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
    return
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[600px]">
      <div className="relative h-20 w-20 rounded overflow-hidden">
        <Image
          src={"/writer.png"}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          blurDataURL={"/writer.png"}
          placeholder="blur"
          alt={"properties"}
          priority
          className="object-cover"
        />
      </div>
      <h2 className="font-bold text-xl md:text-2xl">
        Welcome to <span className="italic text-[#31947b]">Penpro</span>
      </h2>
      <p>Inspire, Create, Connect, Publish, Thrive.</p>
      <div className="border rounded w-72 py-6 flex flex-col items-center">
        Register for free with
        <div
          className="flex border p-4 rounded mt-6 gap-4 items-center"
          onClick={() => signIn()}
        >
          <FcGoogle size={20} /> Creat Account
        </div>
      </div>
    </div>
  );
};

export default Login;
