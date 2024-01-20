import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'



const DashUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getAllProducts = async () => {
            const res = await userRequest.get("/user/admin/getallusers");
            const date = await res.data;
            setUsers(date)
        }
        getAllProducts();
    }, [])

    return (
        <>
            <DashNavbar />
            <div className="dashhomepage">
                <div className="dash-left">
                    <SideBar />
                </div>
                <div className="dash-right">

                    <div className="dashproducts">
                        <h2>Products</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>userName</th>
                                    <th>Email</th>
                                    <th>IsAdmin</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => {
                                    return (
                                        <tr>
                                            <td>{u._id}</td>
                                            <td>{u.username}</td>
                                            <td>{u.email}</td>
                                            <td>{u.isAdmin ? "YES" : "NO"} </td>
                                            <td>update</td>
                                            <td>delete</td>
                                        </tr>
                                    )
                                })}



                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashUsers
