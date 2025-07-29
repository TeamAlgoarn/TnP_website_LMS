// import React from 'react';
// import { Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Courses = () => {
//   const courses = [
//     {
//       id: 1,
//       title: 'Full Stack Web Development',
//       description: 'Master modern web development with React, Node.js, and databases.',
//       duration: '6 months',
//       students: '150+',
//       level: 'Beginner to Advanced',
//       image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
//       features: [
//         'React & Redux',
//         'Node.js & Express',
//         'MongoDB & SQL',
//         'AWS Deployment',
//         'Real Projects',
//         'Job Guarantee'
//       ],
//       price: '$2,999',
//       placementRate: '98%',
//     },
//     {
//       id: 2,
//       title: 'Data Science & Analytics',
//       description: 'Learn Python, Machine Learning, and data visualization techniques.',
//       duration: '8 months',
//       students: '200+',
//       level: 'Intermediate',
//       image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
//       features: [
//         'Python & R',
//         'Machine Learning',
//         'Deep Learning',
//         'Tableau & Power BI',
//         'Statistical Analysis',
//         'Industry Projects'
//       ],
//       price: '$3,499',
//       placementRate: '95%',
//     },
//     {
//       id: 3,
//       title: 'Cloud Computing & DevOps',
//       description: 'Master AWS, Docker, Kubernetes, and modern DevOps practices.',
//       duration: '5 months',
//       students: '120+',
//       level: 'Intermediate to Advanced',
//       image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
//       features: [
//         'AWS & Azure',
//         'Docker & Kubernetes',
//         'CI/CD Pipelines',
//         'Infrastructure as Code',
//         'Monitoring & Security',
//         'Hands-on Labs'
//       ],
//       price: '$2,799',
//       placementRate: '97%',
//     },
//     {
//       id: 4,
//       title: 'Mobile App Development',
//       description: 'Build iOS and Android apps using React Native and Flutter.',
//       duration: '4 months',
//       students: '100+',
//       level: 'Beginner to Intermediate',
//       image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
//       features: [
//         'React Native',
//         'Flutter & Dart',
//         'Native iOS/Android',
//         'App Store Deployment',
//         'UI/UX Design',
//         'Live Projects'
//       ],
//       price: '$2,199',
//       placementRate: '92%',
//     },
//     {
//       id: 5,
//       title: 'Cybersecurity Specialist',
//       description: 'Comprehensive cybersecurity training with ethical hacking.',
//       duration: '7 months',
//       students: '80+',
//       level: 'Intermediate to Advanced',
//       image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
//       features: [
//         'Ethical Hacking',
//         'Network Security',
//         'Incident Response',
//         'Security Auditing',
//         'Compliance & Risk',
//         'Certification Prep'
//       ],
//       price: '$3,299',
//       placementRate: '94%',
//     },
//     {
//       id: 6,
//       title: 'UI/UX Design',
//       description: 'Create beautiful and user-friendly digital experiences.',
//       duration: '3 months',
//       students: '90+',
//       level: 'Beginner to Intermediate',
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
//       features: [
//         'Design Thinking',
//         'Figma & Adobe XD',
//         'User Research',
//         'Prototyping',
//         'Usability Testing',
//         'Portfolio Building'
//       ],
//       price: '$1,899',
//       placementRate: '89%',
//     },
//   ];

//   const certifications = [
//     'Industry-recognized certifications',
//     'Hands-on project experience',
//     'Expert instructor guidance',
//     'Career support and mentorship',
//     'Job placement assistance',
//     'Lifetime learning community access',
//   ];

//   return (
//     <div className="bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
//         <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg')] bg-cover bg-center opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Training Courses</h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//             Industry-designed curriculum with hands-on projects, expert mentorship, and guaranteed job placement support.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/contact"
//               className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
//             >
//               Get Course Consultation
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* What You Get */}
//       <section className="py-16 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">What You Get</h2>
//             <p className="text-gray-400">Every course includes these valuable benefits</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications.map((feature, index) => (
//               <div key={index} className="flex items-center space-x-3">
//                 <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
//                 <span className="text-gray-300">{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Courses Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Comprehensive training programs designed to meet industry demands and career goals.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((course) => (
//               <div key={course.id} className="bg-gray-900 rounded-lg overflow-hidden hover:-translate-y-2
//                     transition-all duration-200">
//                 <div className="relative h-48">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded text-sm font-semibold">
//                     {course.placementRate} Placement
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{course.title}</h3>
//                   <p className="text-gray-400 mb-4">{course.description}</p>
                  
//                   <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
//                     <div className="flex items-center">
//                       <Clock className="h-4 w-4 mr-1" />
//                       {course.duration}
//                     </div>
//                     <div className="flex items-center">
//                       <Users className="h-4 w-4 mr-1" />
//                       {course.students} enrolled
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <div className="text-sm text-gray-400 mb-2">Level: {course.level}</div>
//                     <div className="text-2xl font-bold text-yellow-400">{course.price}</div>
//                   </div>

//                   <div className="mb-6">
//                     <h4 className="font-semibold mb-2">What you'll learn:</h4>
//                     <ul className="space-y-1">
//                       {course.features.slice(0, 4).map((feature, index) => (
//                         <li key={index} className="flex items-center text-sm text-gray-400">
//                           <CheckCircle className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
//                           {feature}
//                         </li>
//                       ))}
//                       {course.features.length > 4 && (
//                         <li className="text-sm text-gray-400">
//                           +{course.features.length - 4} more topics
//                         </li>
//                       )}
//                     </ul>
//                   </div>

//                   <Link
//                     to="/contact"
//                     className="w-full bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
//                   >
//                     Enroll Now
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Learning Process */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Learning Process</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               A proven methodology that ensures your success from day one to job placement.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
//                 1
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Assessment</h3>
//               <p className="text-gray-400">Skill evaluation and personalized learning path creation</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
//                 2
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Training</h3>
//               <p className="text-gray-400">Hands-on learning with real projects and expert guidance</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
//                 3
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Practice</h3>
//               <p className="text-gray-400">Industry projects and portfolio development</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
//                 4
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Placement</h3>
//               <p className="text-gray-400">Job search support and interview preparation</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Join thousands of successful professionals who started their journey with our courses.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/contact"
//               className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
//             >
//               Schedule Free Consultation
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//             <Link
//               to="/placements"
//               className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors"
//             >
//               View Success Stories
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Courses;


// import React from 'react';
import React, { useState, useEffect, useRef } from "react";
import { Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cloud Computing");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Generic intersection observer hook for scroll animations
  const useScrollAnimation = (ref, threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold, rootMargin }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold, rootMargin]);

    return isVisible;
  };

  // Refs for different sections
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation states
  const heroVisible = useScrollAnimation(heroRef, 0.3);
  const benefitsVisible = useScrollAnimation(benefitsRef, 0.2);
  const processVisible = useScrollAnimation(processRef, 0.2);
  const ctaVisible = useScrollAnimation(ctaRef, 0.3);

  const filteredCourses = courses.filter(
    (course) => course.category === selectedCategory
  );

  // Scroll categories left/right
  const scrollCategories = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);
  
  const certifications = [
    'Industry-recognized certifications',
    'Hands-on project experience',
    'Expert instructor guidance',
    'Career support and mentorship',
    'Job placement assistance',
    'Lifetime learning community access',
  ];

  const categories = [
    "Cloud Computing",
    "Data science & AI",
    "DevOps",
    "Programming Languages",
    "Software Testing",
    "Digital Marketing",
    "Web Designing",
    "Data Warehousing",
    "Database Developer",
    "Robotic Process Automation",
    "Microsoft Training",
    "Project Management",
    "Other Training"
  ];
  
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg')] bg-cover bg-center opacity-20"></div>
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
            Professional Training Courses
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-400 ${
            heroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Industry-designed curriculum with hands-on projects, expert mentorship, and guaranteed job placement support.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            heroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50"
            >
              Get Course Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section ref={benefitsRef} className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            benefitsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl font-bold mb-4">What You Get</h2>
            <p className="text-gray-400">Every course includes these valuable benefits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 transition-all duration-700 hover:scale-105 hover:text-yellow-400 ${
                  benefitsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className={`h-5 w-5 text-yellow-400 flex-shrink-0 transition-all duration-500 ${
                  benefitsVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                }`} style={{ transitionDelay: `${index * 100 + 200}ms` }} />
                <span className="text-gray-300 transition-colors duration-300 hover:text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive training programs designed to meet industry demands and career goals.
            </p>
          </div>
          
          {/* Top Navigation with Scroll */}
          <div ref={containerRef} className="relative mb-8">
            <div className="flex items-center">
              {/* Left scroll button */}
              <button 
                onClick={() => scrollCategories('left')}
                className="hidden md:block text-gray-400 hover:text-yellow-400 mr-2 p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              
              {/* Scrollable categories */}
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-4 px-2 py-2 flex-1"
              >
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg flex-shrink-0 ${
                      selectedCategory === cat 
                        ? "bg-yellow-500 text-black font-semibold" 
                        : "text-gray-400 hover:text-blue-400 hover:bg-gray-800"
                    } transition-colors`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              {/* Right scroll button */}
              <button 
                onClick={() => scrollCategories('right')}
                className="hidden md:block text-gray-400 hover:text-yellow-400 ml-2 p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
              
              {/* Dropdown for mobile */}
              <div className="md:hidden relative flex-shrink-0 ml-2" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="text-gray-400 hover:text-blue-600 font-bold text-2xl p-2"
                >
                  ⋮
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-black right-0 mt-2 w-48 border border-gray-700 shadow-lg rounded-lg z-50">
                    {categories.map((cat, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 ${
                          selectedCategory === cat
                            ? "bg-yellow-500 text-black font-semibold"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start relative">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section ref={processRef} className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            processVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Learning Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures your success from day one to job placement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "Skill evaluation and personalized learning path creation" },
              { step: "2", title: "Training", description: "Hands-on learning with real projects and expert guidance" },
              { step: "3", title: "Practice", description: "Industry projects and portfolio development" },
              { step: "4", title: "Placement", description: "Job search support and interview preparation" }
            ].map((process, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 hover:-translate-y-4 hover:scale-110 ${
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
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 hover:text-yellow-400">{process.title}</h3>
                <p className="text-gray-400 transition-colors duration-300 hover:text-gray-300">{process.description}</p>
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
            Ready to Transform Your Career?
          </h2>
          <p className={`text-xl text-gray-400 mb-8 transition-all duration-1000 delay-400 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Join thousands of successful professionals who started their journey with our courses.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-500 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-yellow-400/50"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
            <Link
              to="/placements"
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-yellow-400/30"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Courses;