import "./checkoutform.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearCart, removeProduct } from "../../redux/cartReducer"
import { toast } from "react-toastify"
import { userRequest } from "../../requestMethods"
import { Link } from "react-router-dom"



const Checkoutform = () => {

    const [payNow, setPayNow] = useState(false);
    const [inputs, setInputs] = useState({});
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ""
    const cart = useSelector((state) => state.cart);
    let total = useSelector((state) => state.cart.total);
    const dispatch = useDispatch()
    const { products } = cart;
    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }
    let shipping = 60;
    total = total + shipping;

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await userRequest.post("/order", {
                userId: user._id,
                email: inputs.email,
                products: products,
                address: inputs.address,
                house_no: inputs.house_no,
                city: inputs.city,
                province: inputs.province,
                pincode: inputs.pincode,
                totalPrice: total,
                phonenumber: inputs.phonenumber,
                paymentType: "COD",
            },


            )
            const data = await res.data;

            if (data === "orders Sucessfully") {
                toast.success("ordered Sucessfully", {
                    position: "bottom-center"
                })
            }

            dispatch(clearCart())

        } catch (err) {
            return (err)
        }
    }



    return (
        <div className='checkoutform'>
            <div className="checkout-container">
                <div className="checkout-right">
                    <h4 className="headings"> Order Summery</h4>
                    {products && products.map((prod) => {
                        return (
                            <>
                                <div key={prod.id} className="checkout-product-list">
                                    <div className="checkout-img">

                                        <img src={prod.image} alt="" />

                                        <div className="checkout-info">
                                            <Link to={`/singleproducts/${prod.id}`} className="link">
                                                <h4>{prod.name}</h4>
                                            </Link>
                                            <p>Color : {prod.color}</p>
                                            <p>Size : {prod.size}</p>
                                            <div className="checkout-qty">
                                                <button>-</button>
                                                <span>{prod.qty}</span>
                                                <button>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-price">
                                        <p> ₹{prod.price}.00</p>
                                        <button onClick={() => dispatch(removeProduct(prod))}>Remove</button>
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })}

                    <hr />

                    <div className="checkout-price-details">
                        <div className="checkout-subtotal">
                            <span>Subtotal</span>
                            <span> ₹{total - shipping}.00</span>
                        </div>
                        <div className="checkout-subtotal">
                            <span>Shipping</span>
                            <span> ₹{shipping}.00</span>
                        </div>
                        <div className="checkout-subtotal">
                            <span>Discount</span>
                            <span> ₹0.00</span>
                        </div>
                        <hr />
                        <div className="checkout-subtotal">
                            <span style={{ fontWeight: "600" }}>Grand Total</span>
                            <span> ₹{total }.00</span>
                        </div>


                    </div>
                </div>
                <div className="checkout-left">
                    <h4 className='headings'>Contact Information</h4>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="from-inputs">
                            <label htmlFor="">Email address</label>
                            <input type="text" placeholder='xyz@gmail.com' name="email" value={inputs.email || ""} onChange={handleChange} />
                        </div>
                        <div className="from-inputs">
                            <label htmlFor="">phone Number</label>
                            <input type="text" placeholder='' name="phonenumber" value={inputs.phonenumber || ""} onChange={handleChange} />
                        </div>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <span className="paynow-btn" onClick={() => setPayNow(!payNow)}>Pay Now</span>
                            <span className="paynow-btn" >Cod</span>
                        </div>
                        {payNow &&
                            <div className="paynow">
                                <h4 className='headings'>Payment Details</h4>

                                <div className="from-inputs">
                                    <label htmlFor="">Name on card</label>
                                    <input type="text" />
                                </div>
                                <div className="from-inputs">
                                    <label htmlFor="">Card Number</label>
                                    <input type="text" />
                                </div>
                                <div className="form-col">
                                    <div className="from-inputs">
                                        <label htmlFor="">Expiration Date(MM/YY)</label>
                                        <input type="text" placeholder='07/22' />
                                    </div>
                                    <div className="from-inputs">
                                        <label htmlFor="">CVV</label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        }
                        <h4 className='headings'>Shipping address</h4>

                        <div className="from-inputs">
                            <label htmlFor="">Address</label>
                            <input type="text" name="address" value={inputs.address || ""} onChange={handleChange} />
                        </div>
                        <div className="from-inputs">
                            <label htmlFor="">House Number</label>
                            <input type="text" name="house_no" value={inputs.house_no || ""} onChange={handleChange} />
                        </div>
                        <div className="form-col">
                            <div className="from-inputs">
                                <label htmlFor="">City</label>
                                <input type="text" name="city" value={inputs.city || ""} onChange={handleChange} />
                            </div>
                            <div className="from-inputs">
                                <label htmlFor="">State / Province</label>
                                <input type="text" name="province" value={inputs.province || ""} onChange={handleChange} />
                            </div>
                            <div className="from-inputs">
                                <label htmlFor="">Postal Code</label>
                                <input type="text" name="pincode" value={inputs.pincode || ""} onChange={handleChange} />
                            </div>
                        </div>
                        <hr />
                        <button type="submit">Place Order</button>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default Checkoutform
