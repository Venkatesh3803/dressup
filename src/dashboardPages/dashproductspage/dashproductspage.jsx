import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import DashboardProducts from '../../dashcomponents/dashboardproducts/dashboardProducts'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../requestMethods'



const DashproductsPage = () => {
    const [prod, setProd] = useState([])
    useEffect(() => {
        try {
            getAllProducts("/product").then((res) => {
                setProd(res.products)
            })
        } catch (error) {
            throw error
        }
    }, [])

    return (
        <>
            <DashNavbar />
            <div className="dashhomepage">
                <div className="dash-left">
                    <SideBar />
                </div>
                <div className="dash-right">
                    <DashboardProducts product={prod} setProd={setProd} />
                </div>
            </div>
        </>
    )
}

export default DashproductsPage