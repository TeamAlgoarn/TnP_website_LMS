import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Users, Award, Globe, Lightbulb } from 'lucide-react';
import aboutImage from '../assets/images/About/about1.jpeg';

const About = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const statsRef = useRef(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

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
          if (sectionName && !visibleSections.has(sectionName)) {
            setVisibleSections(prev => new Set([...prev, sectionName]));
            if (sectionName === 'stats' && !statsAnimated) {
              setStatsAnimated(true);
            }
          }
        }
      });
    }, observerOptions);

    const sections = [heroRef, missionRef, storyRef, valuesRef, teamRef, statsRef];
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
  }, [visibleSections, statsAnimated]);

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

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from curriculum design to student support.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Student-Centric',
      description: 'Our students are at the heart of everything we do. Their success drives our mission.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods and curriculum to stay ahead of industry trends.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Industry Connect',
      description: 'Creating opportunities that connect Indian talent with top companies and global career possibilities.',
    },
  ];

  const team = [
    {
      name: 'Anand B',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'Visionary entrepreneur with 15+ years in education technology and career development across India.',
    }
  ];

  const stats = [
    { number: 850, suffix: '+', label: 'Professionals Trained' },
    { number: 78, suffix: '%', label: 'Placement Success' },
    { number: 120, suffix: '+', label: 'Partner Companies' },
    { number: 8, suffix: '+', label: 'Years of Excellence' },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        data-section="hero"
        className={`relative py-20 bg-gradient-to-br from-black via-gray-900 to-black transition-all duration-1000 ${
          visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${aboutImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>About CareerPro</h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Empowering Indian professionals through industry-led training and unparalleled placement support since 2016.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section 
        ref={missionRef}
        data-section="mission"
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:-translate-y-1 ${
              visibleSections.has('mission') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To bridge the skill gap between academic learning and industry requirements by providing 
                comprehensive NAPS-certified training programs that prepare Indian professionals for successful careers in 
                technology and emerging sectors. We are committed to transforming lives through quality education 
                and creating opportunities for professional growth across India.
              </p>
            </div>
            <div className={`bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:-translate-y-1 ${
              visibleSections.has('mission') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become India's leading career transformation platform by creating opportunities where 
                every individual has access to quality training and meaningful employment. We envision a future where 
                Indian talent meets global opportunities seamlessly, driving innovation and economic growth nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section 
        ref={storyRef}
        data-section="story"
        className={`py-20 bg-gray-900 transition-all duration-1000 ${
          visibleSections.has('story') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000 delay-200 ${
              visibleSections.has('story') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>Our Story</h2>
            <div className={`prose prose-lg prose-invert max-w-none transition-all duration-1000 delay-400 ${
              visibleSections.has('story') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded in 2016 by Anand B, CareerPro began as a visionary initiative to address the growing 
                skill gap in India's rapidly evolving job market. Starting with a small team and a big vision 
                to democratize access to quality technical education, we've grown into a leading training and 
                placement center serving professionals across India.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our journey has been marked by strategic partnerships with top Indian IT companies like 
                Infosys, Wipro, and TCS, and continuous innovation in curriculum design focused on emerging 
                technologies. We've adapted to India's unique market demands to ensure our students are always 
                industry-ready.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we're proud to have trained over 850+ Indian professionals, maintained a 78% 
                placement rate, and built partnerships with 120+ companies across India and globally. Our 
                success is measured in the transformed lives and successful careers of our alumni who are 
                now leading innovation in top Indian and multinational companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section 
        ref={valuesRef}
        data-section="values"
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to student success in the Indian context.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-1000 ${
                  visibleSections.has('values') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-yellow-400">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section 
        ref={teamRef}
        data-section="team"
        className={`py-20 bg-gray-900 transition-all duration-1000 ${
          visibleSections.has('team') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('team') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Visionary leadership dedicated to transforming careers across India.
            </p>
          </div>
          <div className="flex justify-center">
            <div 
              className={`text-center transition-all duration-1000 ${
                visibleSections.has('team') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Anand B"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Anand B</h3>
              <p className="text-yellow-400 mb-3">Founder & CEO</p>
              <p className="text-gray-400 text-sm max-w-xs">
                Visionary entrepreneur with 15+ years in education technology and career development across India. 
                Passionate about bridging the skill gap and creating opportunities for Indian professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section 
        ref={statsRef} 
        data-section="stats"
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and student success across India.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const count = useCounter(stat.number, 2000, statsAnimated);
              return (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-1000 ${
                    visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;