
import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Combobox } from "@headlessui/react";
import { courses } from "../data/courses";



const ContactPage = () => {

      const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            course: '',
            message: '',
        });

        const [errors, setErrors] = useState({});
        const [isSubmitted, setIsSubmitted] = useState(false);
        const [isLoading, setIsLoading] = useState(false);
        const [query, setQuery] = useState("");

        // Filter courses based on query
        const filteredCourses =
            query === ""
            ? courses
            : courses.filter((course) =>
                course.title.toLowerCase().includes(query.toLowerCase())
                );
        
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
            case "course":
                if (!value) error = "Please select a course.";
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
                course: "",
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
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you soon.</p>
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
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>

                  {/* Searchable Dropdown */}
                  <div>
                    <label className="block text-sm mb-2">Interested Course *</label>
                    <Combobox
                      value={formData.course}
                      onChange={(value) => {
                        setFormData({ ...formData, course: value });
                        setErrors({ ...errors, course: validate("course", value) });
                      }}
                    >
                      <div className="relative">
                        <Combobox.Input
                          className={`w-full px-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                            errors.course ? "border-red-500" : "border-gray-600"
                          }`}
                          placeholder="Search or select a course"
                          displayValue={(course) => course}
                          onChange={(e) => setQuery(e.target.value)}
                        />
                        <Combobox.Options className="absolute mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-auto z-50">
                          {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                              <Combobox.Option
                                key={course.id}
                                value={course.title}
                                className={({ active }) =>
                                  `cursor-pointer select-none px-4 py-2 ${
                                    active ? "bg-yellow-400 text-black" : "text-gray-300"
                                  }`
                                }
                              >
                                {course.title}
                              </Combobox.Option>
                            ))
                          ) : (
                            <div className="px-4 py-2 text-gray-500">No courses found</div>
                          )}
                        </Combobox.Options>
                      </div>
                    </Combobox>
                    {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}

            </div>

            );
    };

export default ContactPage;