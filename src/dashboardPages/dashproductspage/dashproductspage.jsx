import SideBar from '../../dashcomponents/sidebar/sideBar'
import DashNavbar from '../../dashcomponents/dashNavber/dashNavber'
import DashboardProducts from '../../dashcomponents/dashboardproducts/dashboardProducts'
import { useEffect, useState } from 'react'
import { publicRequest } from '../../requestMethods'



const DashproductsPage = () => {
    const [prod, setProd] = useState("")
    useEffect(() => {
        const getAllProducts = async () => {
            const res = await publicRequest.get("/product");
            const date = await res.data;
            setProd(date)
        }
        getAllProducts();
    }, [])

    return (
        <>
            <DashNavbar />
            <div className="dashhomepage">
                <div className="dash-left">
                    <SideBar />
                </div>
                <div className="dash-right">

                    <DashboardProducts product={prod.products} />

                </div>
            </div>
        </>
    )
}

export default DashproductsPage