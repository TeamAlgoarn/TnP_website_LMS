import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Tech Careers in 2025: What You Need to Know',
    excerpt: 'Explore emerging technologies, in-demand skills, and career opportunities that will shape the tech industry in 2025 and beyond.',
    author: 'Dr. Sarah Williams',
    date: '2025-01-15',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    tags: ['Career Advice', 'Technology Trends', 'Future Skills'],
    readTime: '8 min read',
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How to Ace Your Technical Interview: A Complete Guide',
      excerpt: 'Master the art of technical interviews with proven strategies, common questions, and expert tips from industry professionals.',
      author: 'Michael Johnson',
      date: '2025-01-12',
      image: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg',
      tags: ['Interview Tips', 'Career Advice'],
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Data Science vs Machine Learning: Which Career Path to Choose?',
      excerpt: 'Understanding the differences between data science and machine learning careers to make an informed decision about your future.',
      author: 'Emily Chen',
      date: '2025-01-10',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      tags: ['Data Science', 'Machine Learning', 'Career Guidance'],
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'Building Your First Portfolio: A Developer\'s Guide',
      excerpt: 'Step-by-step guide to creating an impressive portfolio that showcases your skills and lands you your dream job.',
      author: 'David Rodriguez',
      date: '2025-01-08',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
      tags: ['Portfolio', 'Web Development', 'Career Tips'],
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'Remote Work Best Practices for Tech Professionals',
      excerpt: 'Essential tips and tools for thriving in a remote work environment while maintaining productivity and work-life balance.',
      author: 'Lisa Thompson',
      date: '2025-01-05',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg',
      tags: ['Remote Work', 'Productivity', 'Work-Life Balance'],
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'Cloud Computing Certifications: Which One Should You Get?',
      excerpt: 'Compare popular cloud certifications from AWS, Azure, and Google Cloud to choose the right path for your career.',
      author: 'James Wilson',
      date: '2025-01-03',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      tags: ['Cloud Computing', 'Certifications', 'AWS', 'Azure'],
      readTime: '8 min read',
    },
    {
      id: 7,
      title: 'Salary Negotiation Tips for Tech Professionals',
      excerpt: 'Learn how to research, prepare, and negotiate your salary effectively to maximize your earning potential in tech.',
      author: 'Maria Garcia',
      date: '2025-01-01',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      tags: ['Salary Negotiation', 'Career Growth', 'Professional Development'],
      readTime: '7 min read',
    },
  ];

  const categories = [
    { name: 'All Posts', count: 25 },
    { name: 'Career Advice', count: 12 },
    { name: 'Technology Trends', count: 8 },
    { name: 'Interview Tips', count: 6 },
    { name: 'Skill Development', count: 9 },
    { name: 'Industry Insights', count: 7 },
  ];

  const popularTags = [
    'JavaScript', 'Python', 'React', 'Node.js', 'Data Science',
    'Machine Learning', 'Cloud Computing', 'DevOps', 'Cybersecurity',
    'UI/UX Design', 'Career Growth', 'Remote Work'
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career & Tech Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, career advice, and industry trends to help you stay ahead in your tech journey.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400">Featured Article</h2>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <section className="py-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors hover:-translate-y-2
                    transition-all duration-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <button className="w-full mt-4 bg-yellow-400 text-black py-2 px-4 rounded font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="flex items-center justify-between w-full text-left text-gray-400 hover:text-yellow-400 transition-colors">
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-700 px-2 py-1 rounded">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm hover:bg-yellow-400 hover:text-black transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 rounded-lg text-black">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm mb-4">Get the latest career insights and tech trends delivered to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded border-0 text-black bg-gray-900 placeholder-gray-600"
                  />
                  <button className="w-full bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Recent Comments */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Recent Comments</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    <p className="text-gray-400">John D. on</p>
                    <p className="text-yellow-400">"Technical Interview Guide"</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-400">Sarah M. on</p>
                    <p className="text-yellow-400">"Data Science Career Path"</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-400">Mike R. on</p>
                    <p className="text-yellow-400">"Building Your Portfolio"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Turn insights into action. Explore our courses and begin your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;