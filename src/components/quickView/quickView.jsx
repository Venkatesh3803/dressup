import { Link } from "react-router-dom"
import "./quickview.css"
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai"


const QuickView = ({ setQuickView, product }) => {

    return (
        <div className='quickView'>
            <div className="quickview-container">
                <div className="cancel" onClick={() => setQuickView(false)}>X</div>
                <div className="qv-product">
                    <div className="qv-left">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="qv-right">
                        <h2>{product.name} </h2>
                        <h3>₹{product.price}</h3>
                        <div className="rating">
                            <div className="stars">
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </div>
                            <span>112 reviews</span>
                        </div>
                        <div className="size">
                            <h4>Sizes :-</h4>
                            <div className="sizes">
                                {product?.size?.map((s) => {
                                    return (
                                        <span>{s}</span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="color">
                            <h4>Colors</h4>
                            <div className="colors">
                                {product?.color?.map((i) => {
                                    return <span style={{ backgroundColor: `${i}` }}></span>
                                })}
                            </div>
                        </div>
                        <Link to={`../singleproducts/${product._id}`} className="link">
                            <span className="see-product">See Product</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickView