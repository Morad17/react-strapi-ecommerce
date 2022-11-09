import React from 'react'
import MainCarousel from "../components/MainCarousel"
import ShoppingList from "../components/ShoppingList"

import Navbar from '../components/global/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <MainCarousel />
        <ShoppingList />
    </div>
  )
}

export default Home