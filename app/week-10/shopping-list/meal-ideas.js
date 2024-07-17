"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setMeals(data.meals || []);
      setSelectedMeal(null);
    };

    if (ingredient) {
      fetchMealIdeas();
    }
  }, [ingredient]);

  const handleMealClick = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    setSelectedMeal(data.meals[0]);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md space-y-4 w-full">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {ingredient && <p className="mb-4">Here are some meal ideas using {ingredient}:</p>}
      <ul className="meal-list space-y-2">
        {meals.length === 0 ? (
          <p>No meal ideas found for {ingredient}.</p>
        ) : (
          meals.map(meal => (
            <li 
              key={meal.idMeal} 
              onClick={() => handleMealClick(meal.idMeal)} 
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-700"
            >
              {meal.strMeal}
            </li>
          ))
        )}
      </ul>
      {selectedMeal && (
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-auto rounded mb-4" />
          <h4 className="text-lg font-bold">Ingredients:</h4>
          <ul className="list-disc list-inside mb-4">
            {Object.keys(selectedMeal)
              .filter(key => key.startsWith('strIngredient') && selectedMeal[key])
              .map(key => (
                <li key={key}>{selectedMeal[key]}</li>
              ))}
          </ul>
          <h4 className="text-lg font-bold mb-2">Instructions:</h4>
          <p className="whitespace-pre-wrap">{selectedMeal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}
