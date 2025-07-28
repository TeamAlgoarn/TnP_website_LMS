import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Users, Award, Globe, Lightbulb } from 'lucide-react';

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
      description: 'We continuously innovate our teaching methods and curriculum to stay ahead.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Impact',
      description: 'Creating opportunities that connect local talent with global career possibilities.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: '15+ years in education technology and career development.',
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Training',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Former Google engineer with expertise in modern software development.',
    },
    {
      name: 'Emily Chen',
      role: 'Placement Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      bio: 'Connected 1000+ students with top-tier companies worldwide.',
    },
    {
      name: 'David Rodriguez',
      role: 'Industry Relations',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Building bridges between academia and industry for mutual success.',
    },
  ];

  const stats = [
    { number: 10, suffix: '+', label: 'Years of Excellence' },
    { number: 50, suffix: '+', label: 'Expert Trainers' },
    { number: 25, suffix: '+', label: 'Training Programs' },
    { number: 15, suffix: '+', label: 'Global Locations' },
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
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>About CareerPro</h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Empowering careers through world-class training and unparalleled placement support since 2015.
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
                To bridge the gap between academic learning and industry requirements by providing 
                comprehensive training programs that prepare students for successful careers in 
                technology and beyond. We are committed to transforming lives through education 
                and creating opportunities for professional growth.
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
                To become the global leader in career transformation by creating a world where 
                every individual has access to quality training and meaningful employment 
                opportunities. We envision a future where skills meet opportunities seamlessly, 
                driving innovation and economic growth worldwide.
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
                Founded in 2015 by Dr. Sarah Williams, CareerPro began as a small training center 
                with a big vision: to democratize access to quality technical education and career 
                opportunities. Starting with just 20 students and a single classroom, we've grown 
                into a leading training and placement center.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our journey has been marked by continuous innovation in curriculum design, 
                teaching methodologies, and industry partnerships. We've adapted to changing 
                market demands, emerging technologies, and evolving career landscapes to ensure 
                our students are always ahead of the curve.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we're proud to have trained over 5,000 students, maintained a 95% 
                placement rate, and built partnerships with 200+ companies worldwide. Our 
                success is measured not just in numbers, but in the transformed lives and 
                successful careers of our alumni.
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
              The principles that guide everything we do and shape our commitment to student success.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate professionals dedicated to your success and career growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-1000 ${
                  visibleSections.has('team') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-400"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-yellow-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
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
              Numbers that reflect our commitment to excellence and student success.
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