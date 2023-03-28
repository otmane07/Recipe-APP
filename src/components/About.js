import React from 'react'
import {useParams} from "react-router-dom";

export default function About () {
    //pour Recuperer les paramaetre dynamiquer paser dans url
    let params = useParams()
  return (
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi debitis doloremque doloribus dolorum eligendi enim impedit iste iusto magnam maxime, obcaecati perspiciatis praesentium quasi quos sapiente sit voluptatem voluptatum?</p>
        <h2>Test routing params </h2>
        {params?.id} <span> First Url param</span>
        {params?.name} <span> Second Url param</span>
    </div>
  )
}