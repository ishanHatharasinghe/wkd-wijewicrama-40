import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCogs,
  FaUsers,
  FaProjectDiagram,
  FaLightbulb,
  FaCalculator,
  FaLayerGroup,
  FaIndustry,
  FaCube,
  FaCode,
  FaLaptopCode,
  FaWrench
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// --- Data Structure (Unchanged) ---
const allSkills = [
  {
    id: 1,
    category: "engineering",
    title: "SolidWorks",
    icon: <FaCube />,
    level: 95,
    desc: "3D Modeling, Assemblies"
  },
  {
    id: 2,
    category: "engineering",
    title: "AutoCAD",
    icon: <FaLayerGroup />,
    level: 90,
    desc: "2D Drafting, Layouts"
  },
  {
    id: 3,
    category: "engineering",
    title: "MS Office",
    icon: <FaCogs />,
    level: 85,
    desc: "Fluent"
  },
  {
    id: 4,
    category: "engineering",
    title: "MATLAB",
    icon: <FaCalculator />,
    level: 80,
    desc: "Numerical Computing"
  },
  {
    id: 5,
    category: "software",
    title: "Prog. Management",
    icon: <FaProjectDiagram />,
    level: 90,
    desc: "MS Project"
  },
  {
    id: 6,
    category: "software",
    title: "Technical Writing",
    icon: <FaLaptopCode />,
    level: 85,
    desc: "Reports, Documentation"
  },
  {
    id: 7,
    category: "professional",
    title: "Leadership",
    icon: <FaUsers />,
    level: 95,
    desc: "Team Lead, Mentoring"
  },
  {
    id: 8,
    category: "professional",
    title: "Problem Solving",
    icon: <FaLightbulb />,
    level: 100,
    desc: "Critical Thinking"
  },
  {
    id: 9,
    category: "professional",
    title: "Team Work",
    icon: <FaIndustry />,
    level: 100,
    desc: "CNC, 3D Printing"
  }
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("engineering");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredSkills = allSkills.filter(
    (skill) => skill.category === activeTab
  );

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        ".skill-card",
        { y: 30, opacity: 0, scale: 0.95 }, // Reduced movement for mobile smoothness
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
          overwrite: "auto"
        }
      );
    }
  }, [activeTab]);

  return (
    <section className="relative bg-[#1a1a1a] py-16 md:py-24 px-4 md:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-wide mb-6">
            Technical Proficiency
          </h2>

          {/* Tab Switcher - Now scrollable on very small screens if needed */}
          <div className="inline-flex flex-wrap justify-center gap-2 bg-[#1a1a1a] p-1 rounded-xl md:rounded-full border border-white/10 backdrop-blur-sm">
            {[
              { id: "engineering", label: "Engineering", icon: <FaWrench /> },
              { id: "software", label: "Software", icon: <FaCode /> },
              { id: "professional", label: "Professional", icon: <FaUsers /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.icon}
                {/* Text is always visible now for better UX, simplified layout */}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - Added sm:grid-cols-2 to make better use of mobile space */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {filteredSkills.map((item) => (
            <div
              key={item.id}
              // Changed fixed height to min-height to accommodate text wrapping
              className="skill-card group relative bg-[#262626] min-h-[180px] md:h-[220px] rounded-2xl p-5 md:p-6 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-2xl"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 h-full flex flex-col justify-between gap-4">
                {/* Top: Icon & Title */}
                <div className="flex items-start justify-between">
                  <div className="p-2 md:p-3 bg-black/50 rounded-lg text-xl md:text-2xl text-white group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/20">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                    {item.level}%
                  </span>
                </div>

                {/* Middle: Info */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom: Progress Bar */}
                <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden mt-auto">
                  <div
                    className="h-full bg-white transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_white]"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
