import React from 'react'
import MainCarousel from "../components/MainCarousel"
import ShoppingList from "../components/ShoppingList"
import Subscribe from '../components/global/Subscribe'

import Navbar from '../components/global/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <MainCarousel />
        <ShoppingList />
        <Subscribe />
    </div>
  )
}

export default Home