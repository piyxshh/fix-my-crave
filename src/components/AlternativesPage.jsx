import { motion } from 'framer-motion';
import { cravingsData } from '../data/cravingsData';

const AlternativesPage = ({ craving, onBack, onRecipeSelect }) => {
  const alternatives = cravingsData[craving] || [];
  const cravingTitle = craving.charAt(0).toUpperCase() + craving.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-6xl">
        {/* Back Button */}
        <div className="mb-8">
          <motion.button
            onClick={onBack}
            className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
            whileHover={{ x: -4 }}
          >
            <span>←</span>
            <span>Back to Cravings</span>
          </motion.button>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Healthy Alternatives for {cravingTitle}
              </span>
            </h1>
            <p className="text-gray-400">
              Discover these nutritious and delicious options
            </p>
          </motion.div>

          {/* Alternatives Grid */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full"
          >
            {alternatives.map((alternative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6
                         hover:border-teal-500/50 transition-all duration-300
                         hover:shadow-lg hover:shadow-teal-500/10
                         w-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{alternative.icon}</span>
                  <div className="h-8 w-8 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {alternative.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {alternative.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <button 
                    className="text-teal-400 hover:text-teal-300 text-sm font-medium flex items-center gap-1 transition-colors"
                    onClick={() => onRecipeSelect && onRecipeSelect(alternative)}
                  >
                    Learn Recipe
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-20 -right-20 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
    </motion.div>
  );
};

export default AlternativesPage; 