import React from 'react'

export default function RecipeIngredientEdit({ handelIngredientChange , ingredient ,handelDeleteIngredient}) {
    let handelChange = (changes) => {
        handelIngredientChange(ingredient.id , {...ingredient,...changes})
    }
    return (
        <>
            <input id="ingName" name="ingredName" value = {ingredient.name} className="ingredient__name"
                   onInput ={(e)=>{
                       handelChange({name: e.target.value})
                   }}
            />
            <input id="amount" name="amountName"
                   value = {ingredient.amount} className="ingredient__amount"
                   onInput ={(e)=>{
                       handelChange({amount: e.target.value})
                   }}
            />
            <button className="delete__ingredient"
                    onClick={()=>{
                        handelDeleteIngredient(ingredient.id)
                    }
                    }
            >&#10540;</button>
        </>
    )
}