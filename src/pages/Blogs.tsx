
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  Calendar,
  User2,
  Hash,
  ChevronRight
} from 'lucide-react';

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
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      blog.title.toLowerCase().includes(searchLower) ||
      blog.excerpt.toLowerCase().includes(searchLower);
    const matchesCategory = !selectedCategory || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlogs = filteredBlogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      {/* Header */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-50" />
        <div className="relative container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            DevOps Insights & Blogs
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Explore expert articles, guides, and insights to enhance your DevOps knowledge.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center max-w-4xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                type="search"
                aria-label="Search articles"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              />
            </div>
            <select
              aria-label="Filter by category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Featured Blogs */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlogs.length > 0 ? (
              featuredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group relative rounded-2xl overflow-hidden aspect-[16/9] hover:scale-[1.03] transform transition-transform shadow-lg shadow-black/50"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-500 text-white mb-3 select-none">
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {blog.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-300 space-x-3">
                      <div className="flex items-center">
                        <User2 className="w-4 h-4 mr-1" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/blogs/${blog.id}`}
                    aria-label={`Read more about ${blog.title}`}
                    className="absolute inset-0"
                  />
                </article>
              ))
            ) : (
              <p className="text-gray-400 col-span-3 text-center">No featured articles found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Regular Blogs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          {regularBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group rounded-2xl bg-white/[0.08] border border-white/[0.08] hover:border-pink-500/50 transition-all overflow-hidden shadow-md shadow-black/20"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-500 text-white mb-3 select-none">
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 leading-tight">{blog.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-gray-300 text-sm">
                      <div className="flex items-center">
                        <User2 className="w-4 h-4 mr-1" />
                        <span>{blog.author}</span>
                      </div>
                      <Link
                        to={`/blogs/${blog.id}`}
                        className="inline-flex items-center text-pink-500 hover:text-pink-400 transition-colors font-semibold"
                        aria-label={`Read more about ${blog.title}`}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">No articles found for the selected filters.</p>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white/[0.02]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all select-none ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white shadow-md shadow-pink-500/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                aria-pressed={selectedCategory === category}
              >
                <Hash className="w-4 h-4 mr-1" />
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="

