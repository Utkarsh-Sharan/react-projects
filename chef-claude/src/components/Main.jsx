import { useState } from "react";
import "../index.css";
import ClaudeRecipe from "./ClaudeRecipe.jsx";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientListItems = ingredients.map((ing) => {
    return <li key={ing}>{ing}</li>;
  });

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
          <section className="main-section">
            <h2>Ingredients in hand:</h2>

            <ul className="ingredient-list">{ingredientListItems}</ul>

            {ingredients.length >= 4 ? (
              <div className="get-recipe-container">
                <div>
                  <h3>Ready for a recipe?</h3>

                  <p>Generate a recipe from your list of ingredients.</p>
                </div>

                <button onClick={toggleRecipeShown}>Get a recipe</button>
              </div>
            ) : (
              <p>
                Please add {4 - ingredients.length} more ingredients to get a
                recipe
              </p>
            )}
          </section>
        ) : (
          <p className="no-ingredients">Please add some ingredients...</p>
        )}

        {recipeShown && <ClaudeRecipe />}
      </main>
    </>
  );
}

export default Main;
