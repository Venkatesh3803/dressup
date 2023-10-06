import React from 'react'
import Navber from '../../components/navber/navber'
import ProductsList from "../../components/productsList/productsList"
import Footer from '../../components/footer/Footer'

const MensProducts = () => {
    return (
        <div>
        <Navber />
        <ProductsList products="PRODUCTS" fillters gend={"mens"}/>
        <Footer />
      </div>
    )
}

export default MensProducts
