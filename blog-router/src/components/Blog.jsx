import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const API_URL = "http://localhost:3011/blogs";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null)
  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_URL);
        setBlogs(response.data);
       
      } catch (error) {
        console.log(error);
        
      }
    };
    fetchBlogs();
  }, []);




    async function handleDelete (id) {
      const isDeleted = confirm("Are you sure you want to delete")
      if (!isDeleted) return;
      try {
        const response = await axios.delete(`${API_URL}/${id}`)
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    
    async function handleUpdate (id) {
     try {
      const blogToUpdate = blogs.find((blog) => blog.id === id)
      const newFavouriteStatus = !blogToUpdate.favourite;

       await axios.put(`${API_URL}/${id}`, {favourite: newFavouriteStatus})

       setBlogs((prev) =>
        prev.map((blog) => blog.id === id ? {...blog, favourite: newFavouriteStatus} : blog))
      
     } catch (error) {
        console.log(error)
     }
    }


      async function handleSelectedBlog (id) {
       try {
         const response = await axios.get(`${API_URL}/${id}`)
         setSelectedBlog(response.data)
         console.log(response.data)
       } catch (error) {
          console.log(error)
       }
      }






  return (
    <>
      <div className="bg-blue-300 h-full pb-8">
        <h2 className="text-indigo-600 text-3xl py-5 px-12">Favourite Blogs</h2>
        <div className="px-12  gap-5 flex">
          <ul className="flex flex-col w-[50%] gap-3 my-5">
            {blogs
              // .filter((blog) => blog.favourite === true)
              .map((blog) => (
                <li
                  key={blog.id}
                  className="flex flex-col gap-5 bg-white shadow-md rounded-xl p-10"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-3xl">{blog.title}</div>

                    <div className="flex justify-between items-center gap-12 cursor-pointer">
                      <div onClick={() => handleUpdate(blog.id)}>
                        {blog.favourite ? (
                          <IoMdHeart className="text-3xl text-red-500" />
                        ) : (
                          <IoMdHeartEmpty className="text-3xl text-gray-500 hover:text-red-500 transition-colors duration-200" />
                        )}
                      </div>

                      <button
                        className=" border-1 border-red-500 w-[4rem] h-[2rem] text-red-500 rounded "
                        onClick={() => handleDelete(blog.id)}
                      >
                        del
                      </button>
                    </div>
                  </div>

                  <div
                    onClick={() => handleSelectedBlog(blog.id)}
                    className="cursor-pointer"
                  >
                    {blog.description}
                  </div>
                </li>
              ))}
          </ul>

          {/* getOne blog */}
          <div className="w-[50%] bg-white rounded-xl shadow-md p-8 h-fit my-6">
            {selectedBlog ? (
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {selectedBlog.title}
                </h3>
                <p className="text-gray-700">{selectedBlog.description}</p>
              </div>
            ) : (
              <p className="text-gray-500">
                Click a description to see its details here.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );

}
