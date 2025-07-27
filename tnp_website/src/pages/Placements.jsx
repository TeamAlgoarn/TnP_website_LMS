import React, { useState, useEffect, useRef } from 'react';
import { Building2, TrendingUp, Users, Award, Star, ArrowRight } from 'lucide-react';

const Placements = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsRef = useRef(null);

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

  const stats = [
    { number: 95, suffix: '%', label: 'Placement Rate', icon: <TrendingUp className="h-6 w-6" /> },
    { number: 75, suffix: 'K', label: 'Average Package', icon: <Award className="h-6 w-6" />, prefix: '$' },
    { number: 200, suffix: '+', label: 'Partner Companies', icon: <Building2 className="h-6 w-6" /> },
    { number: 5000, suffix: '+', label: 'Alumni Placed', icon: <Users className="h-6 w-6" /> },
  ];

  const companies = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      tier: 'Premium'
    },
    {
      name: "Amazon",
      logo: "https://tse2.mm.bing.net/th/id/OIP.cs6rsE5Ogsa4Hm_2Y6hiPwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3https://seeklogo.com/vector-logo/286206/amazonhttps://images.seeklogo.com/logo-png/28/2/amazon-logo-png_seeklogo-286206.pnghttps://seeklogo.com/vector-logo/291390/amazon",
      tier: 'Premium'
    },
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
      name: "Dell",
      logo: "https://static.vecteezy.com/system/resources/previews/021/514/860/original/dell-logo-brand-computer-symbol-white-design-usa-laptop-illustration-with-black-background-free-vector.jpg",
      tier: 'Premium'
    },
    {
        name: "Microsoft",
        logo: "https://tse4.mm.bing.net/th/id/OIP.qbsTDbB9qKP6pBQ0Rl9bpQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
        tier: 'Premium'
    },
  ];

  const successStories = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer',
      company: 'Google',
      package: '$120K',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      story: 'From a non-tech background to Google in 8 months. The comprehensive training and placement support made it possible.',
      course: 'Full Stack Development',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist',
      company: 'Microsoft',
      package: '$110K',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      story: 'The data science program exceeded my expectations. Real projects and industry mentorship were game-changers.',
      course: 'Data Science & Analytics',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Cloud Engineer',
      company: 'Amazon',
      package: '$105K',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      story: 'AWS certification and hands-on experience helped me land my dream job at Amazon Web Services.',
      course: 'Cloud Computing & DevOps',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer',
      company: 'Apple',
      package: '$115K',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      story: 'The mobile development course was perfectly aligned with industry needs. Now I am building apps for millions.',
      course: 'Mobile App Development',
      rating: 5,
    },
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
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Placement Excellence</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            95% placement rate with top-tier companies. Your dream job is just one course away.
          </p>
          <button
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center"
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
                <div key={index} className="text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partner Companies</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We've built strong relationships with industry leaders to provide you with the best opportunities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors hover:-translate-y-2
                    transition-all duration-200">
                <img
                    src={company.logo}
                    alt={company.name}
                    className="w-20 h-20 mx-auto"
                  />
                <h3 className="font-semibold mb-1">{company.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  company.tier === 'Premium' 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-gray-700 text-gray-300'
                }`}>
                  {company.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories from our alumni who transformed their careers and achieved their goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 group
                    transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition-colors duration-200">{story.name}</h3>
                    <p className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200">{story.role}</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">{story.company} • {story.package}</p>
                  </div>
                  <div className="flex">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200" style={{transitionDelay: `${i * 50}ms`}} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-200">"{story.story}"</p>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                  Course: <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200">{story.course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Placement Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A systematic approach to ensure you're fully prepared for your dream job.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {placementProcess.map((process, index) => (
              <div key={index} className="text-center hover:-translate-y-2
                    transition-all duration-200">
                <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Ranges */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Salary Ranges by Role</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Average salary packages our alumni receive across different roles and experience levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:-translate-y-2
                    transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Entry Level (0-2 years)</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Software Developer</span>
                  <span className="font-semibold">$60K - $80K</span>
                </li>
                <li className="flex justify-between">
                  <span>Data Analyst</span>
                  <span className="font-semibold">$55K - $75K</span>
                </li>
                <li className="flex justify-between">
                  <span>UI/UX Designer</span>
                  <span className="font-semibold">$50K - $70K</span>
                </li>
                <li className="flex justify-between">
                  <span>Cloud Associate</span>
                  <span className="font-semibold">$65K - $85K</span>
                </li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:-translate-y-2
                    transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Mid Level (2-5 years)</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Senior Developer</span>
                  <span className="font-semibold">$90K - $120K</span>
                </li>
                <li className="flex justify-between">
                  <span>Data Scientist</span>
                  <span className="font-semibold">$100K - $130K</span>
                </li>
                <li className="flex justify-between">
                  <span>Product Designer</span>
                  <span className="font-semibold">$85K - $115K</span>
                </li>
                <li className="flex justify-between">
                  <span>DevOps Engineer</span>
                  <span className="font-semibold">$95K - $125K</span>
                </li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:-translate-y-2
                    transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Senior Level (5+ years)</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Tech Lead</span>
                  <span className="font-semibold">$140K - $180K</span>
                </li>
                <li className="flex justify-between">
                  <span>Principal Engineer</span>
                  <span className="font-semibold">$160K - $220K</span>
                </li>
                <li className="flex justify-between">
                  <span>Design Director</span>
                  <span className="font-semibold">$130K - $170K</span>
                </li>
                <li className="flex justify-between">
                  <span>Solutions Architect</span>
                  <span className="font-semibold">$150K - $200K</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Career?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join our next batch and become part of our successful alumni network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
            >
              Apply for Placement Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors"
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