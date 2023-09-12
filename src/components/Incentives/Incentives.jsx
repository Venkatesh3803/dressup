import "./Incentives.css"
import incentiveImg from "../../images/incentives-07-hero.jpg"
const Incentives = () => {
    return (
        <div className="incentives">
            <div className="incentives-container">
                <div className="in-top">
                    <div className="in-left">
                        <h1>We built our business on great customer service</h1>
                        <p>At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.</p>
                    </div>
                    <div className="in-right">
                        <img src={incentiveImg} alt="" />
                    </div>
                </div>
                <div className="in-bottom">
                    <div className="in-delivery">
                        <img src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg" alt="" className="in-icon" />
                        <h3>Free Shipping</h3>
                        <p>It's not actually free we just price it into the products. Someone's paying for it, and it's not us.</p>
                    </div>
                    <div className="in-delivery">
                        <img src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg" alt="" className="in-icon" />
                        <h3>10-year warranty</h3>
                        <p>If it breaks in the first 10 years we'll replace it. After that you're on your own though.

</p>
                    </div>
                    <div className="in-delivery">
                        <img src="https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg" alt="" className="in-icon" />
                        <h3>Easy Exchange</h3>
                        <p>If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Incentives