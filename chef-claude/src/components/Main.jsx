import { useState } from "react";
import "../index.css";

function Main() {
  const [ingredients, setIngredients] = useState([]);

  const mapIngredients = ingredients.map((ing) => {
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

        <ul>{mapIngredients}</ul>
      </main>
    </>
  );
}

export default Main;
