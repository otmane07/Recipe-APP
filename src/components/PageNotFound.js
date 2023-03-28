import React from 'react'
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

export default function PageNotFound () {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Page not Found </h1>
        {/*Premiére Solution pour retourner vers recipes*/}
        <Link to="/">Retiurn to recipe List</Link>
        {/*Déuxiéme solution pour naviguer vers recipes */}
        <button onClick={()=>{
                    navigate("/")
                        }
                }
        >
        Back to recipes
        </button>

    </div>
  )
}