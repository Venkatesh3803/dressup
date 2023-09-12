import Incentives from "../../components/Incentives/Incentives"
import Anouncement from "../../components/anouncement/Anouncement"
import Banner from "../../components/banner/banner"
import Categories from "../../components/categories/categories"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Navber from "../../components/navber/navber"
import ProductsList from "../../components/productsList/productsList"

import "./homepage.css"

const Homepage = () => {
    return (
        <div>
            <Anouncement />
            <Navber />
            <Hero />
            <Categories />
            <ProductsList popular="New Arrivals" />
            <Banner />
            <ProductsList popular="Popular Products" />
            <Incentives/>
            <Footer />
        </div>
    )
}

export default Homepage
