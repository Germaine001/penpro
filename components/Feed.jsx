import { useRouter } from "next/router";
import React from "react";
import { Blogs } from "../utils/accets";
import Card from "./Card";
 

const Feed = () => {
  const router = useRouter();
  const { filter } = router.query;
  const blogs = Blogs?.filter((blog) => blog.category === filter);

  return (
    <>
      {!filter && (
        <section className="flex flex-wrap gap-4 px-4 md:p-0 w-full h-full md:w-11/12 justify-center items-center mx-auto mt-8 mb-24">
          {Blogs.map((blog) => ( 
                <Card blog={blog} key={blog.id} /> 
          ))}
        </section>
      )}
      {filter && filter === "View All" && (
        <section className="flex flex-wrap gap-4 px-4 md:p-0 w-full h-full md:w-11/12 justify-center items-center mx-auto mt-8 mb-24">
          {Blogs.map((blog) => (
            <Card blog={blog} key={blog.id} />
          ))}
        </section>
      )}
      {filter && filter !== "View All" && (
        <section className="flex flex-wrap gap-4 px-4 md:p-0 w-full h-full md:w-11/12 justify-center items-center mx-auto mt-8 mb-24">
          {blogs.map((blog) => (
            <Card blog={blog} key={blog.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Feed;
