import React from "react";

function IngredientsList(props) {
  const ingredientListItems = props.ingredients.map((ing) => {
    return <li key={ing}>{ing}</li>;
  });

  return (
    <>
      <section className="main-section">
        <h2>Ingredients in hand:</h2>

        <ul className="ingredient-list">{ingredientListItems}</ul>

        {props.ingredients.length >= 4 ? (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>

              <p>Generate a recipe from your list of ingredients.</p>
            </div>

            <button onClick={props.toggleRecipeShown}>Get a recipe</button>
          </div>
        ) : (
          <p>
            Please add {4 - props.ingredients.length} more ingredients to get a
            recipe
          </p>
        )}
      </section>
    </>
  );
}

export default IngredientsList;
