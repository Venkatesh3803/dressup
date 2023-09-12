import React, { useEffect, useState } from 'react'
import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import { userRequest } from '../../redux/apicalls' 

const DashboardOrderspage = () => {
    const [orders, setOrders] = useState("")

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await userRequest.get(`/order/`);
                const date = await res.data;
                setOrders(date)
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
    }, [])
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
                                                    <tr  key={p._id}>
                                                        <img src="https://m.media-amazon.com/images/I/71A8tXUbL9L._UY879_.jpg" alt="" />
                                                        <hr />
                                                    </tr>
                                                )
                                            })}
                                        </td>
                                        <td>
                                            {o.products.map((p) => {
                                                return (
                                                    <tr  key={p._id}>
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
                                        <td>Pending</td>
                                        <td>Cancel</td>
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
