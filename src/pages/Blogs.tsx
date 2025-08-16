import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, User2, Hash, ChevronRight } from 'lucide-react';

const categories = [
  'CI/CD',
  'Cloud Computing',
  'Infrastructure as Code',
  'Kubernetes',
  'Monitoring & Automation',
  'DevOps Culture',
  'Security',
  'Docker'
];

const blogs = [
  {
    id: 1,
    title: 'Mastering CI/CD Pipelines in 5 Steps',
    excerpt: 'Learn how to build and optimize your CI/CD pipelines for faster and more reliable software delivery.',
    author: 'Azfar Alam',
    date: 'Jan 16, 2025',
    category: 'CI/CD',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070',
    featured: true
  },
  {
    id: 2,
    title: 'Infrastructure as Code Best Practices',
    excerpt: 'Discover the essential practices for managing your infrastructure using code effectively.',
    author: 'Divya Satpute',
    date: 'Feb 14, 2025',
    category: 'Infrastructure as Code',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034',
    featured: true
  },
  {
    id: 3,
    title: 'Kubernetes Monitoring Strategies',
    excerpt: 'A comprehensive guide to monitoring your Kubernetes clusters for optimal performance.',
    author: 'Ankit Raj',
    date: 'March 13, 2024',
    category: 'Kubernetes',
    image: 'https://images.unsplash.com/photo-1667372393913-e5c9c643e1c9?q=80&w=2070',
    featured: true
  },
  {
    id: 4,
    title: 'Docker Container Management',
    excerpt: 'Master the art of managing Docker containers in a production environment.',
    author: 'Azfar Alam',
    date: 'Jan 10, 2025',
    category: 'Docker',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071'
  },
  {
    id: 5,
    title: 'Automating Security in DevOps',
    excerpt: 'Implement automated security measures in your DevOps pipeline for better protection.',
    author: 'Divya Satpute',
    date: 'March 11, 2025',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070'
  },
  {
    id: 6,
    title: 'Cloud Cost Optimization Guide',
    excerpt: 'Learn effective strategies to optimize your cloud costs without compromising performance.',
    author: 'Sarah Roushan',
    date: 'March 12, 2024',
    category: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072'
  }
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-50" />
        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            DevOps Insights & Blogs
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            Explore expert articles, guides, and insights to enhance your DevOps knowledge.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white focus:outline-none focus:border-pink-500 transition-colors"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Blogs */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="group relative rounded-2xl overflow-hidden aspect-[16/9] hover:transform hover:scale-[1.02] transition-all"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-pink-500 text-white mb-3">
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                    <div className="flex items-center text-sm text-gray-300">
                      <User2 className="w-4 h-4 mr-1" />
                      {blog.author}
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      {blog.date}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="absolute inset-0 w-full h-full focus:outline-none"
                >
                  <span className="sr-only">Read more about {blog.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Blogs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <div
                key={blog.id}
                className="group rounded-2xl bg-white/[0.08] border border-white/[0.08] hover:border-pink-500/50 transition-all overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-pink-500 text-white mb-3">
                    {blog.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-300">
                      <User2 className="w-4 h-4 mr-1" />
                      {blog.author}
                    </div>
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="inline-flex items-center text-pink-500 hover:text-pink-400 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Hash className="w-4 h-4 mr-1" />
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-20" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on DevOps Trends</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to receive the latest articles, insights, and tips straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all flex items-center justify-center"
              >
                Subscribe
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
