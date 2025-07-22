import React from 'react';

// const Courses = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default Courses;


import { courses } from '../data/courses';

const Courses = () => (
  <div className="p-4 bg-black-50">
    <h2 className="text-3xl font-bold mb-6 text-center">Our Training Programs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map(c => (
        <div key={c.id} className="p-4 border shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold">{c.title}</h3>
          <p className="mt-2">{c.description}</p>
          <p className="mt-4"><strong>Instructor:</strong> {c.instructor}</p>
          <p><strong>Duration:</strong> {c.duration}</p>
          <div className="mt-4">
            <strong>What you'll learn:</strong>
            <ul className="text-sm list-disc list-inside mt-2">
              {c.outcomes.map((o, idx) => <li key={idx}>{o}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Courses;
