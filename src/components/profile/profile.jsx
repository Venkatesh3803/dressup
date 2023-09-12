import React, { useEffect, useState } from 'react'
import "./profile.css"
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from "../../redux/authReducer"
import { CgProfile } from 'react-icons/cg'
import { AiOutlineLogout, AiOutlineSetting, AiOutlineShoppingCart } from 'react-icons/ai'
import { LuLayoutDashboard } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { userRequest } from '../../redux/apicalls'

const Profile = ({ setProfile }) => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const [currUser, setCurrUser] = useState("")

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await userRequest.get(`/user/${user._id}`);
                const date = await res.data;
                setCurrUser(date)
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
    }, [user._id])



    return (
        <div className="profile" onMouseLeave={() => setProfile(false)}>
            <Link className="link">
                <div className="pro-list">
                    <CgProfile />
                    <h4>Profile</h4>
                </div>
            </Link>
            <Link className="link" to={"../myorders"}>
                <div className="pro-list">
                    <AiOutlineShoppingCart />
                    <h4>My Orders</h4>
                </div>
            </Link>

            {currUser.isAdmin &&
                <Link className="link" to={"../dashboard"}>
                    <div className="pro-list">
                        <LuLayoutDashboard />
                        <h4>Dashboard</h4>
                    </div>
                </Link>
            }

            <div className="pro-list">
                <AiOutlineSetting />
                <h4>Settings</h4>
            </div>

            <div className="pro-list" onClick={() => dispatch(logOut())}>
                <AiOutlineLogout />
                <h4>Log Out</h4>
            </div>
        </div>
    )
}

export default Profile
