import React, { useState } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`item-center bg-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-sm cursor-pointer overflow-hidden ${
        hovered ? "p-5" : "p-4"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transition: "all 0.3s ease" }}
    >
      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-lg "
      />

      {/* Ratings */}
      <div className="flex items-center text-yellow-500 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="gold" stroke="none" />
        ))}
        <span className="ml-2 text-sm">
          {course.ratingsCount} Ratings ({course.rating})
        </span>
      </div>

      {/* Title */}
      <h3 className="text-md font-semibold mt-2 text-gray-200">
        {course.title}
      </h3>

      {/* Default Details (when NOT hovered) */}
      {!hovered && (
        <div className="flex justify-between text-xs text-gray-300 mt-3">
          <span>📘 {course.level}</span>
          <span>👥 {course.learners} Learners</span>
        </div>
      )}

      {/* Extra Details (when hovered) */}
      {hovered && (
        <div className="mt-3 animate-fadeIn">
          {/* Training Modes */}
          <p className="text-gray-400 text-sm mb-2">
            <span className="font-semibold">Training Modes:</span>{" "}
            {course.modes.map((mode, idx) => (
              <span key={idx} className="text-green-600 ml-1">
                {mode}
              </span>
            ))}
          </p>

          {/* Pricing */}
          <div className="mb-3">
            <span className="text-xl font-bold">
              ₹{course.discountedPrice}
            </span>
            <span className="line-through text-gray-400 ml-2 text-sm">
              ₹{course.originalPrice}
            </span>
            <span className="text-red-600 ml-2 text-sm font-semibold">
              ({course.discount}% off)
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-yellow-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition" 
            onClick={() => navigate("../pages/contact")}>
              Enroll Now
            </button>
            <button className="flex-1 border border-gray-300 hover:border-blue-600 hover:text-blue-600 font-semibold px-4 py-2 rounded-full text-sm transition">
              Read More →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;

