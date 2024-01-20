import React, { useEffect, useState } from 'react'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/Footer'
import "./myOrders.css"
import { useSelector } from 'react-redux'
import { userRequest } from '../../requestMethods'




const MyOrders = () => {
    const [orders, setOrders] = useState("")
    // const [cancel, setCancel] = useState("Cancel Order")
    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get(`/order/single/${user._id}`);
                const date = await res.data;
                setOrders(date)
            } catch (error) {
                console.log(error)
            }
        }
        getOrders();
    }, [user._id])


    // const handleCancel = async (id, cancel) => {
    //     if (cancel === "cancel") {
    //         cancel = "canceled"
    //     } else if (cancel === "canceled") {
    //         return toast.warn("Order Already Canceled")
    //     }

    //     // const res = await userRequest.patch(`/order/${id}`, {
    //     //     cancel
    //     // });

    //     // const data = res.data;
    //     // if (data === "updated") {
    //     //     toast.success("Canceled")
    //     // }

    //     setCancel("Cancled")
    // }

    return (
        <div>
            <Navber />
            {/* orders design */}
            <div className="myorders">
                <div className="myorders_container">
                    {orders.length === 0 && <h2 style={{ textAlign: "center", marginTop: "4rem" }}> No Orders Found</h2>}
                    {orders && orders?.map((o) => {
                        return (

                            <div className="my_orders_list" key={o._id}>
                                <div className="myorders_top">
                                    <h4>Order_id :-<span style={{ fontSize: "18px" }}>{o._id.slice(0, 15)}...</span></h4>
                                    <div className="order-status">
                                        <p>Order placed <b>{o.createdAt.slice(0, 10)}</b></p>
                                        <p>Status :- <b>{o.status}</b></p>
                                    </div>
                                </div>
                                {o.products?.map((p) => {
                                    return (
                                        <>
                                            <div className="myorders_card" key={p._id}>
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
                                                    <h3>Shipping Details</h3>
                                                    <p>{o.email}</p>
                                                    <p>{o.phonenumber}</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })}


                                {/* <button className='cancel-btn' onClick={() => handleCancel(o._id, cancel === "Cancel Order" ? "cancel" : "canceled")}>{cancel}</button> */}
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
                                            <h4>₹{o.totalPrice}</h4>
                                        </div>
                                        <div className="myorders_subtotal">
                                            <p>Shipping</p>
                                            <h4>₹60</h4>
                                        </div>
                                        <div className="myorders_subtotal">
                                            <p>Discount</p>
                                            <h4>0</h4>
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
