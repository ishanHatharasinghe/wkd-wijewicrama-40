import React from "react";
// Replace with your actual education images
import eduImage1 from "../assets/Education/hnd.jpg";
import eduImage2 from "../assets/Education/sfs.jpg";
import eduImage3 from "../assets/Education/sjv.jpg";

const educationData = [
  {
    id: 1,
    title: "Higher National Diploma in Mechanical Engineering",
    institution: "ATI - Galle",
    image: eduImage1
  },
  {
    id: 2,
    title: "Diploma in AutoCAD",
    institution: "SFS Academy- Galle",
    image: eduImage2
  },
  {
    id: 3,
    title: "Swarna Jayanthi Maha Vidyalaya",
    institution: "Kegalle",
    image: eduImage3
  }
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative bg-[#1a1a1a] py-12 px-4 sm:px-8 md:py-20 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-10 md:mb-16 uppercase tracking-wide">
          Education
        </h2>

        {/* Cards Grid */}
        {/* RESPONSIVE GRID:
           1 col on mobile
           2 cols on small tablets (sm)
           3 cols on desktop (lg) 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              // RESPONSIVE HEIGHTS:
              // Mobile: h-[280px] (Compact)
              // Tablet: h-[350px] (Mid-size)
              // Desktop: h-[450px] (Large)
              className="group relative h-[280px] sm:h-[350px] lg:h-[450px] w-full overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay - Made stronger at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                {/* Title Scales with screen size */}
                <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl leading-tight mb-1">
                  {item.title}
                </h3>

                {/* Institution Text */}
                <p className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide mt-2">
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
