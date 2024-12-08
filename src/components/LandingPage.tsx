import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import columnImage from '../assets/column image.jpg';
import { useState, useEffect } from 'react';
import Footer from './Footer';

const LandingPage = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const fullText = 'Unleash your imagination with AI-powered storytelling. Create unique and captivating stories with just a few clicks.';
  
  const features = [
    {
      title: 'AI-Powered',
      description: 'Advanced AI technology to generate unique stories'
    },
    {
      title: 'Customizable',
      description: 'Choose your genre, characters, and plot elements'
    },
    {
      title: 'Instant',
      description: 'Generate stories in seconds'
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen relative bg-white">
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="p-8">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            StoryGeneratorGPT
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center px-8 mt-12 gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl text-gray-700 leading-relaxed min-h-[120px]"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.div>
            
            <motion.button
              onClick={() => router.push('/generate')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#2C3440] text-white text-xl font-semibold 
                       hover:bg-[#3A4553] transition-all duration-300 shadow-lg
                       rounded-md border border-[#4A5568]"
            >
              Start Creating
            </motion.button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative w-[500px] h-[600px]"
            >
              <div className="absolute inset-0 border-8 border-[#8B4513] rounded-lg overflow-hidden
                            shadow-[0_0_15px_rgba(139,69,19,0.5)] 
                            before:content-[''] before:absolute before:inset-0 
                            before:border-4 before:border-[#A0522D] before:opacity-50"
              >
                <Image
                  src={columnImage}
                  alt="Column Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-24 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-[#2C3440] bg-opacity-90 p-8 rounded-lg
                       border border-[#4A5568] shadow-lg hover:shadow-xl
                       transform transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
