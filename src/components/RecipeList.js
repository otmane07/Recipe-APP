import React, {useContext} from 'react'
import Recipe from './Recipe'
//normal export
import {recipeContext} from './App'

//Dans se component ou je vais boucle sur la liste des recipes envoyer par App.js
//puis afecter l'objet correspander a une recette
//I will use object destructing to destructe props object
export default function RecipeList({recipe}) {
    let recipeContextValue = useContext(recipeContext)
    let {handelRecipeAdd} = recipeContextValue ;
    return (
        <>
           <div className="recipe-list">
            <div className="recipe-list-container">
                {
                    recipe?.map((recipe) => {
                        // spread operator ici donne place key and the value of the object like attr of the tag
                        // comme si on écrit <Recipe key={recipe.id} id = 0 title = "plat de poulet" .. />
                        // on peut definir une nouvelle prop recipeInfo est passe notre objet de dans
                        // ex <Recipe key={recipe.id} recipeInfo = recipe /> mais c'est la facon la plus difficile
                        // puis on a definit key att to prevent every child must have unique id error
                        return <Recipe key={recipe.id} {...recipe} />
                    })
                }
            </div>
               {/*Maintenant quand j'ai la declaration j'appele la fct par son nom*/}
            <button className="btn btn-add" onClick= {handelRecipeAdd}> Add Recipe</button>
           </div>
        </>
    )
}