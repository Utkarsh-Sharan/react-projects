import { useState } from "react";
import "../index.css";

function Main() {
  const [ingredients, setIngredients] = useState([]);

  const mapIngredients = ingredients.map((ing) => {
    return <li key={ing}>{ing}</li>;
  });

  const handleSubmit = function (e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  };

  return (
    <>
      <main>
        <form className="ingredient-form" onSubmit={handleSubmit}>
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
