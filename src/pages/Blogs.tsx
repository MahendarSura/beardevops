// src/pages/BlogPost.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from './Blogs'; // ⚠️ Optional: Extract this to a separate file if needed

const BlogPost = () => {
  const { id } = useParams();
  const blogId = parseInt(id || '');
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <h2>Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-xl mb-8"
        />
        <div className="mb-4">
          <span className="text-pink-500 font-semibold">{blog.category}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="text-gray-400 mb-8">
          By {blog.author} • {blog.date}
        </div>
        <p className="text-gray-300 leading-relaxed mb-8">
          {blog.excerpt} {/* For demo, using excerpt. Replace with full content if you have it */}
        </p>
        <Link
          to="/blogs"
          className="inline-block px-6 py-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-all"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
