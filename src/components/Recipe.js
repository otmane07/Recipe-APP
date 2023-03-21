import React, {useContext} from 'react'
import IngredientsList from './IngredientsList'
import {recipeContext} from './App'


export default function Recipe({id,title, cookTime, servings, instructions, ingredients}) {
    let recipeContextValue = useContext(recipeContext)
    let {handelRecipeDelete , handelRecipeEdit} = recipeContextValue ;
    return (
        <>
            <div className="recipe">
                <div className="recipe-info">
                    <h1>{title}</h1>
                    <div>
                        <span> CookTime : </span>
                        <span> {cookTime} </span>
                    </div>
                    <div>
                        <span> Servings : </span>
                        <span> {servings} </span>
                    </div>
                    <div>
                        <span> instructions : </span>
                        <div>
                            {instructions}
                        </div>
                    </div>
                    <div>
                        <IngredientsList ingredients={ingredients}/>
                    </div>
                </div>
                <div>
                    <button className="btn btn-edit"
                            onClick={() => {
                                handelRecipeEdit(id)
                            }
                    }>
                        Edit
                    </button>
                    <button className="btn btn-delete"
                            onClick={() => {
                                handelRecipeDelete(id)
                             }
                    }>
                        Delete
                    </button>
                </div>
            </div>

        </>
    )
}