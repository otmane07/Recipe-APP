import React from 'react'

export default function Ingredient({name, amount}) {
    return (
        <>
            <span className="ingredient-name">{name}</span>
            <span className="ingredient-amount">{amount}</span>
        </>
    )
}