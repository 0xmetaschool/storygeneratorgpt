import type { NextPage } from 'next';
import StoryGenerator from '../components/StoryGenerator';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GeneratePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src="/bg_3.jpg"
          alt="Background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <main className="container mx-auto px-4 py-8 pt-28 flex-grow">
          <div className="max-w-4xl mx-auto">
            <StoryGenerator />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default GeneratePage;
