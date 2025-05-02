import { motion } from 'framer-motion';
import { commonCravings } from '../data/cravingsData';

const CravingInput = ({ onCravingSelect }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {commonCravings.map((craving) => (
          <motion.button
            key={craving.id}
            onClick={() => onCravingSelect(craving.id)}
            className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl
                     hover:bg-gray-700/50 transition-all duration-300
                     flex flex-col items-center justify-center gap-2
                     hover:border-teal-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-3xl">{craving.icon}</span>
            <span className="text-gray-300 text-sm text-center">{craving.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CravingInput; 