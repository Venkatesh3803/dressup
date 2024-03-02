import "./sidebar.css"
import { BiHome, BiAddToQueue, BiUserCircle } from "react-icons/bi"
import { BsFillPersonFill, BsCartCheck } from "react-icons/bs"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { AiOutlineSetting, AiOutlineLogin } from "react-icons/ai"
import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <div className='slider'>
            <div className="head">
                <span className="main">Main</span>
                <Link to={"../dashboard"} className="dashlink">
                    <div className="list">
                        <BiHome className="icons" />
                        <span>Home</span>
                    </div>
                </Link>
                <div className="list">
                    <BsFillPersonFill className="icons" />
                    <span>profile</span>
                </div>
            </div>
            <div className="head">
                <span className="main">list</span>
                <Link to={"../addproduct"} className="dashlink">
                    <div className="list">
                        <BiAddToQueue className="icons" />
                        <span>add product</span>
                    </div>
                </Link>
                <Link to={"../dashproducts"} className="dashlink">
                    <div className="list">
                        <MdOutlineProductionQuantityLimits className="icons" />
                        <span>products</span>
                    </div>
                </Link>
                <Link to={"../dashorders"} className="dashlink">
                    <div className="list">
                        <BsCartCheck className="icons" />
                        <span>orders</span>
                    </div>
                </Link>
                <Link to={"../dashusers"} className="dashlink">
                    <div className="list">
                        <BiUserCircle className="icons" />
                        <span>Users</span>
                    </div>
                </Link>
                <div className="head">
                    <span className="main">list</span>
                    <div className="list">
                        <AiOutlineSetting className="icons" />
                        <span>Settings</span>
                    </div>
                    <div className="list">
                        <AiOutlineLogin className="icons" />
                        <span>LOGOUT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
