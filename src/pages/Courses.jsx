import React, { useState, useEffect, useRef } from "react";
import { Clock, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import bgImage from "../assets/images/Courses/background.jpeg";

const Courses = () => {
  // const [selectedCategory, setSelectedCategory] = useState("Cloud Computing");
  const [selectedCategory, setSelectedCategory] = useState("SAP"); // 🟡 added
  const filteredCourses = courses.filter(
    // 🟡 added
    (course) => course.category === selectedCategory
  );

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Generic intersection observer hook for scroll animations
  const useScrollAnimation = (
    ref,
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px"
  ) => {
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

  // const filteredCourses = courses.filter(
  //   (course) => course.category === selectedCategory
  // );

  // Scroll categories left/right
  const scrollCategories = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
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
    "Industry-recognized certifications",
    "Hands-on project experience",
    "Expert instructor guidance",
    "Career support and mentorship",
    "Job placement assistance",
    "Lifetime learning community access",
  ];

  const categories = [
    "SAP",
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
    "Other Training",
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Professional Training Courses
          </h1>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-400 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Industry-designed curriculum with hands-on projects, expert
            mentorship, and guaranteed job placement support. Join 850+ Indian
            professionals trained through Learnovia's industry-aligned programs.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
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
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              benefitsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">What You Get</h2>
            <p className="text-gray-400">
              Every course includes these valuable benefits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 transition-all duration-700 hover:scale-105 hover:text-yellow-400 ${
                  benefitsVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle
                  className={`h-5 w-5 text-yellow-400 flex-shrink-0 transition-all duration-500 ${
                    benefitsVisible ? "scale-100 rotate-0" : "scale-0 rotate-45"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                />
                <span className="text-gray-300 transition-colors duration-300 hover:text-white">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Career Path
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive training programs designed to meet Indian industry
              demands and career goals. Get placement-ready with our
              industry-partnered curriculum.
            </p>
          </div>

          {/* Top Navigation with Scroll */}
          <div ref={containerRef} className="relative mb-8">
            <div className="flex items-center">
              {/* Left scroll button */}
              <button
                onClick={() => scrollCategories("left")}
                className="hidden md:block text-gray-400 hover:text-yellow-400 mr-2 p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>

              {/* Scrollable categories */}
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-4 px-2 py-2 flex-1"
              >
                {/* {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg flex-shrink-0 ${
                      selectedCategory === cat
                        ? "bg-yellow-500 text-black font-semibold"
                        : "text-gray-400 hover:text-yellow-400 hover:bg-gray-800"
                    } transition-colors`}
                  >
                    {cat}
                  </button>
                ))} */}
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)} // 🟡 make sure this line is there
                    className={`whitespace-nowrap px-4 py-2 rounded-lg flex-shrink-0 ${
                      selectedCategory === cat
                        ? "bg-yellow-500 text-black font-semibold"
                        : "text-gray-400 hover:text-yellow-400 hover:bg-gray-800"
                    } transition-colors`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Right scroll button */}
              <button
                onClick={() => scrollCategories("right")}
                className="hidden md:block text-gray-400 hover:text-yellow-400 ml-2 p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Dropdown for mobile */}
              <div
                className="md:hidden relative flex-shrink-0 ml-2"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="text-gray-400 hover:text-yellow-400 font-bold text-2xl p-2"
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
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start relative">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))} */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section ref={processRef} className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              processVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Learning Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures your success from day one to job
              placement with 78% success rate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Skill Assessment",
                description:
                  "Comprehensive evaluation and personalized learning path creation",
              },
              {
                step: "2",
                title: "Industry Training",
                description:
                  "Hands-on learning with real projects and expert guidance",
              },
              {
                step: "3",
                title: "Project Practice",
                description:
                  "Industry projects and portfolio development for Indian companies",
              },
              {
                step: "4",
                title: "Job Placement",
                description:
                  "Dedicated placement support and interview preparation",
              },
            ].map((process, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 hover:-translate-y-4 hover:scale-110 ${
                  processVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg transition-all duration-500 hover:scale-125 hover:rotate-180 hover:shadow-lg hover:shadow-yellow-400/50 ${
                    processVisible ? "animate-pulse" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationDuration: "2s",
                  }}
                >
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 hover:text-yellow-400">
                  {process.title}
                </h3>
                <p className="text-gray-400 transition-colors duration-300 hover:text-gray-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20">
        <div
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            ctaVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 delay-200 ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Ready to Transform Your Career?
          </h2>
          <p
            className={`text-xl text-gray-400 mb-8 transition-all duration-1000 delay-400 ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Join 850+ successful Indian professionals who started their journey
            with our courses and got placed in top companies.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-500 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-yellow-400/50 group"
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

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, CheckCircle } from "lucide-react";
// import { courses } from "../data/courses";
// import CourseCard from "../components/CourseCard";
// import bgImage from "../assets/images/Courses/background.jpeg";

// // update path if needed

// // 🔹 Categories (SAP first)
// const categories = [
//   "SAP",
//   "Cloud Computing",
//   "Data science & AI",
//   "DevOps",
//   "Programming Languages",
//   "Software Testing",
//   "Digital Marketing",
//   "Web Designing",
//   "Data Warehousing",
//   "Database Developer",
//   "Robotic Process Automation",
//   "Microsoft Training",
//   "Project Management",
//   "Other Training",
// ];

// const Courses = () => {
//   // 🔹 State for category
//   const [selectedCategory, setSelectedCategory] = useState("SAP");
//   const filteredCourses = courses.filter(
//     (course) => course.category === selectedCategory
//   );

//   // 🔹 Refs and visibility animations (you already had these)
//   const heroRef = useRef(null);
//   const benefitsRef = useRef(null);
//   const processRef = useRef(null);
//   const ctaRef = useRef(null);
//   const containerRef = useRef(null);
//   const scrollContainerRef = useRef(null);
//   const dropdownRef = useRef(null);

//   const [heroVisible, setHeroVisible] = useState(false);
//   const [benefitsVisible, setBenefitsVisible] = useState(false);
//   const [processVisible, setProcessVisible] = useState(false);
//   const [ctaVisible, setCtaVisible] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const certifications = [
//     "Globally recognized certification",
//     "Lifetime access to recordings",
//     "Placement assistance support",
//     "Industry-based real-time projects",
//     "One-to-one mentoring & guidance",
//     "Live doubt clearing sessions",
//   ];

//   // 🔹 Scroll buttons for categories
//   const scrollCategories = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 200;
//       scrollContainerRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   // 🔹 Visibility animation observers
//   useEffect(() => {
//     const sections = [
//       { ref: heroRef, setVisible: setHeroVisible },
//       { ref: benefitsRef, setVisible: setBenefitsVisible },
//       { ref: processRef, setVisible: setProcessVisible },
//       { ref: ctaRef, setVisible: setCtaVisible },
//     ];

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const section = sections.find((s) => s.ref.current === entry.target);
//           if (section && entry.isIntersecting) section.setVisible(true);
//         });
//       },
//       { threshold: 0.2 }
//     );

//     sections.forEach((s) => s.ref.current && observer.observe(s.ref.current));
//     return () => observer.disconnect();
//   }, []);

//   // 🔹 Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 🔹 UI
//   return (
//     <div className="bg-black text-white overflow-hidden">
//       {/* ================= HERO SECTION ================= */}
//       <section
//         ref={heroRef}
//         className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{ backgroundImage: `url(${bgImage})` }}
//         ></div>
//         <div
//           className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
//             heroVisible
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-12"
//           }`}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Professional Training Courses
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//             Industry-designed curriculum with hands-on projects, expert
//             mentorship, and guaranteed job placement support. Join 850+ Indian
//             professionals trained through Learnovia's programs.
//           </p>
//           <Link
//             to="/contact"
//             className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50"
//           >
//             Get Course Consultation
//           </Link>
//         </div>
//       </section>

//       {/* ================= WHAT YOU GET ================= */}
//       <section ref={benefitsRef} className="py-16 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">What You Get</h2>
//             <p className="text-gray-400">
//               Every course includes these valuable benefits
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center space-x-3 transition-all duration-700 hover:scale-105 hover:text-yellow-400"
//               >
//                 <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
//                 <span className="text-gray-300">{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= COURSES GRID ================= */}
//       <section className="py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Choose Your Career Path
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Comprehensive training programs designed to meet Indian industry
//               demands and career goals. Get placement-ready with our
//               industry-partnered curriculum
//             </p>
//           </div>

//           {/* Category Scroll */}
//           <div ref={containerRef} className="relative mb-8">
//             <div className="flex items-center">
//               <button
//                 onClick={() => scrollCategories("left")}
//                 className="hidden md:block text-gray-400 hover:text-yellow-400 mr-2 p-2 rounded-full hover:bg-gray-800"
//               >
//                 <ArrowRight className="h-5 w-5 rotate-180" />
//               </button>

//               {/* Scrollable category buttons */}
//               <div
//                 ref={scrollContainerRef}
//                 className="flex overflow-x-auto scrollbar-hide space-x-4 px-2 py-2 flex-1"
//               >
//                 {categories.map((cat, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`whitespace-nowrap px-4 py-2 rounded-lg flex-shrink-0 ${
//                       selectedCategory === cat
//                         ? "bg-yellow-500 text-black font-semibold"
//                         : "text-gray-400 hover:text-yellow-400 hover:bg-gray-800"
//                     } transition-colors`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>

//               <button
//                 onClick={() => scrollCategories("right")}
//                 className="hidden md:block text-gray-400 hover:text-yellow-400 ml-2 p-2 rounded-full hover:bg-gray-800"
//               >
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>

//           {/* Course Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
//             {filteredCourses.map((course) => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section ref={ctaRef} className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Transform Your Career?
//           </h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Join 850+ successful Indian professionals who started their journey
//             with Learnovia and got placed in top companies.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/contact"
//               className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-500 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-yellow-400/50 group"
//             >
//               Schedule Free Consultation
//               <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
//             </Link>
//             <Link
//               to="/placements"
//               className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-yellow-400/30"
//             >
//               View Success Stories
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Hide scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Courses;
