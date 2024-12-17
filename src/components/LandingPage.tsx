import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from './Footer';
import Navbar from './Navbar';
import ImageReel from './ImageReel';

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center min-h-[calc(100vh-4rem)] px-8">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:-mt-16">
              <div className="space-y-5">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl font-bold text-gray-900 leading-tight tracking-tight"
                >
                  Free Online<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    AI Story Generator
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-xl"
                >
                  Transform your imagination into captivating stories. Simply describe your idea, 
                  and watch as AI brings your narrative to life with rich details and engaging plots.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-4 pt-2"
              >
                <motion.button
                  onClick={() => router.push('/generate')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#2C3440] text-white text-lg font-semibold 
                           rounded-full hover:bg-[#3A4553] transition-all duration-300 
                           shadow-lg border border-[#4A5568] min-w-[200px]"
                >
                  Start Creating
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Image Reel */}
            <div className="w-full md:w-1/2 md:h-[90vh] sticky top-0 flex items-center">
              <ImageReel />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative bg-gray-50 py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Image Column */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="/about-us.jpg"
                    alt="AI Story Generation Process"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                </motion.div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-gray-900">
                  Crafting Stories with 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    {" "}AI Innovation
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Welcome to the future of storytelling. Our AI-powered platform combines cutting-edge 
                  technology with creative writing principles to help you generate unique, engaging 
                  stories in seconds. Whether you're a novelist, content creator, or simply love 
                  telling stories, our tool is designed to spark your imagination and bring your 
                  ideas to life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">Advanced AI</h3>
                    <p className="text-gray-600">
                      Powered by state-of-the-art language models for creative and coherent storytelling.
                    </p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">Multiple Genres</h3>
                    <p className="text-gray-600">
                      Create stories across various genres, from fantasy to mystery and beyond.
                    </p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">Easy to Use</h3>
                    <p className="text-gray-600">
                      Simple interface designed for both beginners and experienced writers.
                    </p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">Fast Results</h3>
                    <p className="text-gray-600">
                      Generate complete stories in seconds, ready for your creative touch.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating your story is as easy as following these simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 
                            rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-semibold text-gray-900">Choose Your Genre</h3>
                <p className="text-gray-600">
                  Select from multiple genres including Fantasy, Mystery, Horror, Romance, or Adventure 
                  to set the tone for your story.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 
                            rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-semibold text-gray-900">Describe Your Idea</h3>
                <p className="text-gray-600">
                  Tell us about your story concept, characters, or plot elements. The more details 
                  you provide, the more personalized your story will be.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 
                            rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-semibold text-gray-900">Generate & Edit</h3>
                <p className="text-gray-600">
                  Watch as AI creates your story in seconds. Then, edit and refine the generated 
                  content to match your vision perfectly.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => router.push('/generate')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#2C3440] text-white text-lg font-semibold 
                       rounded-full hover:bg-[#3A4553] transition-all duration-300 
                       shadow-lg border border-[#4A5568] min-w-[200px]"
            >
              Start Creating Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
