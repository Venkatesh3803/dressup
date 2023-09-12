import React, { useEffect, useState } from 'react'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/Footer'
import img from "../../images/1st pink 2.jpg"
import "./myOrders.css"
import axios from 'axios'




const MyOrders = () => {
    const [orders, setOrders] = useState("")
    const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ""

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/order/single/${token._id}`, {
                    headers: {
                        "token": `Bearer ${token?.token}`
                    }
                });
                const date = await res.data;
                setOrders(date)
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
    }, [token._id, token.token])



    return (
        <div>
            <Navber />
            {/* orders design */}
            <div className="myorders">
                <div className="myorders_container">
                    {orders && orders?.map((o) => {
                        return (

                            <div className="my_orders_list">
                                <div className="myorders_top">
                                    <h2>Order_id :-<span style={{ fontSize: "18px" }}>{o._id}</span></h2>
                                    <p>Order placed <b>March 15, 2023</b></p>
                                </div>
                                {o.products?.map((p) => {
                                    return (
                                        <>
                                            <div className="myorders_card">
                                                <div className="myorders_img">
                                                    <img src={p.image} alt="" />
                                                </div>
                                                <div className="myorders_info">
                                                    <h3>{p.name}</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, omnis quas. Ipsam officia sed sapiente deleniti aspernatur delectus cum repellat quibusdam, obcaecati consequuntur voluptate </p>
                                                    <span>₹{p.price}</span>
                                                    <h4>{p.color}</h4>
                                                    <h4>{p.size}</h4>
                                                </div>
                                                <div className="myorders_address">
                                                    <h3>Delivery address</h3>
                                                    <p>  {o.house_no} {o.address}</p>
                                                </div>
                                                <div className="myorders_shipping">
                                                    <h3>Shipping Updates</h3>
                                                    <p>{o.email}</p>
                                                    <p>{o.phonenumber}</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })}


                                {/* <hr /> */}
                                <div className="myorders_bottom">
                                    <div className="myorders_billing_address">
                                        <h2>Billing Address</h2>
                                        <p> {o.house_no} {o.address}</p>
                                    </div>
                                    <div className="myorders_payment_info">
                                        <h2>Payment Info</h2>
                                        <p>{o.paymentType}</p>
                                    </div>
                                    <div className="myorders_total">
                                        <div className="myorders_subtotal">
                                            <p>Sub Total</p>
                                            <h4>₹45</h4>
                                        </div>
                                        <div className="myorders_subtotal">
                                            <p>Shipping</p>
                                            <h4>Free</h4>
                                        </div>
                                        <div className="myorders_subtotal">
                                            <p>Discount</p>
                                            <h4>-₹5</h4>
                                        </div>
                                        <hr />
                                        <div className="myorders_subtotal">
                                            <h4>Total</h4>
                                            <h4>₹{o.totalPrice}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>




            <Footer />
        </div>
    )
}

export default MyOrders
