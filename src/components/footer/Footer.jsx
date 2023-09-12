import "./footer.css"
import { AiFillTwitterSquare, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Dress Up</h1>
            <div className="footer-container">
                <div className="footer-colums">
                    <h4>Contact For any Query</h4>
                    <div className="email-box">
                        <input type="text" placeholder="xyz@gmail.com" />
                        <button>Send</button>
                    </div>
                    <div className="social-links">
                        <AiOutlineFacebook />
                        <AiFillTwitterSquare />
                        <AiOutlineInstagram />
                    </div>
                </div>
                <div className="footer-colums">
                    <h4>Mens</h4>
                    <div >
                        <ul>
                            <li>Shirts</li>
                            <li>T-shirts</li>
                            <li>Accessories</li>
                            <li>Shoes</li>
                            <li>Hoodies</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-colums">
                    <h4>Womens</h4>
                    <div >
                        <ul>
                            <li>Shirts</li>
                            <li>T-shirts</li>
                            <li>Accessories</li>
                            <li>Shoes</li>
                            <li>Hoodies</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-colums">
                    <h4>Services</h4>
                    <div >
                        <ul>
                            <li>cash on devlivery</li>
                            <li>Quick pay</li>
                            <div className="payments">
                                <li>NetBanking</li>
                                <li>gpay</li>
                                <li>Ph pay</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{ color: "white",marginTop:"1rem" }} />
            <p>Copyright decleration </p>
        </div>
    )
}

export default Footer