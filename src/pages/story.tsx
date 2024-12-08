import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import background from '../assets/background.jpg';
import { motion } from 'framer-motion';

const StoryPage: NextPage = () => {
  const router = useRouter();
  const { story, formData } = router.query;

  if (!story) {
    return null; // or redirect to generate page
  }

  const handleCustomizeAgain = () => {
    router.push({
      pathname: '/generate',
      query: { formData } // Pass the form data back
    });
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-50"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-gray-700">
            <h1 className="text-6xl font-bold text-white text-center mb-6">
              Your Story
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-gray-300 text-lg leading-relaxed">
                  {typeof story === 'string' ? story : ''}
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => router.push('/generate')}
                className="px-6 py-3 bg-[#2C3440] text-white rounded-lg hover:bg-[#3A4553] transition-all duration-300 border border-[#4A5568]"
              >
                Generate Another Story
              </button>
              <button
                onClick={handleCustomizeAgain}
                className="px-6 py-3 bg-[#2C3440] text-white rounded-lg hover:bg-[#3A4553] transition-all duration-300 border border-[#4A5568]"
              >
                Customize Again
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoryPage;
