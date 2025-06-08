import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3011/blogs";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_URL);
        setBlogs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="bg-blue-300">
        <h2 className="text-indigo-600 text-5xl py-5 px-12">All Blogs</h2>
        <div className="px-12 flex  flex-col gap-5 pb-5 ">
          {isLoading ? (
            <p className="px-12 py-4 text-gray-600">Loading blogs...</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
              {blogs.map((blog) => (
                <li
                  key={blog.id}
                  className="flex flex-col gap-5 bg-white shadow-md rounded-xl p-10 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="text-2xl font-bold ">{blog.title}</div>
                  <div className="truncate w-full">{blog.description}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-indigo-600 text-3xl py-5 px-12">
            Favourite Blogs
          </h2>
          <div className="px-12 flex  flex-col gap-5 ">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
              {blogs
                .filter((blog) => blog.favourite === true)
                .map((blog) => (
                  <li
                    key={blog.id}
                    className="flex flex-col gap-5 bg-white shadow-md rounded-xl p-10 transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="text-2xl font-bold">{blog.title}</div>
                    <div className="truncate w-full">{blog.description}</div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
