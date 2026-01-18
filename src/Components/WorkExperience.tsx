import React from "react";
import workImage from "../assets/BIA.jpg";

const WorkExperience: React.FC = () => {
  return (
    <section className="relative bg-[#eaf2f3] px-4 md:px-6 py-12 md:py-20">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-black mb-10 md:mb-16 uppercase tracking-wide">
        Work Experience
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center md:justify-start relative">
          <img
            src={workImage}
            alt="Work Experience"
            // Adjusted height: 250px on mobile, 500px on desktop
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-xl object-cover h-[250px] md:h-[500px]"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-extrabold text-black mb-2 uppercase leading-tight">
            Airport and Aviation Services (Pvt).Ltd
          </h2>
          <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-6 uppercase">
            Bandaranaike International Airport Katunayake
          </h3>

          <div className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base text-left">
            <p className="font-semibold mb-4">
              Trainee Assistant Mechanical Engineer (05 Months)
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Central Air Conditioning System and Building Management System.
              </li>
              <li>Baggage Conveyor System and Roller Shutter Doors.</li>
              <li>Elevators, Escalators.</li>
              <li>Generators, Power House and Fabrication Workshop.</li>
              <li>
                Water Treatment, Sewage Treatment, Incinerator and Fire Water
                System.
              </li>
              <li>Internal and External Plumbing System.</li>
            </ul>
          </div>

          <a
            href="https://www.airport.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full border-2 border-black font-bold text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-wide text-xs md:text-sm"
          >
            Visit Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
