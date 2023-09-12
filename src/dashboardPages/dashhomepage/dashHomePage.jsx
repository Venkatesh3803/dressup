import "./dashhomepage.css"
import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import Dashstats from "../../dashcomponents/dashstats/dashstats"


export const DashHomePage = () => {
    return (
        <>
            <DashNavbar />
            <div className="dashhomepage">
                <div className="dash-left">
                    <SideBar />
                </div>
                <div className="dash-right">
                    <Dashstats />
                </div>
            </div>
        </>
    )
}
