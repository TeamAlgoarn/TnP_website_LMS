import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
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
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      subtitle: 'Mon-Fri 9am-6pm',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@careerpro.com', 'admissions@careerpro.com'],
      subtitle: 'We reply within 24 hours',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: ['123 Education Street', 'Tech City, TC 12345'],
      subtitle: 'Visit our campus',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      subtitle: 'Sunday closed',
    },
  ];

  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Basic computer literacy and passion for learning. No prior programming experience required for beginner courses.',
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, we have a 95% placement rate with dedicated career support, resume building, and interview preparation.',
    },
    {
      question: 'Are there any financing options?',
      answer: 'We offer flexible payment plans, education loans, and income-share agreements to make learning accessible.',
    },
    {
      question: 'What is the class schedule like?',
      answer: 'We offer both weekday and weekend batches, with online and in-person options to fit your schedule.',
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your career? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium mb-2">
                        Interested Course
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      >
                        <option value="">Select a course</option>
                        <option value="full-stack">Full Stack Web Development</option>
                        <option value="data-science">Data Science & Analytics</option>
                        <option value="cloud-devops">Cloud Computing & DevOps</option>
                        <option value="mobile-dev">Mobile App Development</option>
                        <option value="cybersecurity">Cybersecurity Specialist</option>
                        <option value="ui-ux">UI/UX Design</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-lg hover:-translate-y-2
                    transition-all duration-200">
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
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Find Us</h3>
                <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                    <p className="text-gray-400">Interactive Map</p>
                    <p className="text-gray-500 text-sm">123 Education Street, Tech City</p>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about our programs and services.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
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
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:-translate-y-2
                    transition-all duration-200">
              <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <p className="text-yellow-400 mt-4">Walk-ins welcome during office hours</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:-translate-y-2
                    transition-all duration-200">
              <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">24/7 Student Support</h3>
              <div className="space-y-2 text-gray-300">
                <p>For current students: +1 (555) 999-0000</p>
                <p>Emergency line available 24/7</p>
                <p>Email: support@careerpro.com</p>
              </div>
              <p className="text-yellow-400 mt-4">We're here when you need us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;