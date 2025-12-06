import { useState } from "react";
import "../index.css";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  const addIngredient = function (formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  return (
    <>
      <main>
        <form className="ingredient-form" action={addIngredient}>
          <input
            aria-label="Add ingredient"
            type="text"
            placeholder="e.g. oregano"
            name="ingredient"
          />

          <button>+ Add Ingredient</button>
        </form>

        {ingredients.length ? (
          <IngredientsList
            ingredients={ingredients}
            toggleRecipeShown={toggleRecipeShown}
          />
        ) : (
          <p className="no-ingredients">Please add some ingredients...</p>
        )}

        {recipeShown && <ClaudeRecipe />}
      </main>
    </>
  );
}

export default Main;
