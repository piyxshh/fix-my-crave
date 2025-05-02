import { motion } from 'framer-motion';

const Hero = ({ onStartClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-20 -right-20 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-teal-500/20 rounded-full blur-sm animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-500/20 rounded-full blur-sm animate-float-delayed"></div>
      </div>

      {/* Main Content */}
      <div className="relative space-y-8 max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Fix My Crave
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Transform your cravings into healthy, delicious alternatives
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.button
            onClick={onStartClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full
                     font-semibold text-lg text-white shadow-xl hover:shadow-teal-500/25
                     transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Discover Healthy Alternatives</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4 text-gray-400"
          >
            <span className="text-2xl">🥑</span>
            <span className="text-2xl">🥗</span>
            <span className="text-2xl">🍎</span>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-gray-400 text-sm md:text-base"
        >
          Your journey to healthier choices starts here
        </motion.p>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {['🥦', '🍇', '🥝', '🥜', '🫐'].map((emoji, index) => (
          <motion.span
            key={index}
            className="absolute text-2xl"
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: -100,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 1.5,
              ease: "easeOut"
            }}
            style={{
              left: `${15 + index * 20}%`,
              bottom: '20%',
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Hero; 