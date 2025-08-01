import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import  ContactPage  from '../components/ContactPage';
import { ArrowRight, Users, Award, TrendingUp, Star, CheckCircle, X, User, Mail, Lock, Phone, Send } from 'lucide-react';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const statsRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  const navigate = useNavigate();

  // Show modal after 3-4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            setVisibleSections(prev => new Set([...prev, sectionName]));
          }
          if (sectionName === 'stats' && !statsAnimated) {
            setStatsAnimated(true);
          }
        }
      });
    }, observerOptions);

    const sections = [heroRef, statsRef, servicesRef, testimonialsRef, ctaRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [statsAnimated]);

  // Counter animation hook
  const useCounter = (end, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldStart) return;

      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration, shouldStart]);

    return count;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const stats = [
    { number: 5000, suffix: '+', label: 'Students Trained' },
    { number: 95, suffix: '%', label: 'Placement Rate' },
    { number: 200, suffix: '+', label: 'Partner Companies' },
    { number: 4.8, suffix: '/5', label: 'Average Rating', isDecimal: true },
  ];

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Professional Training',
      description: 'Industry-relevant courses designed by experts to match current market demands.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Placement Support',
      description: 'Dedicated placement team ensuring 95% job placement success rate.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Career Growth',
      description: 'Continuous mentorship and career guidance for long-term success.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'CareerPro transformed my career. The training was exceptional and the placement support was outstanding.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist at Microsoft',
      content: 'The hands-on approach and industry connections helped me land my dream job in just 3 months.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager at Amazon',
      content: 'Best investment I made for my career. The mentorship program is truly world-class.',
      rating: 5,
    },
  ];

  const closeModal = () => {
    setShowModal(false);
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here
      console.log('Login submitted');
    } else {
      // Handle contact form submission
      setIsSubmitted(true);
      console.log('Contact form submitted:', formData);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: '',
        });
      }, 3000);
    }
  };

  const handleAuthSubmit = () => {
    // Handle auth form submission logic here
    console.log(isLogin ? 'Login submitted' : 'Signup submitted');
    closeModal();
  };

  // Navigation handlers
  const handleExploreCourses = () => {
    navigate('/courses');
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  const handleViewPlacements = () => {
    navigate('/placements');
  };

  return (
    <div className="bg-black text-white">
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-md relative animate-[fadeIn_0.3s_ease-out]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-8">
              {/* Toggle Buttons */}
              <div className="flex mb-6 bg-black rounded-lg p-1">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    isLogin
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    !isLogin
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Contact Us
                </button>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2 text-yellow-400">
                  {isLogin ? 'Welcome Back!' : 'Send us a Message'}
                </h2>
                <p className="text-gray-400">
                  {isLogin 
                    ? 'Sign in to continue your learning journey' 
                    : "Ready to transform your career? Let's discuss how we can help you achieve your goals."
                  }
                </p>
              </div>

              {isLogin ? (
                /* Login Form */
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <button
                    onClick={handleAuthSubmit}
                    className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              ) : (
                  /* Contact Form */
                  <div className=" inset-0 flex ">
                    <div className="bg-gray-900 text-white w-full max-w-3xl rounded-lg shadow-lg p-4 max-h-[50vh] overflow-y-auto ">
                      <ContactPage />
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section 
        ref={heroRef}
        data-section="hero"
        className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black transition-all duration-1000 ${
          visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent leading-tight px-4 transition-all duration-1000 delay-300 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Transform Your Career with{' '}
            <span className="block sm:inline">Professional Training</span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join thousands of successful professionals who started their journey with CareerPro.{' '}
            Get industry-relevant training and guaranteed placement support.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center px-4 transition-all duration-1000 delay-700 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={handleExploreCourses}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center min-w-fit"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={handleGetStarted}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors min-w-fit"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef} 
        data-section="stats"
        className={`py-16 bg-gray-900 transition-all duration-1000 ${
          visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const count = useCounter(stat.number, 2000, statsAnimated);
              return (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-1000 ${
                    visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.isDecimal ? (count / 10).toFixed(1) : count}{stat.suffix}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        data-section="services"
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions to accelerate your career growth and ensure successful job placement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:-translate-y-1 ${
                  visibleSections.has('services') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className="text-yellow-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        data-section="testimonials"
        className={`py-20 bg-gray-900 transition-all duration-1000 ${
          visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from our alumni who have achieved remarkable career success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-black p-6 rounded-lg border border-gray-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 group transition-all duration-500 cursor-pointer ${
                  visibleSections.has('testimonials') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200" style={{transitionDelay: `${i * 50}ms`}} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-200">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold group-hover:text-yellow-400 transition-colors duration-200">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        data-section="cta"
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 delay-200 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Ready to Start Your Journey?</h2>
          <p className={`text-xl text-gray-400 mb-8 transition-all duration-1000 delay-400 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join our next batch and take the first step towards your dream career.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={handleContactUs}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={handleViewPlacements}
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors"
            >
              View Placements
            </button>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;