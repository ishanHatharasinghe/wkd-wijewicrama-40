// src/components/About.tsx
import aboutImage from "../assets/Gemini_Generated_Image_nd7ba3nd7ba3nd7b.png";

const About = () => {
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/dilhara-wijewickrama-3036772b9/?trk=opento_sprofile_details",
      "_blank"
    );
  };

  return (
    <section
      id="about"
      className="relative bg-[#eaf2f3] rounded-t-[40px] mt-[-40px] px-6 py-12 md:py-16 md:h-screen flex items-center"
    >
      {/* CHANGED: Explicitly set grid-cols-1 for mobile */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Text Section */}
        {/* CHANGED: Added text-center for mobile, md:text-left for desktop */}
        <div className="order-1 md:order-1 text-center md:text-left">
          {/* CHANGED: Adjusted font size for mobile vs desktop */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">ABOUT</h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
            A committed, passionate, and talented seeker with technical
            expertise and the capacity to lead and collaborate with others in a
            team. Equipped with communication skills, leadership and team work.
          </p>

          <button
            className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300"
            onClick={handleLinkedInClick}
          >
            LinkedIn
          </button>
        </div>

        {/* Image Section */}
        {/* CHANGED: Added order-2 so image appears on top on mobile (optional, but usually looks better) */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={aboutImage}
            alt="About"
            // CHANGED: Added w-full and h-auto for responsiveness. Adjusted max-w.
            className="w-3/4 md:w-full max-w-[280px] md:max-w-sm rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
