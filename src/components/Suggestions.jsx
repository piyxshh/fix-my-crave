import { motion } from 'framer-motion';

const Suggestions = ({ suggestions }) => {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {suggestions.map((suggestion, index) => (
        <motion.div
          key={index}
          variants={item}
          className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700
                   hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300
                   hover:border-teal-500/50"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-4xl">{suggestion.icon}</span>
            <div className="h-8 w-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full opacity-20"></div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2">{suggestion.title}</h3>
          <p className="text-gray-400 text-sm">{suggestion.description}</p>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <button className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors duration-300">
              Learn more →
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Suggestions; 