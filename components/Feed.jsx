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
        <section className="flex flex-wrap gap-4 px-4 md:p-0 w-full h-full md:w-10/12 items-center mx-auto my-8">
          {Blogs.map((blog) => ( 
                <Card blog={blog} key={blog.id} /> 
          ))}
        </section>
      )}
      {filter && filter === "View All" && (
        <section className="flex flex-wrap gap-4 px-4 md:p-0 w-full h-full md:w-10/12 items-center mx-auto my-8">
          {Blogs.map((blog) => (
            <Card blog={blog} key={blog.id} />
          ))}
        </section>
      )}
      {filter && filter !== "View All" && (
        <section className="flex flex-wrap gap-4 px-4 md:p-0 w-full h-full md:w-10/12 items-center mx-auto my-8">
          {blogs.map((blog) => (
            <Card blog={blog} key={blog.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Feed;
