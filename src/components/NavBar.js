import React  from 'react'
import {Link } from "react-router-dom";

export default function  NavBar () {
  return (
      <ul className="nav-bar-list">
        <li>
          <Link to="/recipe" className="nav-bar-list__element">My Recepies </Link>
        </li>
        <li>
          <Link to="/about" className="nav-bar-list__element">About</Link>
        </li>
      </ul>
  )
}