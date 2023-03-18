import React, {useEffect, useState} from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
import {v4 as uuidv4} from 'uuid';
import RecipeEdit from "./RecipeEdit";


export const recipeContext = React.createContext();
const LOCAL_STORAGE = "localStorage.recipe"
function App() {
    const [recipe, setRecipe] = useState(recipeInfo)
    // j'ai besoin du state recipe dans mon use effect d'ou la définition de se dérnier dans func App
    //the first effect is for getting Local storage content
    useEffect(()=>{
        let item = localStorage.getItem(LOCAL_STORAGE)

        //je dois traiter le cas quand j'ai plus de key
        //donc je set mon state avec le local storage juste dans le cas ou le local storage n'est pas vide
        if (item !== null){
            setRecipe(()=>{
                return JSON.parse(item)
            })
        }
    },[])
    //the second UseEffect is for setting the local Storage with tne new recipe state
    //on peut stocker dans le local Storage que des strings
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE , JSON.stringify(recipe))
    },[recipe])
    // il faut passer cette méthode par prop pour que je puisse l'utiliser dans RecipeList component
    let handelRecipeAdd = () => {
        let newRecipe = {
            id: uuidv4(),
            title: "Plat pour test",
            cookTime: 1,
            servings: 2,
            instructions: "Test Instruction",
            ingredients: [
                {
                    id: uuidv4(),
                    name: "test",
                    amount: "0.5kg"
                },
                {
                    id: uuidv4(),
                    name: "test2",
                    amount: "2 TC"
                }
            ]
        }
        //Pour ce cas il accepte comme argument un array
        setRecipe([...recipe,newRecipe])
    }
    let handelRecipeDelete = (idToDelete) => {
        setRecipe(recipe.filter(e => {
            return e.id !== idToDelete ;
        }))
    }
    const recipeContextValue = {
        handelRecipeAdd ,
        handelRecipeDelete
    }
    return (
        <recipeContext.Provider value={recipeContextValue}>
            <div className="global-container">
                <RecipeList recipe={recipe} />
                <RecipeEdit />
            </div>
        </recipeContext.Provider>

    );
}
// Le définire comme une variable global
const recipeInfo = [
    {
        id: 0,
        title: "Plat poulet",
        cookTime: 12.5,
        servings: 5,
        instructions: "1 . Prepare le poulet.2 . Servez le poulet dans une assiette. 3 . Mange le plat du poulet",
        ingredients: [
            {
                id: 1,
                name: "poulet",
                amount: "0.5kg"
            },
            {
                id: 2,
                name: "sel",
                amount: "1 TC"
            }
        ]
    },
    {
        id: 1,
        title: "Plat dinde",
        cookTime: 2.5,
        servings: 1,
        instructions: " 1 . Prepare le dinde. 2 . Servez le dinde dans une assiette. 3 . Mange le plat du dinde",
        ingredients: [
            {
                id: 1,
                name: "dinde",
                amount: "0.5kg"
            },
            {
                id: 2,
                name: "poivre",
                amount: "2 TC"
            }
        ]
    }
]

export default App;
