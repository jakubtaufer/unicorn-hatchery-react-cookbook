import "./App.css";
import React, { useState, useEffect } from "react";
import CookbookInfo from "./bricks/CookbookInfo";
import RecipeList from "./bricks/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import recipeList from "./MyRecipes";

const cookbook = {
  name: "Najlepšie jedlo",
};

function App() {
  const [cookbookLoadCall, setCookbookLoadCall] = useState({
    state: "pending",
  });
  const [ingredientLoadCall, setIngredientLoadCall] = useState({
    ingState: "pending",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/recipe/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setCookbookLoadCall({ state: "error", error: responseJson });
      } else {
        setCookbookLoadCall({ state: "success", data: responseJson });
      }
      console.log(responseJson);
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/ingredient/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setIngredientLoadCall({ ingState: "error", error: responseJson });
      } else {
        setIngredientLoadCall({ ingState: "success", data: responseJson });
      }
    });
  }, []);

  // console.log(ingredientLoadCall.data);
  // console.log(cookbookLoadCall.data);
  const ingredientList = ingredientLoadCall.data;
  const recipeList = cookbookLoadCall.data;
  return (
    <div className="App">
      <div className="header">
        <CookbookInfo cookbook={cookbook} />
      </div>
      <div className="grid">
        <RecipeList recipeList={recipeList} ingredientList={ingredientList} />
      </div>
    </div>
  );
}

export default App;
