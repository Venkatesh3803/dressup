import React from 'react'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/Footer'
import ProductsList from "../../components/productsList/productsList"

const ShoesPage = () => {
    return (
        <div>
            <Navber />
            <ProductsList products="PRODUCTS" fillters />
            <Footer />
        </div>
    )
}

export default ShoesPage