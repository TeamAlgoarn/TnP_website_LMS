// import React, { useState, useEffect, useRef } from 'react';
// import { Send, CheckCircle } from 'lucide-react';
// import VideoCall from './VideoCall';

// const ContactPage = () => {

//       const [formData, setFormData] = useState({
//             name: '',
//             email: '',
//             phone: '',
//             message: '',
//         });

//         const [errors, setErrors] = useState({});
//         const [isSubmitted, setIsSubmitted] = useState(false);
//         const [isLoading, setIsLoading] = useState(false);

//         const [mode, setMode] = useState('select'); // 'text' or 'video'
//         const [roomName] = useState(`LearnoviaSupport-${Math.random().toString(36).substr(2, 9)}`);
//         // const [userName] = useState(formData.name)
        
//         // Validation rules
//         const validate = (name, value) => {
//             let error = "";
//             switch (name) {
//             case "name":
//                 if (!value.trim()) error = "Name is required.";
//                 break;
//             case "email":
//                 if (!/\S+@\S+\.\S+/.test(value)) error = "Enter a valid email.";
//                 break;
//             case "phone":
//                 if (value && !/^\d{10}$/.test(value))
//                 error = "Enter a valid 10-digit phone number.";
//                 break;
//             default:
//                 break;
//             }
//             return error;
//         };

//         // Real-time validation
//         const handleChange = (e) => {
//             const { name, value } = e.target;
//             setFormData({ ...formData, [name]: value });
//             setErrors({ ...errors, [name]: validate(name, value) });
//         };
        
//         const handleSubmit = async(e) => {
//             e.preventDefault();
//             // Handle form submission here
            
//             // Validate all fields
//             const newErrors = {};
//             Object.keys(formData).forEach((key) => {
//             const error = validate(key, formData[key]);
//             if (error) newErrors[key] = error;
//             });

//             if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             return;
//             }

//             // Submit to Formspree
//             setIsLoading(true);
//             try {
//             const response = await fetch("https://formspree.io/f/mdkddvel", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });
            
//               if (response.ok) {
//                 setIsSubmitted(true);
//                 setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 message: "",
//                 });
//                 setTimeout(() => setIsSubmitted(false), 3000);
//             } else {
//                 alert("Failed to submit. Please try again.");
//             }
//             } catch (error) {
//             alert("Error submitting form.");
//             }
//             setIsLoading(false);
//         };
        
//         return (
//             <div >              
//               {isSubmitted ? (
//                 <div className="text-center py-8">
//                   <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h3>
//                   <p className="text-gray-400">Our Learnovia team will contact you within 2 hours.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Name and Email */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm mb-2">Full Name *</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
//                           errors.name ? "border-red-500" : "border-gray-600"
//                         }`}
//                         placeholder="Enter your full name"
//                       />
//                       {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm mb-2">Email Address *</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
//                           errors.email ? "border-red-500" : "border-gray-600"
//                         }`}
//                         placeholder="Enter your email"
//                       />
//                       {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                     </div>
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block text-sm mb-2">Phone Number</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
//                         errors.phone ? "border-red-500" : "border-gray-600"
//                       }`}
//                       placeholder="Enter your 10-digit number"
//                     />
//                     {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                   </div>

//                   {/* Select Communication Mode */}
//                   <div className="p-4">
//                     {/* Dropdown */}
//                     <div className="mb-4">
//                       <label htmlFor="contact-mode" className="block text-sm font-medium mb-2 text-yellow-400 border-gray-600">
//                         Select Communication Mode:
//                       </label>
//                       <select
//                         id="contact-mode"
//                         value={mode}
//                         onChange={(e) => setMode(e.target.value)}
//                         className="w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400"
//                       >
//                         <option value="select" >Select mode</option>
//                         <option value="text">Text Chat with Career Advisor</option>
//                         <option value="video">Start Video Call with Career Counselor</option>
//                       </select>
//                     </div>

//                     {/* Conditional Rendering */}
//                     {mode === 'select' && (
//                       <div className="text-gray-400 text-center mt-4">
//                         Select a mode to connect with our Learnovia team.
//                       </div>
//                     )}

//                     {mode === 'text' && (
//                       <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-h-[50vh] overflow-y-auto">
//                         {/* Text Chat UI */}
//                         <h3 className="text-xl font-bold mb-4 text-yellow-400">Chat with Learnovia Advisor</h3>
//                         <p className="text-gray-200">Get instant guidance on courses and placements.</p>
//                         <textarea
//                           placeholder="Type your message about career guidance..."
//                           className="w-full p-1 bg-black border border-gray-600 rounded-lg mt-2 text-white"
//                         ></textarea>
//                         <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
//                           Send Message
//                         </button>
//                       </div>
//                     )}

//                     {mode === 'video' && (
//                       <VideoCall roomName={roomName} userName={formData.name} />
//                     )}
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label className="block text-sm mb-2">Career Goals & Questions</label>
//                     <textarea
//                       name="message"
//                       rows={3}
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                       placeholder="Tell us about your career goals, course preferences, or placement queries..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
//                   >
//                     {isLoading ? "Sending..." : "Send Message to Learnovia"}
//                     <Send className="ml-2 h-5 w-5" />
//                   </button>
//                 </form>
//               )}

//             </div>

//             );
//     };

// export default ContactPage;


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
//       // Generate meeting link
//       const meetingLink = showMeetingScheduler 
//         ? `https://meet.lernovia.com/${Math.random().toString(36).substr(2, 9)}`
//         : null;

//       // Send to your custom API endpoint
//       const API_URL = process.env.NODE_ENV === 'production' 
//       ? 'https://your-backend-url.com/pages/api/contact'
//       : 'http://localhost:5000/pages/api/contact';

//       const response = await fetch(API_URL, {
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


// import { Calendar, CheckCircle, Clock, Send, Video } from 'lucide-react';
// import { useState } from 'react';

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
//       // Generate meeting link
//       const meetingLink = showMeetingScheduler 
//         ? `https://meet.learnovia.com/${Math.random().toString(36).substr(2, 9)}`
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
import { Send, CheckCircle, Calendar, Clock, Video } from 'lucide-react';

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

  // Validation rules
  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) error = "Enter a valid email.";
        break;
      case "phone":
        if (value && !/^\d{10}$/.test(value))
          error = "Enter a valid 10-digit phone number.";
        break;
      case "meetingDate":
        if (showMeetingScheduler && !value) error = "Meeting date is required.";
        break;
      case "meetingTime":
        if (showMeetingScheduler && !value) error = "Meeting time is required.";
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

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      // Generate meeting link with proper URL structure
      const roomId = Math.random().toString(36).substr(2, 9);
      const meetingLink = showMeetingScheduler 
        ? `${window.location.origin}/meeting/${roomId}`
        : null;

      // Send to your backend server
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          mode: 'video',
          meetingLink,
          scheduleMeeting: showMeetingScheduler,
        }),
      });

      if (response.ok) {
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
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
    setIsLoading(false);
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            {showMeetingScheduler ? 'Meeting Scheduled Successfully!' : 'Message Sent Successfully!'}
          </h3>
          <p className="text-gray-400">
            {showMeetingScheduler 
              ? 'Meeting details have been sent to your email.' 
              : 'Our Learnovia team will contact you within 2 hours.'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                errors.phone ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter your 10-digit number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Career Goals & Questions</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400"
              placeholder="Tell us about your career goals, course preferences, or placement queries..."
            />
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

          {/* Meeting Scheduler (shown when checkbox is checked) */}
          {showMeetingScheduler && (
            <div className="bg-gray-900 border border-yellow-400 rounded-lg p-6 space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 mb-4">
                <Video className="text-yellow-400" />
                <h3 className="text-lg font-semibold text-yellow-400">Schedule Your Video Meeting</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-white flex items-center gap-2">
                    <Calendar size={16} className="text-yellow-400" />
                    Meeting Date *
                  </label>
                  <input
                    type="date"
                    name="meetingDate"
                    value={formData.meetingDate}
                    onChange={handleChange}
                    min={getMinDate()}
                    className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                      errors.meetingDate ? "border-red-500" : "border-gray-600"
                    }`}
                  />
                  {errors.meetingDate && <p className="text-red-500 text-sm mt-1">{errors.meetingDate}</p>}
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-white flex items-center gap-2">
                    <Clock size={16} className="text-yellow-400" />
                    Meeting Time *
                  </label>
                  <input
                    type="time"
                    name="meetingTime"
                    value={formData.meetingTime}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                      errors.meetingTime ? "border-red-500" : "border-gray-600"
                    }`}
                  />
                  {errors.meetingTime && <p className="text-red-500 text-sm mt-1">{errors.meetingTime}</p>}
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
            className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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