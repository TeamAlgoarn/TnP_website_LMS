import React from 'react';

// const Placements = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default Placements;

import { placements } from '../data/placements';

const Placements = () => (
  <div className="p-8 bg--50">
    <h2 className="text-5xl font-bold mb-6 text-center">Placement Support</h2>

    <section className="mb-8 text-center">
      <h3 className="text-2xl font-semibold">Our Partners</h3>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {placements.companies.map((co, i) => (
          <img key={(i)} src={co.logo} alt={co.name} className="h-15 opacity-80 hover:opacity-100 transition" />
        ))}
      </div>
    </section>

    <section className="mb-8 text-center">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-bold">Placement Statistics</h3>
        <ul className="mt-4 space-y-2 text-2xl font-semibold gap-8">
          <li>Placement Rate: {placements.stats.placementRate}</li>
          <li>Highest Package: {placements.stats.highestPackage}</li>
          <li>Average Package: {placements.stats.averagePackage}</li>
          <li>Total Companies: {placements.stats.totalCompanies}+</li>
        </ul>
      </div>
    </section>

    <section className="">
      <h3 className="text-4xl font-bold mb-4 text-center">Success Stories</h3>
      {placements.testimonials.map((t, idx) => ( 
        <div className="bg-black shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{idx+1}. {t.student}</h3>
            <img src={t.logo} alt={`${t.company} logo`} className="h-10 w-auto" />
          </div>
           <p className="text-gray-400 italic mb-4">"{t.message}"</p>
           <p className="text-sm text-gray-300">— {t.student}, {t.course}</p>
        </div>
      ))}
    </section>
  </div>
);

export default Placements;

// import React from 'react';

// const Testimonial = ({ student, course, company, message, logo }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition duration-300">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold">{student}</h3>
//         <img src={logo} alt={`${company} logo`} className="h-8 w-auto" />
//       </div>
//       <p className="text-gray-700 italic mb-4">"{message}"</p>
//       <p className="text-sm text-gray-500">— {student}, {course}</p>
//     </div>
//   );
// };

// export default Testimonial;
