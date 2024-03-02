import React, { useEffect, useState } from 'react'
import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import { toast } from 'react-toastify'
import { getAllUser, updateOrder, } from '../../requestMethods'
import { useNavigate } from 'react-router-dom'

const DashboardOrderspage = () => {
    const [orders, setOrders] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
        getAllUser("/order", "get", user.token).then((res) => {

            setOrders(res)
        }).catch((err) => {
            if (err.response.data === 'jwt expired') {
                toast.warn("Session expired please login");
                navigate("/")
            }
        })
    }, [])



    const handleStatus = async (id, status) => {
        const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
        if (status === "processing") {
            status = "shipped"
        } else if (status === "shipped") {
            status = "dispatch"
        } else if (status === "dispatch") {
            status = "delivered"
        } else if (status === "delivered") {
            return toast.warn(" This Order Already Deliverd")
        } else if (status === "cancel") {
            status = "canceled"
        } else if (status === "canceled") {
            return toast.warn("This Order Already Canceled")
        }

        updateOrder(`/order/${id}`, "patch", status, user.token).then((res) => {
            if (res === "updated") {
                toast.success("updated")
            }
        });

    }

    return (
        <>
            <DashNavbar />
            <div className="dashhomepage">
                <div className="dash-left">
                    <SideBar />
                </div>
                <div className="dash-right" style={{ padding: "3rem" }}>
                    <h2>Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Address</th>
                                <th>Pay Method</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders && orders.map((o) => {
                                return (
                                    <tr key={o._id}>
                                        <td>{o._id.slice(0, 6)}...</td>
                                        <td>
                                            {o.products.map((p) => {
                                                return (
                                                    <tr key={p._id}>
                                                        <img src={p?.image} alt="" />
                                                        <hr />
                                                    </tr>
                                                )
                                            })}
                                        </td>
                                        <td>
                                            {o.products.map((p) => {
                                                return (
                                                    <tr key={p._id}>
                                                        <p style={{ fontSize: "16px" }}>{p.name}</p>
                                                        <span >{p.color}</span> / <span>{p.size}</span>
                                                        <hr style={{ width: "100%" }} />
                                                    </tr>
                                                )
                                            })}
                                        </td>

                                        <td >
                                            {o.products.map((p) => {
                                                return (
                                                    <tr key={p._id}>
                                                        {p.qty}
                                                        <hr />
                                                    </tr>
                                                )
                                            })}
                                        </td>
                                        <td>{o.totalPrice}</td>
                                        <td>
                                            <p>{o.address}</p>
                                            <p>{o.email}</p>
                                        </td>
                                        <td>{o.paymentType}</td>
                                        <td ><button onClick={() => handleStatus(o._id, o.status)} style={{ padding: "0.3rem 0.5rem", borderRadius: "4px", backgroundColor: "blueviolet", color: 'white' }}>{o.status}</button></td>
                                        <td><button onClick={() => handleStatus(o._id, o.status === "canceled" ? "canceled" : "cancel")} style={{ padding: "0.3rem 0.5rem", borderRadius: "4px", backgroundColor: "red", color: 'white' }}>Cancel</button></td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DashboardOrderspage
