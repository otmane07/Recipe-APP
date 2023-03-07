import React from 'react'
import IngredientsList from './IngredientsList'
export default function Recipe({id, title, cookTime, servings, instructions,ingredients}) {
    return (
        <>
            <div>
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
                    <IngredientsList ingredients = {ingredients} />
                </div>
            </div>
            <div>
                <button>
                    Edit
                </button>
                <button>
                    Delete
                </button>
            </div>
        </>
    )
}