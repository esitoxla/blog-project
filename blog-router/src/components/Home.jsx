import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3011/blogs";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_URL);
        setBlogs(response.data);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    };
    fetchBlogs();
  }, [isLoading]);

  return (
    <>
      <div className="px-12 flex  flex-col gap-5 bg-blue-200">
        <h2 className="text-indigo-600 text-5xl my-5">All Blogs</h2>
        <ul className="flex gap-3 my-5">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="flex flex-col gap-5 bg-white shadow-md rounded-xl p-10"
            >
              <div className="text-3xl">{blog.title}</div>
              <div>{blog.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
