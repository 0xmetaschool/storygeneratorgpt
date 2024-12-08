import type { NextPage } from 'next';
import StoryGenerator from '../components/StoryGenerator';
import Image from 'next/image';
import background from '../assets/background.jpg';

const GeneratePage: NextPage = () => {
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
          <h1 className="text-6xl font-bold text-white text-center mb-6">
            StoryGeneratorGPT
          </h1>
          <p className="text-center text-gray-300 mb-12 text-xl max-w-2xl mx-auto">
            Choose your genre, length, and customize your story details below.
          </p>
          <StoryGenerator />
        </main>
      </div>
    </div>
  );
};

export default GeneratePage;
