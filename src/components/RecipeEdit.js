import React from 'react'
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit() {
    return (
        <div>
            <div>
                <button>&#10540;</button>
            </div>
            <div>
                {/*Pour liée les 2 c'est par id et htmlFor*/}
                <label htmlFor="name">Name : </label>
                <input id="name" name="nameInput" type="text"/>
                <label htmlFor="time">Cook Time : </label>
                <input id="time" name="timeInput" type="text"/>
                <label htmlFor="serving">Serving : </label>
                <input id="serving" name="servingIput" type="text"/>
                <label htmlFor="instructions">Instructions : </label>
                <textarea id="instructions" name="instructionsArea" placeholder="Insert your instruction here">
                </textarea>
                <span>Ingredients : </span>
                <div>
                    <div>Name</div>
                    <div>Amount</div>
                    <RecipeIngredientEdit />
                    <RecipeIngredientEdit />

                </div>
                <div>
                    <button>Add Ingredient</button>
                </div>

            </div>
        </div>
    )
}