
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Mail, GraduationCap } from 'lucide-react';
import { auth, provider } from '../data/firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in with Google:', user);
    } catch (error) {
      console.error('Google sign-in error:', error.message);
    }
  };

  // ✅ Validation logic
  const validate = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!isLogin && !value.trim()) error = 'Full Name is required.';
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) error = 'Enter a valid email.';
        break;
      case 'password':
        if (value.length < 6) error = 'Password must be at least 6 characters.';
        break;
      case 'confirmPassword':
        if (!isLogin && value !== formData.password)
          error = 'Passwords do not match.';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  // ✅ Submit to Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!isLogin || (isLogin && key !== 'name' && key !== 'confirmPassword')) {
        const error = validate(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/movllzao", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ email: '', password: '', confirmPassword: '', name: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      alert('Error submitting form.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-12 w-12 text-yellow-400" />
          </div>
          <h2 className="text-3xl font-bold">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="mt-2 text-gray-400">
            {isLogin
              ? 'Sign in to access your learning dashboard'
              : 'Join thousands of successful learners'}
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900 p-8 rounded-lg">
          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold text-green-400 mb-2">✅ Form Submitted!</h3>
              <p className="text-gray-400">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                        errors.name ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
              )}

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                      errors.password ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-black border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Confirm your password"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 bg-gray-700 border-gray-600 rounded focus:ring-yellow-400"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-400">
                      Remember me
                    </label>
                  </div>
                  <button type="button" className="text-sm text-yellow-400 hover:text-yellow-300">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-400 text-black py-3 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                {isLoading ? 'Submitting...' : isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          )}

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-yellow-400 hover:text-yellow-300 font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                className="w-full bg-gray-800 border border-gray-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                onClick={handleGoogleLogin}
              >
                Google
              </button>

              <button
                className="w-full bg-gray-800 border border-gray-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                onClick={() => (window.location.href = 'https://www.linkedin.com/login')}
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="bg-yellow-400/10 border border-yellow-400/20 p-4 rounded-lg">
          <div className="flex items-center">
            <GraduationCap className="h-5 w-5 text-yellow-400 mr-2" />
            <p className="text-sm text-yellow-400">
              <strong>Coming Soon:</strong> Full LMS with progress tracking and more!
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="text-center">
          <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
