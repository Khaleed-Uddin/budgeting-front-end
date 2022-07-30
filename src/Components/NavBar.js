import React from 'react'
import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <div className='NavBar'>
    <nav>

      <NavLink to="/"><h1>Budget App!!</h1></NavLink>

      <button>
        <NavLink to="/items">Transactions</NavLink>
      </button>

      <button>
        <NavLink to="/items/new">New Transactions</NavLink>
      </button>

    </nav>
    </div>
  )
}
