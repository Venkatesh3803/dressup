import "./ProductsCard.css"
import { useState } from "react"
import QuickView from "../quickView/quickView"
import { Link } from "react-router-dom"

const ProductsCard = ({ single, prod }) => {
    const [quickView, setQuickView] = useState(false)

    return (
        <>
            <div className='cards'>
                <div className="cards-container">
                    <div className="product-img">
                        {single ? " " :
                            <div className="black" onClick={() => setQuickView(!quickView)}>
                                Quick View
                            </div>
                        }
                        <Link to={`/singleproducts/${prod._id}`}>
                            <img src={prod.image} alt="" />
                        </Link>
                    </div>
                    <div className="card-info">
                        <h3>{prod.name}</h3>
                        <div className="details">
                            <div className="d-left">
                                <p>{prod.brand}</p>
                                <div className="color">
                                    <div className="card-colors">
                                        {prod.color?.map((i) => {
                                            return <span style={{ backgroundColor: `${i}` }}></span>
                                        })}
                                    </div>
                                </div>
                                <div className="size">
                                    <div className="card-sizes">
                                        {prod?.size?.map((s) => {
                                            return (
                                                <span >{s}</span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="d-right">
                                <h2>₹{prod.price}</h2>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {quickView &&
                <QuickView setQuickView={setQuickView} product={prod} />
            }

        </>
    )
}

export default ProductsCard