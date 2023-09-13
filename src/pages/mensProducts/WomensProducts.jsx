import React from 'react'
import Navber from '../../components/navber/navber'
import ProductsList from "../../components/productsList/productsList"
import Footer from '../../components/footer/Footer'

const WomensProducts = () => {
    return (
        <div>
        <Navber />
        <ProductsList products="PRODUCTS" fillters/>
        <Footer />
      </div>
    )
}

export default WomensProducts
