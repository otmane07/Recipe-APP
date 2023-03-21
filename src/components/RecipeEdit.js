import React, {useContext} from 'react'
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import {recipeContext} from "./App"
import {v4 as uuidv4} from "uuid";

export default function RecipeEdit() {
    let recipeContextValue = useContext(recipeContext)
    let {selectedRecipe , handelFromEditChange , handelRecipeEdit } = recipeContextValue
    let handelAddIngredient = () => {
        let newIngredient = {
            id: uuidv4(),
            name: "test",
            amount: "test"
        }
        //mes nv ingredients
        let ingredients = [...selectedRecipe.ingredients,newIngredient ]
        let nvRecipe = {...selectedRecipe ,ingredients }
        handelFromEditChange(selectedRecipe.id , nvRecipe)

    }
    let handelDeleteIngredient = (id) => {
        let ingredients = selectedRecipe.ingredients.filter((e)=>{
            return e.id !== id ;
        })
        let nvRecipe = {...selectedRecipe ,ingredients }
        handelFromEditChange(selectedRecipe.id , nvRecipe)
    }

    let handelEdit = (changes) => {
        handelFromEditChange(selectedRecipe.id , {...selectedRecipe , ...changes} )
    }
    let handelIngredientChange = (idIngredientToEdit , ingrdientChange) => {
        let mesIngredient = [...selectedRecipe.ingredients]
        let nvIngredientIndex =  mesIngredient.findIndex(ingredient => ingredient.id === idIngredientToEdit )
        mesIngredient[nvIngredientIndex] = ingrdientChange
        handelEdit({ingredients : mesIngredient})
    }


    return (
        <div className="edit-recipe">
            <div className="edit-recipe__remove-btn-container">
                <button
                    className="btn edit-recipe__remove-btn"
                    onClick={()=>{
                        // cette definie idSelected il suffit de passer undifined pour que idSelected soit undefined
                        handelRecipeEdit(undefined)
                    }
                    }
                >&#10540;</button>
            </div>
            <div className="edit-recipe__primary-grid">
                {/*Pour liée les 2 c'est par id et htmlFor*/}
                <label htmlFor="name" className="edit-recipe__label">Name </label>
                <input id="name" name="nameInput" value={selectedRecipe?.title || '' } type="text"
                       className="edit-recipe__input"
                        onInput ={(e)=>{
                            handelEdit({title: e.target.value})
                        }
                        }
                />
                <label htmlFor="time" className="edit-recipe__label">Cook Time </label>
                <input id="time" name="timeInput" value={selectedRecipe?.cookTime || ''} type="text"
                       className="edit-recipe__input"
                       onInput ={(e)=>{
                           handelEdit({cookTime: e.target.value})
                       }
                       }
                />
                <label htmlFor="serving" className="edit-recipe__label">Serving </label>
                <input id="serving" name="servingIput" value={selectedRecipe?.servings || ''} type="text"
                       className="edit-recipe__input"
                       onInput ={(e)=>{
                           handelEdit({servings: e.target.value})
                       }
                       }
                />
                <label htmlFor="instructions" className="edit-recipe__label">Instructions </label>
                <textarea id="instructions" name="instructionsArea" value={selectedRecipe?.instructions || ''}
                          className="edit-recipe__text-area" placeholder="Insert your instruction here"
                          onInput ={(e)=>{
                              handelEdit({instructions: e.target.value})
                          }
                }
                >
                </textarea>
                <span className="edit-recipe__label">Ingredients  </span>
                <div className="edit-recipe__primary-grid__ingredient-grid">
                    <div className="edit-recipe__ingredients__label">Name</div>
                    <div className="edit-recipe__ingredients__label">Amount</div>
                    {/*{e.id} : Pourqoui les acolade ici car je vais ecrire du Js et acceder au id de l'objet*/}
                    {selectedRecipe?.ingredients.map((ingredient )  => {
                        return <RecipeIngredientEdit
                            handelIngredientChange = {handelIngredientChange}
                            handelDeleteIngredient = {handelDeleteIngredient}
                            key={ingredient.id}
                            ingredient = {ingredient}
                        />
                    })}

                </div>
                <div className="edit-recipe__primary-grid__add-button__container">
                    <button className="edit-recipe__primary-grid__add-button"
                            onClick={handelAddIngredient}
                    >Add Ingredient</button>
                </div>

            </div>
        </div>
    )
}