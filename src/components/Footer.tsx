"use client";
import Link from 'next/link';
import React from 'react';

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
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-sans">CREATED WITH</span>
                <span className="text-white text-xl font-sans">♥</span>
                <span className="text-gray-400 font-sans">BY</span>
                <a
                  href="https://metaschool.so/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold leading-none font-sans text-white hover:text-blue-300 transition-colors"
                >
                  Metaschool
                </a>
              </div>
              <a
                href="https://github.com/0xmetaschool/StoryGeneratorGPT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                View on GitHub
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://twitter.com/0xmetaschool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://discord.gg/metaschool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/metaschool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
