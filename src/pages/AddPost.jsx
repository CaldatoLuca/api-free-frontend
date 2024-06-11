import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddPost() {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: null,
    published: false,
    categoryId: "",
    tags: [],
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setPostData({ ...postData, image: e.target.files[0] });
    } else if (e.target.name === "tags") {
      const tagsArray = e.target.value.split(",").map((tag) => tag.trim()); // Convert comma-separated string to array of strings
      console.log(tagsArray);
      setPostData({ ...postData, tags: tagsArray });
    } else if (e.target.name === "published") {
      setPostData({ ...postData, published: e.target.checked });
    } else {
      setPostData({ ...postData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/posts",
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-neutral-100 bg-neutral-800">
      <div className=" flex justify-center items-center py-20">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-5">Create a New Post</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Title */}
            <div className="flex flex-col mb-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={postData.title}
                onChange={handleChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col mb-3">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                value={postData.content}
                onChange={handleChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              ></textarea>
            </div>

            {/* Image */}
            <div className="flex flex-col mb-3">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Published */}
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={postData.published}
                onChange={handleChange}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="published">Published</label>
            </div>

            {/* Category Id */}
            <div className="flex flex-col mb-3">
              <label htmlFor="categoryId">Category ID</label>
              <input
                type="text"
                id="categoryId"
                name="categoryId"
                value={postData.categoryId}
                onChange={handleChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-col mb-3">
              <label htmlFor="tags">Tags (comma-separated)</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={postData.tags}
                onChange={handleChange}
                className="p-1 border bg-neutral-50 text-neutral-900 hover:border-yellow-400 rounded-md outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-neutral-800 rounded-3xl text-neutral-100 py-1 hover:bg-yellow-400 transition"
            >
              {/* <Link to="/">Crate Post</Link> */}
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
