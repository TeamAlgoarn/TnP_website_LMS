import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, TrendingUp, Users, Award, Star, ArrowRight } from 'lucide-react';

const Placements = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const statsRef = useRef(null);
  const navigate = useNavigate();

  // Generic intersection observer for scroll animations
  const useScrollAnimation = (ref, threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold]);

    return isVisible;
  };

  // Refs for different sections
  const heroRef = useRef(null);
  const companiesRef = useRef(null);
  const storiesRef = useRef(null);
  const processRef = useRef(null);
  const salaryRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation states
  const heroVisible = useScrollAnimation(heroRef, 0.3);
  const companiesVisible = useScrollAnimation(companiesRef, 0.2);
  const storiesVisible = useScrollAnimation(storiesRef, 0.2);
  const processVisible = useScrollAnimation(processRef, 0.2);
  const salaryVisible = useScrollAnimation(salaryRef, 0.2);
  const ctaVisible = useScrollAnimation(ctaRef, 0.3);

  // Stats animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [statsAnimated]);

  // Counter animation hook
  const useCounter = (end, duration = 2000, shouldStart = false, isPercentage = false) => {
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

  // Navigation handlers
  const handleStartJourney = () => {
    navigate('/login');
  };

  const handleApplyPlacementSupport = () => {
    navigate('/contact');
  };

  const handleViewCourses = () => {
    navigate('/courses');
  };

  const stats = [
    { number: 78, suffix: '%', label: 'Placement Rate', icon: <TrendingUp className="h-6 w-6" /> },
    { number: 9, suffix: 'LPA', label: 'Average Package', icon: <Award className="h-6 w-6" />, prefix: '₹' },
    { number: 120, suffix: '+', label: 'Partner Companies', icon: <Building2 className="h-6 w-6" /> },
    { number: 850, suffix: '+', label: 'Alumni Placed', icon: <Users className="h-6 w-6" /> },
  ];

  const companies = [
    {
      name: "TCS",
      logo: "https://indiancompanies.in/wp-content/uploads/2020/05/TCS-Logo-Tata-consultancy-service-1920x1144.png",
      tier: 'Premium'
    },
    {
      name: "Infosys",
      logo: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-png.png",
      tier: 'Premium'
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Wipro_Logo_2023.svg/2560px-Wipro_Logo_2023.svg.png",
      tier: 'Premium'
    },
    {
      name: "HCL Technologies",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/HCL_Technologies_logo.svg/2560px-HCL_Technologies_logo.svg.png",
      tier: 'Premium'
    },
    {
      name: "Tech Mahindra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tech_Mahindra_Logo.svg/2560px-Tech_Mahindra_Logo.svg.png",
      tier: 'Premium'
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png",
      tier: 'Premium'
    },
    {
      name: "Cognizant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Cognizant_logo_2022.svg/2560px-Cognizant_logo_2022.svg.png",
      tier: 'Premium'
    },
    {
      name: "Capgemini",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Capgemini_Logo.svg/2560px-Capgemini_Logo.svg.png",
      tier: 'Premium'
    },
    {
      name: "IBM India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
      tier: 'Premium'
    },
    {
      name: "Microsoft India",
      logo: "https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
      tier: 'Premium'
    },
    {
      name: "Amazon India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      tier: 'Premium'
    },
    {
      name: "Google India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      tier: 'Premium'
    },
    {
      name: "Dell India",
      logo: "https://static.vecteezy.com/system/resources/previews/021/514/860/original/dell-logo-brand-computer-symbol-white-design-usa-laptop-illustration-with-black-background-free-vector.jpg",
      tier: 'Premium'
    },
    {
      name: "Intel India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/2560px-Intel_logo_%282006-2020%29.svg.png",
      tier: 'Premium'
    },
    {
      name: "Oracle India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
      tier: 'Premium'
    },
    {
      name: "SAP India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png",
      tier: 'Premium'
    },
    {
      name: "Mindtree",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mindtree_logo.svg/2560px-Mindtree_logo.svg.png",
      tier: 'Standard'
    },
    {
      name: "L&T Infotech",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/LTI_Logo.svg/2560px-LTI_Logo.svg.png",
      tier: 'Standard'
    },
    {
      name: "Mphasis",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mphasis_logo.svg/2560px-Mphasis_logo.svg.png",
      tier: 'Standard'
    },
    {
      name: "Hexaware",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Hexaware_Technologies_logo.svg/2560px-Hexaware_Technologies_logo.svg.png",
      tier: 'Standard'
    }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Infosys',
      package: '₹12 LPA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      story: 'From a small town in Uttar Pradesh to Infosys Bangalore. CareerPro\'s training and placement support helped me achieve my dreams in just 6 months.',
      course: 'Full Stack Development',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Data Analyst',
      company: 'TCS',
      package: '₹9 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      story: 'As a mechanical engineer, I never thought I could switch to IT. CareerPro made it possible with their structured Data Science program and dedicated placement cell.',
      course: 'Data Science & Analytics',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      role: 'Cloud Engineer',
      company: 'Wipro',
      package: '₹14 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      story: 'The AWS certification and real-time projects at CareerPro gave me the confidence to crack Wipro interviews. Got placed even before course completion!',
      course: 'Cloud Computing & DevOps',
      rating: 5,
    },
    {
      name: 'Arun Mehta',
      role: 'Mobile Developer',
      company: 'Tech Mahindra',
      package: '₹11 LPA',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      story: 'Coming from a non-IT background, CareerPro\'s mobile development course was perfectly structured. The placement team ensured I got multiple offers.',
      course: 'Mobile App Development',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'Cybersecurity Analyst',
      company: 'HCL Technologies',
      package: '₹13 LPA',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      story: 'The cybersecurity program at CareerPro is industry-relevant. Got placed at HCL with a great package and working on exciting security projects.',
      course: 'Cybersecurity Specialist',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'UI/UX Designer',
      company: 'Accenture',
      package: '₹10 LPA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      story: 'CareerPro helped me transition from graphic design to UI/UX. The portfolio building sessions and mock interviews were incredibly helpful for Accenture.',
      course: 'UI/UX Design',
      rating: 5,
    }
  ];

  const placementProcess = [
    {
      step: '1',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of technical and soft skills to identify strengths and areas for improvement.',
    },
    {
      step: '2',
      title: 'Resume Building',
      description: 'Professional resume creation with industry-specific keywords and achievement highlighting.',
    },
    {
      step: '3',
      title: 'Interview Prep',
      description: 'Mock interviews, technical assessments, and behavioral question preparation.',
    },
    {
      step: '4',
      title: 'Company Matching',
      description: 'Strategic matching with partner companies based on skills, preferences, and career goals.',
    },
    {
      step: '5',
      title: 'Offer Negotiation',
      description: 'Support in salary negotiation and contract terms to ensure the best possible package.',
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          heroVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            heroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Placement Excellence
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-400 ${
            heroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            78% placement rate with 120+ top Indian and multinational companies. Your dream job is just one course away.
          </p>
          <button
            onClick={handleStartJourney}
            className={`bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-500 inline-flex items-center hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 delay-600 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Placement Stats */}
      <section ref={statsRef} className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const count = useCounter(stat.number, 2000, statsAnimated);
              return (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 ${
                    statsAnimated 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                    statsAnimated ? 'animate-bounce' : ''
                  }`} style={{ animationDelay: `${index * 200}ms`, animationDuration: '1s', animationFillMode: 'both' }}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.prefix || ''}{count}{stat.suffix}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section ref={companiesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            companiesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partner Companies</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We've built strong relationships with 120+ Indian and global companies to provide you with the best opportunities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 hover:border hover:border-yellow-400/50 ${
                  companiesVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-8 rotate-3'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                    src={company.logo}
                    alt={company.name}
                    className="w-20 h-20 mx-auto transition-transform duration-300 hover:scale-110"
                  />
                <h3 className="font-semibold mb-1 transition-colors duration-300 hover:text-yellow-400">{company.name}</h3>
                <span className={`text-xs px-2 py-1 rounded transition-all duration-300 ${
                  company.tier === 'Premium' 
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}>
                  {company.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section ref={storiesRef} className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            storiesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories from our Indian alumni who transformed their careers and achieved their dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className={`bg-black p-6 rounded-lg border border-gray-800 hover:-translate-y-4 hover:shadow-2xl hover:shadow-yellow-400/30 hover:border-yellow-400/70 group transition-all duration-500 cursor-pointer hover:scale-105 ${
                  storiesVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-12 -rotate-1'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover group-hover:scale-125 transition-all duration-500 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-yellow-400/50"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-105">{story.name}</h3>
                    <p className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">{story.role}</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{story.company} • {story.package}</p>
                  </div>
                  <div className="flex">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current group-hover:scale-125 transition-all duration-300 group-hover:rotate-12" style={{transitionDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">"{story.story}"</p>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Course: <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 group-hover:font-semibold">{story.course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section ref={processRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            processVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Placement Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A systematic approach to ensure you're fully prepared for your dream job in Indian IT industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {placementProcess.map((process, index) => (
              <div 
                key={index} 
                className={`text-center hover:-translate-y-4 transition-all duration-500 hover:scale-110 ${
                  processVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg transition-all duration-500 hover:scale-125 hover:rotate-180 hover:shadow-lg hover:shadow-yellow-400/50 ${
                  processVisible ? 'animate-pulse' : ''
                }`} style={{ animationDelay: `${index * 200}ms`, animationDuration: '2s' }}>
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 transition-colors duration-300 hover:text-yellow-400">{process.title}</h3>
                <p className="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Ranges */}
      <section ref={salaryRef} className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            salaryVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Salary Ranges by Role</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Average salary packages our Indian alumni receive across different roles and experience levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Entry Level (0-2 years)',
                roles: [
                  { name: 'Software Developer', range: '₹6 - ₹12 LPA' },
                  { name: 'Data Analyst', range: '₹5 - ₹10 LPA' },
                  { name: 'UI/UX Designer', range: '₹4 - ₹8 LPA' },
                  { name: 'Cloud Associate', range: '₹7 - ₹13 LPA' }
                ]
              },
              {
                title: 'Mid Level (2-5 years)',
                roles: [
                  { name: 'Senior Developer', range: '₹12 - ₹20 LPA' },
                  { name: 'Data Scientist', range: '₹15 - ₹25 LPA' },
                  { name: 'Product Designer', range: '₹10 - ₹18 LPA' },
                  { name: 'DevOps Engineer', range: '₹14 - ₹22 LPA' }
                ]
              },
              {
                title: 'Senior Level (5+ years)',
                roles: [
                  { name: 'Tech Lead', range: '₹22 - ₹35 LPA' },
                  { name: 'Principal Engineer', range: '₹30 - ₹50 LPA' },
                  { name: 'Design Director', range: '₹20 - ₹32 LPA' },
                  { name: 'Solutions Architect', range: '₹25 - ₹40 LPA' }
                ]
              }
            ].map((level, index) => (
              <div 
                key={index} 
                className={`bg-black p-6 rounded-lg border border-gray-800 hover:-translate-y-4 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 ${
                  salaryVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-12 rotate-1'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-yellow-400 transition-all duration-300 hover:scale-105">{level.title}</h3>
                <ul className="space-y-3">
                  {level.roles.map((role, roleIndex) => (
                    <li 
                      key={roleIndex} 
                      className={`flex justify-between transition-all duration-300 hover:text-yellow-400 hover:scale-105 ${
                        salaryVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${(index * 200) + (roleIndex * 100)}ms` }}
                    >
                      <span>{role.name}</span>
                      <span className="font-semibold">{role.range}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          ctaVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 delay-200 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Ready to Launch Your Career?
          </h2>
          <p className={`text-xl text-gray-400 mb-8 transition-all duration-1000 delay-400 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Join 850+ successful Indian professionals who transformed their careers with CareerPro.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleApplyPlacementSupport}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-500 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-yellow-400/50"
            >
              Apply for Placement Support
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
            <button
              onClick={handleViewCourses}
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-yellow-400/30"
            >
              View Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;