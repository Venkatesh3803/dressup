import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import "./dashList.css"
import Chats from "../chats/chats"

const DashList = () => {
    return (
        <div className="dashlist">
            <div className="dashleft-left">
                <div className="dashleft-icon">
                    <MdOutlineProductionQuantityLimits style={{ fontSize: "18px" }} />
                    <span>products</span>
                </div>
                <h3>454</h3>
                <span>View all</span>
            </div>
            <div className="dashleft-right">
                <Chats />
                <h4>45%</h4>
                <p>this month</p>
            </div>
        </div>
    )
}

export default DashList
