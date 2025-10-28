import React from 'react';

const SpeakerPromo = () => {
  return (
    <div className="w-full px-4 md:px-7 flex justify-center">
      <div className="bg-black text-white p-6 md:p-8 container flex flex-col md:flex-row items-center justify-between mx-auto rounded-lg overflow-hidden">
        
        {/* Left Text */}
        <div className="flex-1 space-y-6 md:pr-8">
          <span className="text-green-400 text-sm font-medium block">Categories</span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Enhance Your Music Experience</h2>
          
          {/* Countdown */}
          <div className="flex flex-wrap gap-4 md:gap-6 items-center">
            {[
              { label: "Days", value: "05" },
              { label: "Hours", value: "23" },
              { label: "Minutes", value: "59" },
              { label: "Seconds", value: "35" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white bg-opacity-20 text-black rounded-full flex items-center justify-center text-lg md:text-xl font-bold">
                  {item.value}
                </div>
                <span className="text-xs md:text-sm opacity-80">{item.label}</span>
              </div>
            ))}
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium transition-colors mt-4">
            Buy Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src="/images/speaker.png"
            alt="JBL Boombox Speaker"
            className="w-full h-auto relative z-10 drop-shadow-[0_10px_20px_rgba(179,255,195,0.7)]"
          />
        </div>

      </div>
    </div>
  );
};

export default SpeakerPromo;
