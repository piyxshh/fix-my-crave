import { motion } from 'framer-motion';

const RecipePage = ({ recipe, onBack }) => {
  // Handle case where recipe or required data is missing
  if (!recipe || (!recipe.recipe && !recipe.ingredients)) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
      >
        <div className="text-center text-gray-400">
          <p>Recipe details coming soon!</p>
          <button
            onClick={onBack}
            className="mt-4 text-teal-400 hover:text-teal-300 flex items-center gap-2 transition-colors mx-auto"
          >
            <span>←</span>
            <span>Back to alternatives</span>
          </button>
        </div>
      </motion.div>
    );
  }

  // Get recipe data from either structure
  const recipeData = recipe.recipe || recipe;
  const title = recipe.title;
  const icon = recipe.icon;
  const ingredients = recipeData.ingredients || [];
  const instructions = recipeData.instructions || [];
  const video = recipeData.video;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl mx-auto bg-gray-800/70 rounded-xl p-8 shadow-lg relative">
        <button
          onClick={onBack}
          className="absolute top-4 left-4 text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
        >
          <span>←</span>
          <span>Back</span>
        </button>
        <div className="text-center mb-8">
          <span className="text-5xl">{icon}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            {title}
          </h1>
        </div>
        {ingredients.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside text-gray-300">
              {ingredients.map((item, idx) => (
                <li key={idx} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {instructions.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Instructions:</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              {instructions.map((step, idx) => (
                <li key={idx} className="pl-2">{step}</li>
              ))}
            </ol>
          </div>
        )}
        {video && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-white mb-2">Video Resource:</h2>
            <a 
              href={video} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-400 hover:text-teal-300 underline transition-colors"
            >
              Watch Video Tutorial
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RecipePage; 