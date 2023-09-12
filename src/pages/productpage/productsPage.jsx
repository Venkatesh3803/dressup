import "./productsPage.css"
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/Footer'
import ProductsList from "../../components/productsList/productsList"


const ProductsPage = () => {


  return (
    <div>
      <Navber />
      <ProductsList products="PRODUCTS" fillters/>
      <Footer />
    </div>
  )
}

export default ProductsPage