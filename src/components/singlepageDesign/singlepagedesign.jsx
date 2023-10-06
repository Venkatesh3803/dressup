import "./singlepagedesign.css"
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai"
import { addToCart } from "../../redux/cartReducer"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { toast } from "react-toastify"

const Singlepagedesign = ({ product }) => {
    const dispatch = useDispatch()

    const [color, setColor] = useState("");
    const [size, setSize] = useState("")
    const [qty, setQty] = useState(1);

    const handleQty = (type) => {
        if (type === "inc") {
            setQty((prev) => qty !== 5 ? prev + 1 : 5)
        } else {
            setQty((prev) => qty !== 1 ? prev - 1 : 1)
        }
    }
    const handleCart = () => {
        if (size === "" || color === "") {
            return toast.warning("Select Color and Size")
        }
        dispatch(
            addToCart({ name: product.name, size, color, qty, image: product.image, price: qty * product.price, id: product._id })
        );
    }

    return (
        <div className='singlepagedesign'>
            <div className="singlepagedesign-container">
                <div className="singlepagedesign-product">
                    <div className="singlepagedesign-left">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="singlepagedesign-right">
                        <h2>{product.name} </h2>
                        <h3>${product.price} </h3>
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

                        <div className="qty">
                            <button onClick={() => handleQty("dec")}>-</button>
                            <span>{qty}</span>
                            <button onClick={() => handleQty("inc")}>+</button>
                        </div>
                        <p>{product.desc}</p>
                        <div className="size">
                            <h4>Sizes :-</h4>
                            <div className="sizes">
                                {product?.size?.map((s) => {
                                    return (
                                        <span onClick={() => setSize(s)} >{s}</span>
                                    )
                                })}
                            </div>

                        </div>

                        <div className="color">
                            <h4>Colors</h4>
                            <div className="colors">
                                {product.color?.map((i) => {
                                    return <span onClick={() => setColor(i)} style={{ backgroundColor: `${i}` }}></span>
                                })}
                            </div>
                        </div>

                        <button onClick={handleCart}>Add to bag</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Singlepagedesign
