import React from "react";
import {FiFeather} from "react-icons/fi"
import { ImQuotesLeft } from "react-icons/im";

const Hero = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="hidden flex-col md:flex md:flex-row justify-center items-center h-[30rem] md:h-96">

       <div className="flex-1 w-full h-1/2 md:h-full flex flex-col gap-4 items-center justify-center py-10">
        <h4 className="text-2xl md:text-5xl text-slate-700 font-bold mb-4 whitespace-nowrap flex gap-1">Read <FiFeather className="text-green-600"/> Write</h4>
        <form className="w-4/5 md:w-1/2" onSubmit={handlesubmit}>
          <label htmlFor="email"></label>
          <div className="relative w-full overflow-hidden">
            <input type="email" name="email" id="email" placeholder="Enter your email" className="form-input placeholder:text-slate-400 w-full rounded-full p-2 md:p-3 border"/>
            <button className="absolute right-0 top-0 bg-black h-full px-3 md:px-4 text-slate-50 rounded-full">subscribe</button>
          </div>
        </form>
       </div>

       <div className="flex-1 flex flex-col gap-4 justify-center items-center h-full bg-slate-300 py-4">
        <ImQuotesLeft className="text-4xl text-slate-500"/>
        <p className="text-2xl px-16 md:px-20 text-center">Read articles, hire professional writers for all your official and social documents</p>
        <small className="italic">~ Penpro</small>
       </div>
      </div>
    </>
  );
};

export default Hero;
