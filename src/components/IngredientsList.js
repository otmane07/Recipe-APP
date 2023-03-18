import React from 'react'
import Ingredient from './Ingredient'

export default function ingredientsList ({ingredients}) {
    // Je vais boucle sur la liste en dehors du jsx pour voire une autre que celle utiliser RecipeList
    let listeOfIngredients = ingredients.map((ingredient)=>{
        return <Ingredient key={ingredient.id} {...ingredient} />
    })
  return (
    <div>
      <span>Ingredients : </span>
        <div className="Ingredients-info">
            {listeOfIngredients}
        </div>
    </div>
  )
}