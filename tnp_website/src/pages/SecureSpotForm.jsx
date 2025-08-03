import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const SecureSpotForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    paymentPlan: 'full'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

    const elementsToObserve = document.querySelectorAll('[data-animate-id]');
    elementsToObserve.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const courseData = {
    price: "$2,999",
    installmentPrice: "$499/month"
  };

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
        paymentPlan: "full"
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Error submitting enrollment.");
    }
    setIsLoading(false);
  };

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
    <div className="bg-black text-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          data-animate-id="enrollment-form"
          className={getAnimationClass('enrollment-form', 'bg-gray-900 p-8 rounded-lg')}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Secure Your Spot</h2>
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-400 mb-2">Enrollment Request Sent!</h3>
              <p className="text-gray-400">Our admissions team will contact you within 24 hours.</p>
            </div>
          ) : (
            <div className="space-y-6">
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

              {/* Phone and Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <label className="block text-sm mb-2">Programming Experience</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Basic Knowledge</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Payment Plan */}
              <div>
                <label className="block text-sm mb-2">Payment Plan</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 bg-black border border-gray-600 rounded-lg cursor-pointer hover:border-yellow-400">
                    <input
                      type="radio"
                      name="paymentPlan"
                      value="full"
                      checked={formData.paymentPlan === 'full'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-semibold">Full Payment</div>
                      <div className="text-sm text-gray-400">{courseData.price} (Save $500)</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 bg-black border border-gray-600 rounded-lg cursor-pointer hover:border-yellow-400">
                    <input
                      type="radio"
                      name="paymentPlan"
                      value="installment"
                      checked={formData.paymentPlan === 'installment'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-semibold">6 Monthly Installments</div>
                      <div className="text-sm text-gray-400">{courseData.installmentPrice} x 6 months</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-2">Additional Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Tell us about your goals or any questions..."
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
              >
                {isLoading ? "Processing..." : "Submit Enrollment Request"}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecureSpotForm;