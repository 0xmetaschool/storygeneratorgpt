import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#2C3440] bg-opacity-90 backdrop-blur-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              StoryGeneratorGPT
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <Link href="/about" className="mr-4 hover:text-white md:mr-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="mr-4 hover:text-white md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/license" className="mr-4 hover:text-white md:mr-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#4A5568] sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-white">
            StoryGeneratorGPT
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
