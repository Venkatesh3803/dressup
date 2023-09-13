
import { AiOutlineMenuUnfold } from "react-icons/ai"

import { MdCancel } from "react-icons/md"
import { useState } from "react"
import { Link } from "react-router-dom"


const DashNavbar = () => {
    const [active, setActive] = useState(false)


    return (
        <div className="navber">
            <AiOutlineMenuUnfold style={{ cursor: "pointer" }} onClick={() => setActive(!active)} className="menu-icon" />
            <div className="nav-container">
                <div className="nav-left">
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <h1>Dress <span>Up</span></h1>
                    </Link>
                </div>
                <div className="nav-links">
                    <ul className={active ? "list-active" : "list"}>

                        <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
                            <li>Add Product </li>
                        </Link>
                        <Link to={"/dashproducts"} tyle={{ textDecoration: "none" }} style={{ textDecoration: "none" }}>
                            <li>Products </li>
                        </Link>
                        <Link to={"/dashorders"} style={{ textDecoration: "none" }}>
                            <li>Orders</li>
                        </Link>

                        <Link to={"/dashusers"} style={{ textDecoration: "none" }}>
                            <li>Users </li>
                        </Link>

                        <li>Settings </li>


                        <li>LogOut </li>

                        <MdCancel className="cancle" onClick={() => setActive(!active)} />
                    </ul>
                </div>


            </div>
        </div>
    )
}


export default DashNavbar;