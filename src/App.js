import "./App.css";
import React from "react";
import CookbookInfo from "./bricks/CookbookInfo";
import RecipeList from "./bricks/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import recipeList from "./MyRecipes";

const cookbook = {
  name: "Najlepšie jedlo",
};

function App() {
  return (
    <div className="App">
      <div className="header">
        <CookbookInfo cookbook={cookbook} />
      </div>
      <div className="grid">
        <RecipeList recipeList={recipeList} />
      </div>
    </div>
  );
}

export default App;
