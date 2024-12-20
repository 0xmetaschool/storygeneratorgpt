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
    if (path === '/#about' && router.pathname !== '/') {
      router.push('/?scrollTo=about');
    } else if (path.startsWith('/#')) {
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
                <span className={`cursor-pointer transition-colors duration-200 text-sm font-medium
                  ${router.pathname === item.path ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
