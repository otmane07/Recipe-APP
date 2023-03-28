import React, {useEffect, useState} from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
import {v4 as uuidv4} from 'uuid';
import RecipeEdit from "./RecipeEdit";
import About from "./About"

import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";

export const recipeContext = React.createContext();
const LOCAL_STORAGE = "localStorage.recipe"
function App() {
    const [selectedRecipeId , setSelectedRecipeId] = useState(" ")
    const [recipe, setRecipe] = useState(recipeInfo)

    let location = useLocation();

    //get the recipe to edit from selectedRecipeId
    // find : give a condition if true return the element how passed it
    let selectedRecipe = recipe.find( (e) => {
        return e.id === selectedRecipeId
    })

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
            title: "Nouveau Plat",
            cookTime: 1,
            servings: 1,
            instructions: "",
            ingredients: [
                {
                    id: uuidv4(),
                    name: " ",
                    amount: " "
                },
                {
                    id: uuidv4(),
                    name: " ",
                    amount: " "
                }
            ]
        }
        //Pour que la reccette soit automatiquement selected
        setSelectedRecipeId(newRecipe.id)
        //Pour ce cas il accepte comme argument un array
        setRecipe([...recipe,newRecipe])
    }
    let handelRecipeDelete = (idToDelete) => {
        setRecipe(recipe.filter(e => {
            return e.id !== idToDelete ;
        }))
    }
    let handelRecipeEdit = (idToEdit) => {
        setSelectedRecipeId(idToEdit)
    }
    let handelFromEditChange = (idToEdit,newRecipe) => {
        // Ce que je recoit du component fils
        // Premiérement je doit cloné le state de la liste des recipes
        let recipeArray = [...recipe]
        // Je dois trouver l'indice du recipe a changer dans la liste des recipes
        let indexRecipeToEdit = recipeArray.findIndex((e)=> e.id === idToEdit)
        recipeArray[indexRecipeToEdit] = newRecipe ;
        setRecipe(recipeArray)
    }
    const recipeContextValue = {
        handelRecipeAdd ,
        handelRecipeDelete ,
        handelRecipeEdit ,
        handelFromEditChange,
        selectedRecipe
    }
    return (
        <recipeContext.Provider value={recipeContextValue}>
            <NavBar/>
            <div className="global-container">
                <Routes>
                    <Route path="/" element={<Navigate to="/recipe"/>}  />
                    <Route path={"/recipe"} element={<RecipeList recipe={recipe}  />}/>
                    <Route path={"/about/:id/:name"} element={<About />}/>
                    <Route path={"*"} element={<PageNotFound />}/>
                </Routes>
                {selectedRecipe && location?.pathname === "/" && <RecipeEdit /> }
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
                id: 3,
                name: "poulet",
                amount: "0.5kg"
            },
            {
                id: 4,
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
