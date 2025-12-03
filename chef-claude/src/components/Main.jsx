import "../index.css";

function Main() {
  return (
    <>
      <main>
        <form action="submit" className="ingredient-form">
          <input
            aria-label="Add ingredient"
            type="text"
            placeholder="e.g. oregano"
          />
          <button type="submit">+ Add Ingredient</button>
        </form>
      </main>
    </>
  );
}

export default Main;
