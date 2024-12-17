import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Genre {
  id: number;
  name: string;
  imagePath: string;
  thumbnailText: string;
}

const genres: Genre[] = [
  { id: 1, name: 'Fantasy', imagePath: '/fantasy.jpg', thumbnailText: 'Fantasy' },
  { id: 2, name: 'Mystery', imagePath: '/mystery.jpg', thumbnailText: 'Mystery' },
  { id: 3, name: 'Horror', imagePath: '/horror.jpg', thumbnailText: 'Horror' },
  { id: 4, name: 'Romance', imagePath: '/romance.jpg', thumbnailText: 'Romance' },
  { id: 5, name: 'Adventure', imagePath: '/adventure.jpg', thumbnailText: 'More' },
];

const ImageReel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % genres.length;
      setDirection(1);
      setCurrentIndex(newIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="max-w-[600px] mx-auto">
        {/* Main Image Container */}
        <div className="relative aspect-square w-full bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={genres[currentIndex].imagePath}
                  alt={genres[currentIndex].name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
                
                {/* Genre Title */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute bottom-6 left-6 text-white z-10"
                >
                  <h3 className="text-3xl font-bold tracking-tight">{genres[currentIndex].name}</h3>
                  <p className="mt-2 text-lg text-white/90">Explore {genres[currentIndex].name.toLowerCase()} stories</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(-1);
                setCurrentIndex((prev) => (prev - 1 + genres.length) % genres.length);
              }}
              className="p-2 rounded-full bg-white/20 backdrop-blur-md 
                       transition-all duration-200 hover:shadow-lg z-20
                       flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(1);
                setCurrentIndex((prev) => (prev + 1) % genres.length);
              }}
              className="p-2 rounded-full bg-white/20 backdrop-blur-md 
                       transition-all duration-200 hover:shadow-lg z-20
                       flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          {/* Progress Dots */}
          <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
            {genres.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-110' : 'bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageReel;
