import { useState } from "react";
import "../index.css";

function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientListItems = ingredients.map((ing) => {
    return <li key={ing}>{ing}</li>;
  });

  const addIngredient = function (formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  };

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

        <section className="main-section">
          <h2>Ingredients in hand:</h2>

          <ul className="ingredient-list">{ingredientListItems}</ul>

          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>

              <p>Generate a recipe from your list of ingredients.</p>
            </div>

            <button>Get a recipe</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
