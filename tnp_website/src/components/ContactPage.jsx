import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import VideoCall from './VideoCall';

const ContactPage = () => {

      const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            message: '',
        });

        const [errors, setErrors] = useState({});
        const [isSubmitted, setIsSubmitted] = useState(false);
        const [isLoading, setIsLoading] = useState(false);

        const [mode, setMode] = useState('select'); // 'text' or 'video'
        const [roomName] = useState(`CareerProSupport-${Math.random().toString(36).substr(2, 9)}`);
        // const [userName] = useState(formData.name)
        
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
        
        const handleSubmit = async(e) => {
            e.preventDefault();
            // Handle form submission here
            
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

            // Submit to Formspree
            setIsLoading(true);
            try {
            const response = await fetch("https://formspree.io/f/mdkddvel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
              if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                });
                setTimeout(() => setIsSubmitted(false), 3000);
            } else {
                alert("Failed to submit. Please try again.");
            }
            } catch (error) {
            alert("Error submitting form.");
            }
            setIsLoading(false);
        };

        
        return (
            <div >
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400">Our CareerPro team will contact you within 2 hours.</p>
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
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm mb-2">Phone Number</label>
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
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>

                  {/* Select Communication Mode */}
                  <div className="p-4">
                    {/* Dropdown */}
                    <div className="mb-4">
                      <label htmlFor="contact-mode" className="block text-sm font-medium mb-2 text-yellow-400 border-gray-600">
                        Select Communication Mode:
                      </label>
                      <select
                        id="contact-mode"
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400"
                      >
                        <option value="select" >Select mode</option>
                        <option value="text">Text Chat with Career Advisor</option>
                        <option value="video">Start Video Call with Career Counselor</option>
                      </select>
                    </div>

                    {/* Conditional Rendering */}
                    {mode === 'select' && (
                      <div className="text-gray-400 text-center mt-4">
                        Select a mode to connect with our CareerPro team.
                      </div>
                    )}

                    {mode === 'text' && (
                      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-h-[50vh] overflow-y-auto">
                        {/* Text Chat UI */}
                        <h3 className="text-xl font-bold mb-4 text-yellow-400">Chat with CareerPro Advisor</h3>
                        <p className="text-gray-200">Get instant guidance on courses and placements.</p>
                        <textarea
                          placeholder="Type your message about career guidance..."
                          className="w-full p-1 bg-black border border-gray-600 rounded-lg mt-2 text-white"
                        ></textarea>
                        <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
                          Send Message
                        </button>
                      </div>
                    )}

                    {mode === 'video' && (
                      <VideoCall roomName={roomName} userName={formData.name} />
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm mb-2">Career Goals & Questions</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Tell us about your career goals, course preferences, or placement queries..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
                  >
                    {isLoading ? "Sending..." : "Send Message to CareerPro"}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}

            </div>

            );
    };

export default ContactPage;