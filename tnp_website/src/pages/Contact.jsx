import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactPage from '../components/ContactPage';
import contImage from '../assets/images/Contact/cont.jpeg';

// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

  // const [errors, setErrors] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  
  // // Validation rules
  // const validate = (name, value) => {
  //   let error = "";
  //   switch (name) {
  //     case "name":
  //       if (!value.trim()) error = "Name is required.";
  //       break;
  //     case "email":
  //       if (!/\S+@\S+\.\S+/.test(value)) error = "Enter a valid email.";
  //       break;
  //     case "phone":
  //       if (value && !/^\d{10}$/.test(value))
  //         error = "Enter a valid 10-digit phone number.";
  //       break;
  //     default:
  //       break;
  //   }
  //   return error;
  // };

  //  // Real-time validation
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setErrors({ ...errors, [name]: validate(name, value) });
  // };
  
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   // Handle form submission here
    
  //   // Validate all fields
  //   const newErrors = {};
  //   Object.keys(formData).forEach((key) => {
  //     const error = validate(key, formData[key]);
  //     if (error) newErrors[key] = error;
  //   });

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   // Submit to Formspree
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch("https://formspree.io/f/xvgqqwqy", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
    
  //           if (response.ok) {
  //       setIsSubmitted(true);
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //       });
  //       setTimeout(() => setIsSubmitted(false), 3000);
  //     } else {
  //       alert("Failed to submit. Please try again.");
  //     }
  //   } catch (error) {
  //     alert("Error submitting form.");
  //   }
  //   setIsLoading(false);
  // };

  // Animation state
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  // Initialize Intersection Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animateId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all elements with animation IDs
    const elementsToObserve = document.querySelectorAll('[data-animate-id]');
    elementsToObserve.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+91 8884457701'],
      subtitle: 'Mon-Sat 9am-7pm',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@learnovia.in'],
      subtitle: 'We reply within 2 hours',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: ['Pole Workspaces 33/2 Racha, Galaxy 21st,', 'Marenahalli, Bangalore North, Vijayanagar,', 'Bangalore, Karnataka-560040'],
      subtitle: 'Visit our Bangalore campus',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      details: ['Mon-Sat: 9:00 AM - 7:00 PM', 'Sun: 10:00 AM - 2:00 PM'],
      subtitle: '24/7 online support available',
    },
  ];

  const faqs = [
    {
      question: 'What are the admission requirements for Indian students?',
      answer: 'Basic computer literacy and passion for learning. No prior programming experience required for beginner courses. We welcome students from all educational backgrounds.',
    },
    {
      question: 'Do you provide job placement assistance in India?',
      answer: 'Yes, we have a 78% placement rate with 120+ partner Indian companies including TCS, Infosys, Wipro, and more. Dedicated career support with resume building and interview preparation.',
    },
    {
      question: 'Are there any EMI or financing options available?',
      answer: 'We offer flexible EMI options, education loans through partner banks, and income-share agreements to make quality education accessible to all Indian students.',
    },
    {
      question: 'What is the class schedule for working professionals?',
      answer: 'We offer flexible batches including weekday evenings, weekend batches, and online options to accommodate working professionals and college students across India.',
    },
    {
      question: 'Do you provide certificates recognized by Indian companies?',
      answer: 'Yes, we provide industry-recognized certificates and also help with NASSCOM and other relevant certifications valued by Indian IT companies.',
    },
  ];

  // Animation helper function
  const getAnimationClass = (animationId, baseClass = '') => {
    const isVisible = visibleElements.has(animationId);
    return `${baseClass} transition-all duration-700 ease-out ${
      isVisible 
        ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
        : 'opacity-0 translate-y-8 scale-95'
    }`;
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
       <div 
                 className="absolute inset-0 bg-cover bg-center opacity-20"
                 style={{ backgroundImage: `url(${contImage})` }}
               ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            data-animate-id="hero-title"
            className={getAnimationClass('hero-title')}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with Learnovia</h1>
          </div>
          <div 
            data-animate-id="hero-subtitle"
            className={getAnimationClass('hero-subtitle', 'delay-200')}
          >
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your career in the Indian IT industry? Let's discuss how we can help you achieve your goals with 78% placement success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              data-animate-id="contact-form"
              className={getAnimationClass('contact-form', 'bg-gray-900 p-8 rounded-lg')}
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            {/*  {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                          errors.name ? "border-red-500" : "border-gray-600"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                          errors.email ? "border-red-500" : "border-gray-600"
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div> */}

                  {/* Phone */}
                  {/* <div>
                    <label className="block text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                        errors.phone ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  {/* <div>
                    <label className="block text-sm mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Tell us about your goals..."
                    />
                  </div> */}

                  {/* <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
*/}
            <ContactPage></ContactPage>
            </div>  

            {/* Contact Information */}
            <div className="space-y-8">
              <div 
                data-animate-id="contact-info-title"
                className={getAnimationClass('contact-info-title')}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-6">
                  Reach out to us for career guidance, course information, or placement assistance. 
                  We're here to help you succeed in the Indian IT industry.
                </p>
              </div>
              <div 
                data-animate-id="contact-info-grid"
                className={getAnimationClass('contact-info-grid', 'grid grid-cols-1 sm:grid-cols-2 gap-6 delay-300')}
              >
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    data-animate-id={`contact-card-${index}`}
                    className={getAnimationClass(`contact-card-${index}`, `bg-gray-900 p-6 rounded-lg hover:-translate-y-2 transition-all duration-200 delay-${(index + 1) * 100}`)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 mr-3">{info.icon}</div>
                      <h3 className="font-semibold">{info.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">{detail}</p>
                      ))}
                      <p className="text-gray-400 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div 
                data-animate-id="map-section"
                className={getAnimationClass('map-section', 'bg-gray-900 p-6 rounded-lg delay-500')}
              >
                <h3 className="font-semibold mb-4">Find Our Bangalore Campus</h3>
                <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                    <p className="text-gray-400">Pole Workspaces 33/2 Racha, Galaxy 21st</p>
                    <p className="text-gray-400">Marenahalli, Bangalore North, Vijayanagar</p>
                    <p className="text-gray-500 text-sm">Bangalore, Karnataka-560040</p>
                    <p className="text-gray-500 text-xs mt-2">Easily accessible location</p>
                  </div>
                </div>
              </div>

              {/* Learnovia India Stats */}
              <div 
                data-animate-id="stats-section"
                className={getAnimationClass('stats-section', 'bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 rounded-lg text-black delay-600')}
              >
                <h3 className="font-semibold mb-4 text-center">Learnovia India Impact</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">850+</div>
                    <div className="text-sm">Professionals Trained</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">78%</div>
                    <div className="text-sm">Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">120+</div>
                    <div className="text-sm">Partner Companies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">₹9 LPA</div>
                    <div className="text-sm">Avg Package</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate-id="faq-header"
            className={getAnimationClass('faq-header', 'text-center mb-16')}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about our programs and services in India.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                data-animate-id={`faq-${index}`}
                className={getAnimationClass(`faq-${index}`, `bg-black p-6 rounded-lg border border-gray-800 delay-${index * 100}`)}
              >
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Emergency Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              data-animate-id="office-hours"
              className={getAnimationClass('office-hours', 'bg-gray-900 p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-200')}
            >
              <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 2:00 PM</p>
                <p>Holidays: As per Indian calendar</p>
              </div>
              <p className="text-yellow-400 mt-4">Walk-ins welcome during office hours</p>
            </div>
            <div 
              data-animate-id="student-support"
              className={getAnimationClass('student-support', 'bg-gray-900 p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-200 delay-200')}
            >
              <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">24/7 Student Support</h3>
              <div className="space-y-2 text-gray-300">
                <p>For current students: +91 8884457701</p>
                <p>Emergency line available 24/7</p>
                <p>Email: info@learnovia.in</p>
              </div>
              <p className="text-yellow-400 mt-4">We're here when you need us across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Indian Locations */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate-id="locations-header"
            className={getAnimationClass('locations-header', 'text-center mb-12')}
          >
            <h2 className="text-3xl font-bold mb-4">Our Centers Across India</h2>
            <p className="text-gray-400">Serving students from major IT hubs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { city: 'Bangalore', address: 'Vijayanagar, 560040' },
              { city: 'Hyderabad', address: 'HITEC City, 500081' },
              { city: 'Pune', address: 'Hinjewadi, 411057' },
              { city: 'Chennai', address: 'Tidel Park, 600113' }
            ].map((location, index) => (
              <div 
                key={index}
                data-animate-id={`location-${index}`}
                className={getAnimationClass(`location-${index}`, 'bg-black p-6 rounded-lg text-center hover:-translate-y-2 transition-all duration-200')}
              >
                <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{location.city}</h3>
                <p className="text-gray-400 text-sm">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;