import React from 'react'
import {Routes, Route, Link } from "react-router-dom"
import Home from '../Pages/Home'
import Hotel from '../Pages/Hotel'
import List from '../Pages/List'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<List/>}></Route>
        <Route path='/hotels/:id' element={<Hotel/>}></Route>
    </Routes>
  )
}

export default AllRoutes