import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Navbar() {
    const walkVariants = {
        start: { x: -100 },
        end: { x: 100 },
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
                {/* Left Icon */}
                <div className="flex items-center space-x-2">
                    <Menu className="w-6 h-6 text-gray-700" />
                    <motion.span initial={{
                        x:-1000
                    }} animate={{ fontSize: "40px", x:100 }} transition={{
                        duration:0.5,
                    }} className="font-semibold text-lg">FarmApp</motion.span>
                </div>

                {/* Middle NavMenu */}
                <ul className="flex space-x-6">
                    <li className="text-gray-600 hover:text-black cursor-pointer">Home</li>
                    <li className="text-gray-600 hover:text-black cursor-pointer">About</li>
                    <li className="text-gray-600 hover:text-black cursor-pointer">Contact</li>
                </ul>

                {/* Right Login Button */}
                <button>Login</button>
            </nav>

            {/* Animated Farmer */}
            {/* <div className="flex items-center justify-center h-screen bg-green-50">
        <motion.img
          src="/farmer.png" // Replace with your farmer image path
          alt="Farmer walking"
          className="w-32 h-32"
          variants={walkVariants}
          initial="start"
          animate="end"
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
              ease: 'easeInOut'
            }
          }}
        />
      </div> */}
        </div>
    );
}
