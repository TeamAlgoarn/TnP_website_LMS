import React, { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const featuredPost = {
    id: 1,
    title: 'The Future of Tech Careers in India: 2025 Trends & Opportunities',
    excerpt: 'Explore emerging technologies, in-demand skills, and career opportunities that will shape the Indian IT industry in 2025 and beyond.',
    author: 'Anand B',
    date: '2025-01-15',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    tags: ['Career Advice', 'Technology Trends', 'Indian IT'],
    readTime: '8 min read',
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How to Ace Your Technical Interview at Indian IT Companies',
      excerpt: 'Master the art of technical interviews with proven strategies, common questions, and expert tips from Indian IT professionals.',
      author: 'Rajesh Kumar',
      date: '2025-01-12',
      image: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg',
      tags: ['Interview Tips', 'Career Advice', 'Indian Companies'],
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Data Science vs AI Engineering: Which Career Path in India?',
      excerpt: 'Understanding the differences between data science and AI engineering careers in the Indian market to make an informed decision.',
      author: 'Priya Sharma',
      date: '2025-01-10',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      tags: ['Data Science', 'AI Engineering', 'Career Guidance'],
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'Building Your First Portfolio: A Guide for Indian Developers',
      excerpt: 'Step-by-step guide to creating an impressive portfolio that showcases your skills and lands you your dream job in Indian IT companies.',
      author: 'Arun Mehta',
      date: '2025-01-08',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
      tags: ['Portfolio', 'Web Development', 'Indian Developers'],
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'Remote Work Best Practices for Indian Tech Professionals',
      excerpt: 'Essential tips and tools for thriving in remote work while maintaining productivity and work-life balance in Indian context.',
      author: 'Anjali Patel',
      date: '2025-01-05',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg',
      tags: ['Remote Work', 'Productivity', 'Indian Workforce'],
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'Cloud Computing Certifications: Which One for Indian Market?',
      excerpt: 'Compare popular cloud certifications from AWS, Azure, and Google Cloud to choose the right path for your career in India.',
      author: 'Vikram Singh',
      date: '2025-01-03',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      tags: ['Cloud Computing', 'Certifications', 'AWS India', 'Azure'],
      readTime: '8 min read',
    },
    {
      id: 7,
      title: 'Salary Negotiation Tips for Indian Tech Professionals',
      excerpt: 'Learn how to research, prepare, and negotiate your salary effectively to maximize your earning potential in Indian IT industry.',
      author: 'Sneha Reddy',
      date: '2025-01-01',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      tags: ['Salary Negotiation', 'Career Growth', 'Indian IT Salaries'],
      readTime: '7 min read',
    },
    {
      id: 8,
      title: 'Top 10 In-Demand Programming Languages in India 2025',
      excerpt: 'Discover which programming languages are most sought after by Indian IT companies and how to master them for career success.',
      author: 'Rahul Verma',
      date: '2024-12-28',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      tags: ['Programming', 'Career Skills', 'Indian Job Market'],
      readTime: '9 min read',
    }
  ];

  const categories = [
    { name: 'All Posts', count: 32 },
    { name: 'Career Advice', count: 15 },
    { name: 'Technology Trends', count: 10 },
    { name: 'Interview Tips', count: 8 },
    { name: 'Skill Development', count: 12 },
    { name: 'Indian IT Industry', count: 9 },
  ];

  const popularTags = [
    'JavaScript', 'Python', 'React', 'Node.js', 'Data Science',
    'Machine Learning', 'Cloud Computing', 'DevOps', 'Cybersecurity',
    'UI/UX Design', 'Career Growth', 'Remote Work', 'Indian IT',
    'Bangalore Jobs', 'Startup India', 'IT Salary', 'Tech Skills'
  ];

  return (
    <div className="bg-black text-white">
      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        
        .hero-title {
          animation: heroFadeIn 1.2s ease-out 0.3s both;
        }
        
        .hero-subtitle {
          animation: heroFadeIn 1.2s ease-out 0.6s both;
        }
        
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6 opacity-0">CareerPro Tech Blog</h1>
          <p className="hero-subtitle text-xl text-gray-300 max-w-3xl mx-auto opacity-0">
            Expert insights, career advice, and Indian IT industry trends to help you stay ahead in your tech journey.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-on-scroll">
            <h2 className="text-2xl font-bold text-yellow-400">Featured Article</h2>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden animate-on-scroll">
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
              <div className="mb-8 animate-on-scroll">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className={`bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 animate-on-scroll stagger-${(index % 6) + 1}`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs transition-all duration-300 hover:bg-yellow-400 hover:text-black"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2 transition-colors duration-300 hover:text-yellow-400">{post.title}</h3>
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
                      <button className="w-full mt-4 bg-yellow-400 text-black py-2 px-4 rounded font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
              <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                      <button className="flex items-center justify-between w-full text-left text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-700 px-2 py-1 rounded transition-colors duration-300 hover:bg-yellow-400 hover:text-black">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 rounded-lg text-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm mb-4">Get the latest career insights and Indian tech trends delivered to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded border-0 text-white bg-gray-900 placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                  <button className="w-full bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Recent Comments */}
              <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <h3 className="text-lg font-semibold mb-4">Recent Comments</h3>
                <div className="space-y-4">
                  <div className="text-sm transition-all duration-300 hover:translate-x-2">
                    <p className="text-gray-400">Rohit S. on</p>
                    <p className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">"Technical Interview at Indian IT Companies"</p>
                  </div>
                  <div className="text-sm transition-all duration-300 hover:translate-x-2">
                    <p className="text-gray-400">Neha G. on</p>
                    <p className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">"Data Science Career Path in India"</p>
                  </div>
                  <div className="text-sm transition-all duration-300 hover:translate-x-2">
                    <p className="text-gray-400">Amit K. on</p>
                    <p className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">"Building Portfolio for Indian Developers"</p>
                  </div>
                </div>
              </div>

              {/* CareerPro Stats */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-yellow-400/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">CareerPro Impact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Professionals Trained</span>
                    <span className="text-yellow-400 font-semibold">850+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Placement Rate</span>
                    <span className="text-yellow-400 font-semibold">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Partner Companies</span>
                    <span className="text-yellow-400 font-semibold">120+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Salary Hike</span>
                    <span className="text-yellow-400 font-semibold">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Turn insights into action. Explore our courses and begin your journey with 78% placement success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center group hover:scale-105">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;