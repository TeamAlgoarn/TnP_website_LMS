// import React from "react";
// import { Star } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const CourseCard = ({ course }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="item-center bg-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-sm cursor-pointer overflow-hidden p-4
//       hover:bg-gray-800 transition-colors hover:-translate-y-2
//                     transition-all duration-200"
//     >
//       {/* Image */}
//       <img
//         src={course.image}
//         alt={course.title}
//         className="w-full h-40 object-cover rounded-lg"
//       />

//       {/* Ratings */}
//       <div className="flex items-center text-yellow-500 mt-3">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} size={14} fill="gold" stroke="none" />
//         ))}
//         <span className="ml-2 text-sm">
//           {course.ratingsCount} Ratings ({course.rating})
//         </span>
//       </div>

//       {/* Title */}
//       <h3 className="text-md font-semibold mt-2 text-gray-200">
//         {course.title}
//       </h3>

//       {/* Course Details */}
//       <div className="flex justify-between text-xs text-gray-300 mt-3">
//         <span>📘 {course.level}</span>
//         <span>👥 {course.learners} Learners</span>
//       </div>

//       {/* Training Modes */}
//       <p className="text-gray-400 text-sm mb-2 mt-3">
//         <span className="font-semibold">Training Modes:</span>{" "}
//         {course.modes.map((mode, idx) => (
//           <span key={idx} className="text-green-600 ml-1">
//             {mode}
//           </span>
//         ))}
//       </p>

//       {/* Pricing */}
//       {/* <div className="mb-3">
//         <span className="text-xl font-bold">
//           ₹{course.discountedPrice}
//         </span>
//         <span className="line-through text-gray-400 ml-2 text-sm">
//           ₹{course.originalPrice}
//         </span>
//         <span className="text-red-600 ml-2 text-sm font-semibold">
//           ({course.discount}% off)
//         </span>
//       </div> */}

//       {/* Buttons */}
//       <div className="flex gap-3">
//         <button 
//           className="flex-1 bg-yellow-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition"
//           onClick={() => navigate("/enroll")}
//         >
//           Enroll Now
//         </button>
//         <button className="flex-1 border border-gray-300 hover:border-blue-600 hover:text-blue-600 font-semibold px-4 py-2 rounded-full text-sm transition
//         "  onClick={() => navigate("/enroll")}>
//           Read More →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
 
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
 
  return (
    // <div
    //   className="item-center bg-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-sm cursor-pointer overflow-hidden p-4
    //   hover:bg-gray-800 transition-colors hover:-translate-y-2
    //                 transition-all duration-200"
    // >
    <div
      className="flex flex-col justify-between bg-gray-900 rounded-xl shadow-md hover:shadow-2xl w-full max-w-sm cursor-pointer overflow-hidden p-4 h-full
               hover:bg-gray-800 hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-lg"
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
 
      {/* Course Details */}
      <div className="flex justify-between text-xs text-gray-300 mt-3">
        <span>📘 {course.level}</span>
        <span>👥 {course.learners} Learners</span>
      </div>
 
      {/* Training Modes */}
      <p className="text-gray-400 text-sm mb-2 mt-3">
        <span className="font-semibold">Training Modes:</span>{" "}
        {course.modes.map((mode, idx) => (
          <span key={idx} className="text-green-600 ml-1">
            {mode}
          </span>
        ))}
      </p>
 
      {/* Pricing */}
      {/* <div className="mb-3">
        <span className="text-xl font-bold">
          ₹{course.discountedPrice}
        </span>
        <span className="line-through text-gray-400 ml-2 text-sm">
          ₹{course.originalPrice}
        </span>
        <span className="text-red-600 ml-2 text-sm font-semibold">
          ({course.discount}% off)
        </span>
      </div> */}
 
      {/* Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 bg-yellow-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition"
          onClick={() => navigate("/enroll")}
        >
          Enroll Now
        </button>
        <button
          className="flex-1 border border-gray-300 hover:border-blue-600 hover:text-blue-600 font-semibold px-4 py-2 rounded-full text-sm transition
        "
          onClick={() => navigate("/enroll")}
        >
          Read More →
        </button>
      </div>
    </div>
  );
};
 
export default CourseCard;
 
 