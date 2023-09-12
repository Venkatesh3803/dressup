
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

                        <Link to={"/products?category=mens"} style={{ textDecoration: "none" }}>
                            <li>MENS </li>
                        </Link>
                        <Link tyle={{ textDecoration: "none" }} style={{ textDecoration: "none" }}>
                            <li>WOMENS </li>
                        </Link>
                        <Link to={"../products?category=accessories"} style={{ textDecoration: "none" }}>
                            <li>ACCESSORIE</li>
                        </Link>

                        <Link to={"../products?category=delux"} style={{ textDecoration: "none" }}>
                            <li>DE-EXCLUSIVE </li>
                        </Link>
                        <Link to={"../products?category=shoes"} style={{ textDecoration: "none" }}>
                            <li>SHOES </li>
                        </Link>
                        <MdCancel className="cancle" />
                    </ul>
                </div>


            </div>
        </div>
    )
}


export default DashNavbar;