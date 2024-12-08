import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import magicWand from '../assets/magic-wand.gif';
import adventureGame from '../assets/adventure-game.gif';
import rocket from '../assets/rocket.gif';

const LandingPage = () => {
  const router = useRouter();

  const features = [
    {
      icon: magicWand,
      title: 'AI-Powered',
      description: 'Advanced AI technology to generate unique stories'
    },
    {
      icon: adventureGame,
      title: 'Customizable',
      description: 'Choose your genre, characters, and plot elements'
    },
    {
      icon: rocket,
      title: 'Instant',
      description: 'Generate stories in seconds'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-6">
          StoryGeneratorGPT
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Create unique and engaging stories with the power of artificial intelligence.
          Let your imagination run wild!
        </p>
        <motion.button
          onClick={() => router.push('/generate')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-blue-600 text-white rounded-full text-xl font-semibold 
                     hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-50 p-6 rounded-xl text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <Image
                src={feature.icon}
                alt={feature.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LandingPage;
