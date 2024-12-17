import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-24 w-full bg-[#2C3440]">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-between items-start">
          {/* Left side */}
          <div>
            <div className="text-gray-400 text-xs mb-4 pt-1 pb-1 pl-3 pr-3 bg-[#3A4553] max-w-[190px] rounded-full">
              AI-Powered Story Generator
            </div>
            <div className="text-white mb-4 text-2xl font-bold font-sans">
              StoryGeneratorGPT
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/generate"
                className="bg-white text-[#2C3440] px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm font-semibold"
              >
                Start Creating
              </Link>
              <Link
                href="/#about"
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-600 hover:bg-white hover:text-[#2C3440] transition-colors text-white text-sm font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-end gap-4">
            {/* Made with love section */}
            <div className="flex items-center gap-2 pt-8">
              <span className="text-gray-400 font-sans">CREATED WITH</span>
              <span className="text-white text-xl font-sans">♥</span>
              <span className="text-gray-400 font-sans">BY</span>
              <span className="text-xl font-semibold leading-none font-sans text-white">
                Fareeha
              </span>
            </div>

            {/* Navigation links */}
            <div className="flex items-center gap-6 pt-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/generate" className="text-gray-400 hover:text-white transition-colors">
                Generate
              </Link>
              <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
