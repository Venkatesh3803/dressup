import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import { useEffect, useState } from 'react'
import { getAllUser } from '../../requestMethods'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const DashUsers = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
        getAllUser("/user/admin/getallusers", "get", user.token).then((res) => {
            setUsers(res)

        }).catch((err) => {
            if (err.response.data === 'jwt expired') {
                toast.warn("Session expired please login");
                navigate("/")
            }
        })
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
                                        <tr key={u._id}>
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
