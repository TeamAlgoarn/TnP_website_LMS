// import React, { useState } from 'react';
// import { Send, CheckCircle, Calendar, Clock, Video } from 'lucide-react';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     meetingDate: '',
//     meetingTime: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showMeetingScheduler, setShowMeetingScheduler] = useState(false);

//   // Validation rules
//   const validate = (name, value) => {
//     let error = "";
//     switch (name) {
//       case "name":
//         if (!value.trim()) error = "Name is required.";
//         break;
//       case "email":
//         if (!/\S+@\S+\.\S+/.test(value)) error = "Enter a valid email.";
//         break;
//       case "phone":
//         if (value && !/^\d{10}$/.test(value))
//           error = "Enter a valid 10-digit phone number.";
//         break;
//       case "meetingDate":
//         if (showMeetingScheduler && !value) error = "Meeting date is required.";
//         break;
//       case "meetingTime":
//         if (showMeetingScheduler && !value) error = "Meeting time is required.";
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   // Real-time validation
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: validate(name, value) });
//   };

//   // Handle checkbox change for video meeting
//   const handleVideoMeetingToggle = (e) => {
//     setShowMeetingScheduler(e.target.checked);
//     if (!e.target.checked) {
//       // Clear meeting fields if unchecked
//       setFormData({
//         ...formData,
//         meetingDate: '',
//         meetingTime: '',
//       });
//       setErrors({
//         ...errors,
//         meetingDate: '',
//         meetingTime: '',
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate all fields
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       const error = validate(key, formData[key]);
//       if (error) newErrors[key] = error;
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // Generate meeting link with proper URL structure
//       const roomId = Math.random().toString(36).substr(2, 9);
//       const meetingLink = showMeetingScheduler 
//         ? `${window.location.origin}/meeting/${roomId}`
//         : null;

//       // Send to your backend server
//       const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
//       const response = await fetch(`${API_URL}/api/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           mode: 'video',
//           meetingLink,
//           scheduleMeeting: showMeetingScheduler,
//         }),
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//           meetingDate: "",
//           meetingTime: "",
//         });
//         setShowMeetingScheduler(false);
//         setTimeout(() => setIsSubmitted(false), 5000);
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message || "Failed to submit. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Error submitting form. Please try again.");
//     }
//     setIsLoading(false);
//   };

//   // Get minimum date (today)
//   const getMinDate = () => {
//     const today = new Date();
//     return today.toISOString().split('T')[0];
//   };

//   return (
//     <div>
//       {isSubmitted ? (
//         <div className="text-center py-8">
//           <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
//           <h3 className="text-xl font-semibold text-green-400 mb-2">
//             {showMeetingScheduler ? 'Meeting Scheduled Successfully!' : 'Message Sent Successfully!'}
//           </h3>
//           <p className="text-gray-400">
//             {showMeetingScheduler 
//               ? 'Meeting details have been sent to your email.' 
//               : 'Our Learnovia team will contact you within 2 hours.'}
//           </p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name and Email */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm mb-2">Full Name *</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
//                   errors.name ? "border-red-500" : "border-gray-600"
//                 }`}
//                 placeholder="Enter your full name"
//               />
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Email Address *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
//                   errors.email ? "border-red-500" : "border-gray-600"
//                 }`}
//                 placeholder="Enter your email"
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm mb-2">Phone Number *</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
//                 errors.phone ? "border-red-500" : "border-gray-600"
//               }`}
//               placeholder="Enter your 10-digit number"
//             />
//             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-sm mb-2">Career Goals & Questions</label>
//             <textarea
//               name="message"
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400"
//               placeholder="Tell us about your career goals, course preferences, or placement queries..."
//             />
//           </div>

//           {/* Video Meeting Checkbox */}
//           <div className="flex items-start space-x-3 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
//             <input
//               type="checkbox"
//               id="scheduleMeeting"
//               checked={showMeetingScheduler}
//               onChange={handleVideoMeetingToggle}
//               className="mt-1 h-5 w-5 text-yellow-400 bg-black border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
//             />
//             <label htmlFor="scheduleMeeting" className="flex-1 cursor-pointer">
//               <div className="flex items-center gap-2 mb-1">
//                 <Video className="text-yellow-400" size={20} />
//                 <span className="font-semibold text-white">Schedule Video Call with Career Counselor</span>
//               </div>
//               <p className="text-sm text-gray-400">
//                 Book a personalized video consultation to discuss your career goals
//               </p>
//             </label>
//           </div>

//           {/* Meeting Scheduler (shown when checkbox is checked) */}
//           {showMeetingScheduler && (
//             <div className="bg-gray-900 border border-yellow-400 rounded-lg p-6 space-y-4 animate-fadeIn">
//               <div className="flex items-center gap-2 mb-4">
//                 <Video className="text-yellow-400" />
//                 <h3 className="text-lg font-semibold text-yellow-400">Schedule Your Video Meeting</h3>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm mb-2 text-white flex items-center gap-2">
//                     <Calendar size={16} className="text-yellow-400" />
//                     Meeting Date *
//                   </label>
//                   <input
//                     type="date"
//                     name="meetingDate"
//                     value={formData.meetingDate}
//                     onChange={handleChange}
//                     min={getMinDate()}
//                     className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
//                       errors.meetingDate ? "border-red-500" : "border-gray-600"
//                     }`}
//                   />
//                   {errors.meetingDate && <p className="text-red-500 text-sm mt-1">{errors.meetingDate}</p>}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm mb-2 text-white flex items-center gap-2">
//                     <Clock size={16} className="text-yellow-400" />
//                     Meeting Time *
//                   </label>
//                   <input
//                     type="time"
//                     name="meetingTime"
//                     value={formData.meetingTime}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
//                       errors.meetingTime ? "border-red-500" : "border-gray-600"
//                     }`}
//                   />
//                   {errors.meetingTime && <p className="text-red-500 text-sm mt-1">{errors.meetingTime}</p>}
//                 </div>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg">
//                 <p className="text-sm text-gray-300">
//                   📧 You'll receive meeting link and instructions via email
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isLoading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Sending...
//               </>
//             ) : (
//               <>
//                 {showMeetingScheduler ? 'Schedule Meeting' : 'Send Message'}
//                 <Send className="ml-2 h-5 w-5" />
//               </>
//             )}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, Clock, Video, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    meetingDate: '',
    meetingTime: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMeetingScheduler, setShowMeetingScheduler] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Get API URL based on environment
  const getApiUrl = () => {
    // Check if VITE_API_URL is defined in environment
    if (import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL;
    }
    
    // Production: use same origin with /api path
    if (import.meta.env.PROD) {
      return window.location.origin;
    }
    
    // Development fallback
    return 'http://localhost:5000';
  };

  // Validation rules
  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required.";
        } else if (value.length < 2) {
          error = "Name must be at least 2 characters.";
        } else if (value.length > 100) {
          error = "Name is too long.";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name can only contain letters and spaces.";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email address.";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Enter a valid 10-digit phone number.";
        }
        break;
      case "message":
        if (value && value.length > 1000) {
          error = "Message is too long (max 1000 characters).";
        }
        break;
      case "meetingDate":
        if (showMeetingScheduler) {
          const { meetingDate, meetingTime } = formData;

          if (!meetingDate || !meetingTime) {
            error = "Meeting date and time are required.";
          } else {
            // Combine date + time
            const selectedDateTime = new Date(`${meetingDate}T${meetingTime}`);
            const now = new Date();

            if (selectedDateTime <= now) {
              error = "Please select a future date and time.";
            }
          }
        }

        break;
      case "meetingTime":
        if (showMeetingScheduler && !value) {
          error = "Meeting time is required.";
        }
        break;
      default:
        break;
    }
    return error;
  };

  // Real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
    setApiError(null); // Clear API errors on input change
  };

  // Handle checkbox change for video meeting
  const handleVideoMeetingToggle = (e) => {
    setShowMeetingScheduler(e.target.checked);
    if (!e.target.checked) {
      // Clear meeting fields if unchecked
      setFormData({
        ...formData,
        meetingDate: '',
        meetingTime: '',
      });
      setErrors({
        ...errors,
        meetingDate: '',
        meetingTime: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorField)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    setIsLoading(true);

    try {
      // Generate meeting link with proper URL structure
      const roomId = Math.random().toString(36).substr(2, 9);
      const meetingLink = showMeetingScheduler 
        ? `${window.location.origin}/meeting/${roomId}`
        : null;

      const API_URL = getApiUrl();
      
      // Set timeout for fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          mode: 'video',
          meetingLink,
          scheduleMeeting: showMeetingScheduler,
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Handle different response statuses
      if (response.status === 429) {
        throw new Error('Too many requests. Please wait a minute and try again.');
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Server error' }));
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          meetingDate: "",
          meetingTime: "",
        });
        setShowMeetingScheduler(false);
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      
      let errorMessage = 'An error occurred while submitting the form. Please try again.';
      
      if (error.name === 'AbortError') {
        errorMessage = 'Request timeout. Please check your internet connection and try again.';
      } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorMessage = 'Cannot connect to server. Please check your internet connection.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setApiError(errorMessage);
      
      // Scroll to error message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsLoading(false);
    }
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get maximum date (3 months from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div>
      {/* API Error Message */}
      {apiError && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg flex items-start gap-3">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="text-red-400 font-semibold mb-1">Error</h4>
            <p className="text-red-300 text-sm">{apiError}</p>
          </div>
        </div>
      )}

      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            {showMeetingScheduler ? 'Meeting Scheduled Successfully!' : 'Message Sent Successfully!'}
          </h3>
          <p className="text-gray-400">
            {showMeetingScheduler 
              ? 'Meeting details have been sent to your email. Please check your inbox.' 
              : 'Our Learnovia team will contact you within 2 hours.'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors ${
                  errors.name ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="Enter your full name"
                maxLength="100"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="Enter your email"
                autoComplete="email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors ${
                errors.phone ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter your 10-digit number"
              maxLength="10"
              pattern="[0-9]{10}"
              autoComplete="tel"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1" role="alert">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Career Goals & Questions
              <span className="text-gray-500 text-xs ml-2">({formData.message.length}/1000)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors resize-none ${
                errors.message ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Tell us about your career goals, course preferences, or placement queries..."
              maxLength="1000"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>}
          </div>

          {/* Video Meeting Checkbox */}
          <div className="flex items-start space-x-3 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
            <input
              type="checkbox"
              id="scheduleMeeting"
              checked={showMeetingScheduler}
              onChange={handleVideoMeetingToggle}
              className="mt-1 h-5 w-5 text-yellow-400 bg-black border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
            />
            <label htmlFor="scheduleMeeting" className="flex-1 cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <Video className="text-yellow-400" size={20} />
                <span className="font-semibold text-white">Schedule Video Call with Career Counselor</span>
              </div>
              <p className="text-sm text-gray-400">
                Book a personalized video consultation to discuss your career goals
              </p>
            </label>
          </div>

          {/* Meeting Scheduler */}
          {showMeetingScheduler && (
            <div className="bg-gray-900 border border-yellow-400 rounded-lg p-6 space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 mb-4">
                <Video className="text-yellow-400" />
                <h3 className="text-lg font-semibold text-yellow-400">Schedule Your Video Meeting</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="meetingDate" className="block text-sm mb-2 text-white flex items-center gap-2">
                    <Calendar size={16} className="text-yellow-400" />
                    Meeting Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="meetingDate"
                    type="date"
                    name="meetingDate"
                    value={formData.meetingDate}
                    onChange={handleChange}
                    min={getMinDate()}
                    max={getMaxDate()}
                    className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors ${
                      errors.meetingDate ? "border-red-500" : "border-gray-600"
                    }`}
                  />
                  {errors.meetingDate && <p className="text-red-500 text-sm mt-1" role="alert">{errors.meetingDate}</p>}
                </div>
                
                <div>
                  <label htmlFor="meetingTime" className="block text-sm mb-2 text-white flex items-center gap-2">
                    <Clock size={16} className="text-yellow-400" />
                    Meeting Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="meetingTime"
                    type="time"
                    name="meetingTime"
                    value={formData.meetingTime}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors ${
                      errors.meetingTime ? "border-red-500" : "border-gray-600"
                    }`}
                  />
                  {errors.meetingTime && <p className="text-red-500 text-sm mt-1" role="alert">{errors.meetingTime}</p>}
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  📧 You'll receive meeting link and instructions via email
                </p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            aria-label={showMeetingScheduler ? 'Schedule Meeting' : 'Send Message'}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                {showMeetingScheduler ? 'Schedule Meeting' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;