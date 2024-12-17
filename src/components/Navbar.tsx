import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Generate', path: '/generate' },
    { name: 'About', path: '/#about' }
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const element = document.querySelector(path.replace('/', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(path);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <span className="text-2xl font-bold text-gray-900">StoryGeneratorGPT</span>
          </motion.div>

          {/* Navigation Items and Button */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                className="relative group"
                onClick={() => handleNavClick(item.path)}
              >
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer 
                               transition-colors duration-200 text-sm font-medium">
                  {item.name}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100
                           transition-transform duration-200 origin-left"
                />
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/generate')}
              className="px-5 py-2 bg-[#2C3440] text-white text-sm font-semibold 
                       rounded-full hover:bg-[#3A4553] transition-all duration-300 
                       shadow-sm border border-[#4A5568]"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
