import "./newArrivalsList.css"

const NewArrivalsList = ({ setMens }) => {
    return (
        <div className='newarrivals' onMouseLeave={() => setMens(false)}>
            <div className="arrivals-container">
                <div className="new-left">

                    <div className="new-arrival-lists">
                        <h4>Clothing</h4>
                        <ul>
                            <li>Tops</li>
                            <li> Dress</li>
                            <li> Pants</li>
                            <li> T-Shirts</li>
                            <li> Sweaters</li>
                            <li> Jackets</li>
                        </ul>
                    </div>

                    <div className="new-arrival-lists">
                        <h4>Accessories</h4>
                        <ul>
                            <li>Watches</li>
                            <li>Wallets</li>
                            <li>Bags</li>
                            <li> Hats</li>
                            <li> Sun Glasses</li>
                        </ul>
                    </div>

                    <div className="new-arrival-lists">
                        <h4>Brands</h4>
                        <ul>
                            <li>Puma</li>
                            <li>Adiddas</li>
                            <li>Nike</li>
                            <li>Fila</li>
                            <li>Zudio</li>
                        </ul>
                    </div>

                </div>


                <div className="new-right">
                    <div className="new-arrival-imgs">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="" />
                        <h3>Arrivals</h3>
                        <p>Shop Now</p>
                    </div>
                    <div className="new-arrival-imgs">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="" />
                        <h3>Puma</h3>
                        <p>Shop Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivalsList