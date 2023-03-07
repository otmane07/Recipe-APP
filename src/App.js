import React from "react";
import RecipeList from "./Components/RecipeList";

// Le définire comme une variable global
const recipeInfo = [
  {
    id : 0 ,
    title : "Plat poulet",
    cookTime : 12.5,
    servings : 5 ,
    instructions :"1 . Prepare le poulet.2 . Servez le poulet dans une assiette. 3 . Mange le plat du poulet",
    ingredients : [
      {
        id:1,
        name:"poulet",
        amount:"0.5kg"
      },
      {
        id: 2,
        name:"sel",
        amount:"1 TC"
      }
    ]
  },
  {
    id : 1 ,
    title : "Plat dinde",
    cookTime : 2.5,
    servings : 1 ,
    instructions :" 1 . Prepare le dinde. 2 . Servez le dinde dans une assiette. 3 . Mange le plat du dinde",
    ingredients : [
      {
        id:1,
        name:"dinde",
        amount:"0.5kg"
      },
      {
        id: 2,
        name:"poivre",
        amount:"2 TC"
      }
    ]
  }
]
function App() {
  return (
      <RecipeList recipe = {recipeInfo} />
  ) ;
}

export default App;
