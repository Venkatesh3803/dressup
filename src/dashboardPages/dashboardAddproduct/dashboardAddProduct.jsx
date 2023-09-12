import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import Addproductform from '../../dashcomponents/addproductform/addproductform'



const DashboardAddProduct = () => {
    return (
        <>
            <DashNavbar />
            <div className="dashhomepage">
                <div className="dash-left">
                    <SideBar />
                </div>
                <div className="dash-right">
                    <Addproductform />
                </div>
            </div>
        </>
    )
}

export default DashboardAddProduct