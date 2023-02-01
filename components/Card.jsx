import Image from "next/image";
import React from "react";
import { GiBathtub, GiBed, GiPencilRuler, GiPersonInBed, GiSittingDog } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import millify from "millify";
import { motion as m } from "framer-motion";
import moment from "moment";
import { FiArrowUpRight } from "react-icons/fi";

const CardImg = ({ img, views, createdAt, category, author }) => (
  <>
    <div className="relative h-[180px] lg:h-[230px] w-full rounded-t-lg overflow-hidden">
      <Image
        src={img}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        blurDataURL={img}
        placeholder="blur"
        alt={"properties"}
        priority
        className="object-cover"
      />
     <div className="absolute bottom-0 w-full flex items-center justify-between gap-1 font-light text-xs sm:text-sm text-slate-50 bg-slate-500/40 backdrop-blur-sm py-2 px-4">
        <div>
            <p>{views? <> {millify(views)} views</> : <> No views</>}</p>
            <p>{createdAt ? moment(createdAt).format("DD/MM/YY") : ''}</p> 
        </div>
          <div className="text-right">
            <p>{category}</p>
            <small>{author}</small>
          </div>
    </div>
   </div>
  </>
);

const CardTitle = ({ title}) => (
  <>
    <div className="flex w-full justify-between items-center">
      <h3 className="font-bold whitespace-nowrap text-xl text-slate-900 md:hover:underline underline-offset-2">{title}</h3> 
    </div>
  </>
); 

const CardDescription = ({ body}) => (
  <>
    <div className="w-full mt-2">  
      <p className="font-light text-slate-600 text-xs lg:text-sm mt-2">{body.substr(0, 60)}...</p>
    </div>
  </>
)

const CardButton = ({text}) => (
  <>
  <div className="w-full whitespace-nowrap px-4 flex gap-2 justify-start items-center text-sm text-slate-900 hover:text-indigo-600 bottom-0">
    {text} <FiArrowUpRight/>
  </div>
  </>
)

// Card component 
const Card = ({
  blog: { createdAt, imgUrl, views, category, title, body, author },
}) => {
  
  return (
    <>
    <m.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.007}} whileTap={{scale:1.0}} className="w-full sm:md:w-[360px] lg:w-[380px] h-fit bg-white rounded-lg overflow-hidden hover:cursor-pointer">
      <CardImg img={imgUrl} views={views} category={category} createdAt={createdAt} author={author}/>
      <div className="p-4">
        <CardTitle  title={title} /> 
        <CardDescription  body={body}  />
      </div>
      <CardButton text={'Read post'}/>
    </m.div>
    </>
  );
};

export default Card;
