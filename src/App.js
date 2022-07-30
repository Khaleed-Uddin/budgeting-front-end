import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

import Edit from "./Pages/Edit"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import New from "./Pages/New"
import Show from "./Pages/Show"
import Index from "./Pages/Index"

import NavBar from "./Components/NavBar"
import Item from "./Components/Item"
import Items from "./Components/Items"
import ItemDetails from "./Components/ItemDetails"
import EditItems from "./Components/EditItems"
import NewItems from "./Components/NewItems"

export default function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Index />} />
          <Route path="/items/new" element={<New />} />
          <Route path="/items/:index" element={<Show />} />
          <Route path="/items/:index/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}
