import DashList from "../dashlist/dashList"
import MainChats from "../mainChat/mainChat"
import "./dashstats.css"

const Dashstats = () => {
    return (
        <div className='dashstats'>
            <div className="dashstats-top">
                <DashList />
                <DashList />
                <DashList />
                <DashList />
            </div>
            <div className="dashstats-buttom">
    
                <MainChats/>
            </div>
        </div>
    )
}

export default Dashstats
