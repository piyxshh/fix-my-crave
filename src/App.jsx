import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cravingsData } from './data/cravingsData'
import Hero from './components/Hero'
import CravingInput from './components/CravingInput'
import AlternativesPage from './components/AlternativesPage'
import RecipePage from './components/RecipePage'
import './App.css'

function App() {
  const [showInput, setShowInput] = useState(false)
  const [selectedCraving, setSelectedCraving] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleCravingSelect = (craving) => {
    setSelectedCraving(craving)
  }

  const handleBack = () => {
    setSelectedCraving(null)
  }

  const handleRecipeSelect = (alternative) => {
    setSelectedRecipe(alternative)
  }

  const handleRecipeBack = () => {
    setSelectedRecipe(null)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatePresence mode="wait">
        {!showInput ? (
          <Hero onStartClick={() => setShowInput(true)} key="hero" />
        ) : selectedRecipe ? (
          <RecipePage 
            recipe={selectedRecipe}
            onBack={handleRecipeBack}
            key="recipe"
          />
        ) : selectedCraving ? (
          <AlternativesPage 
            craving={selectedCraving} 
            onBack={handleBack}
            onRecipeSelect={handleRecipeSelect}
            key="alternatives"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            key="craving-input"
          >
            <div className="pt-8 pb-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Fix My Crave
              </h2>
              <p className="mt-2 text-gray-400">Select your craving below</p>
            </div>
            <CravingInput onCravingSelect={handleCravingSelect} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
