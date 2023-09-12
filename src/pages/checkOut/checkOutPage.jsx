import "./checkOutPage.css"
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/Footer'
import Checkoutform from "../../components/checkoutForm/checkoutform"

const CheckOutPage = () => {
    return (
        <div>
            <Navber />
            <Checkoutform/>
            <Footer />
        </div>
    )
}

export default CheckOutPage
