import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const StoryPage: NextPage = () => {
  const router = useRouter();
  const [story, setStory] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const storyFromState = router.query.story as string;
    const titleFromState = router.query.title as string;
    if (storyFromState) {
      setStory(storyFromState);
    }
    if (titleFromState) {
      setTitle(titleFromState);
    }
  }, [router.query]);

  const handleCustomizeAgain = () => {
    router.push({
      pathname: '/generate',
      query: { formData: router.query.formData } // Pass the form data back
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src="/bg_3.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-grow">
        <Navbar />
        <main className="container mx-auto px-4 py-8 pt-28 mb-24">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 border border-white/20">
            {title && (
              <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                {title}
              </h1>
            )}
           
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="prose max-w-none">
                {story.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => router.push('/generate')}
                className="px-6 py-3 bg-[#2C3440] text-white text-sm font-semibold 
                         rounded-full hover:bg-[#3A4553] transition-all duration-300 
                         shadow-sm border border-[#4A5568] hover:scale-105"
              >
                Generate Another Story
              </button>
              <button
                onClick={handleCustomizeAgain}
                className="px-6 py-3 bg-[#2C3440] text-white text-sm font-semibold 
                         rounded-full hover:bg-[#3A4553] transition-all duration-300 
                         shadow-sm border border-[#4A5568] hover:scale-105"
              >
                Customize Again
              </button>
            </div>
          </div>
        </main>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default StoryPage;
