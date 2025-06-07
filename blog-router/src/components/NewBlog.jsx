import React from "react";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3011/blogs";

export default function NewBlog() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    details: "",
  });

  async function addNewBlog(event) {
    event.preventDefault();
    const { title, description } = form;

    if (!title || !description ) return;

    try {
      const response = await axios.post(API_URL, {
        ...form,
        favourite: false,
      });

      setForm({ title: "", description: "" });

      alert("Blog added successfully!");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-blue-300 w-full h-full flex items-center">
        <div className="m-16 p-10 flex items-center justify-center border border-transparent bg-indigo-900 rounded-xl">
          <form action="" onSubmit={addNewBlog}>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="" className="text-2xl">
                Title:
              </label>
              <input
                type="text"
                placeholder="Enter title..."
                className="w-[35rem] bg-white h-[40px] px-5 rounded-xl outline-0 "
                value={form.title}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, title: event.target.value }))
                }
              />
            </div>

            <div className="flex flex-col gap-2 my-8">
              <label htmlFor="" className="text-2xl">
                Description:
              </label>
              <input
                type="text"
                placeholder="Enter description..."
                className="w-[35rem] bg-white h-[5rem] px-5 rounded-xl outline-0 "
                value={form.description}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, description: event.target.value }))
                }
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-950 text-white px-8 py-2 rounded cursor-pointer border border-transparent hover:border-indigo-950 hover:bg-white hover:text-indigo-950"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
