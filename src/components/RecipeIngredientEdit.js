import React from 'react'

export default function RecipeIngredientEdit() {
    return (
        <div>
            <label htmlFor="ingName"> Name</label>
            <input id="ingName" name="ingredName"/>
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amountName"/>
            <button>&#10540;</button>
        </div>
    )
}