import "./global.css"
import Homepage from "./pages/homepage/homepage";
import ProductsPage from "./pages/productpage/productsPage"
import { Navigate, Route, Routes } from "react-router-dom";
import SingleProductPage from "./pages/singleProductPage/singleProductPage";
import CheckOutPage from "./pages/checkOut/checkOutPage";
import LoginPage from "./pages/loginPage/loginPage";
import Register from "./pages/registerPage/register";
import MyOrders from "./pages/myOrders/myOrders";
import { useSelector } from "react-redux";
import { DashHomePage } from "./dashboardPages/dashhomepage/dashHomePage";
import DashproductsPage from "./dashboardPages/dashproductspage/dashproductspage";
import DashboardAddProduct from "./dashboardPages/dashboardAddproduct/dashboardAddProduct";
import DashboardOrderspage from "./dashboardPages/dashboardOrders/dashboardOrderspage";
import MensProducts from "./pages/mensProducts/MensProducts";
import WomensProducts from "./pages/mensProducts/WomensProducts";
// import DashboardOrderspage from "./dashboardPages/dashboardOrderspage/dashboardOrderspage";


function App() {
  const user = useSelector((state) => state.auth.user)
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products?" element={<ProductsPage />} />
        <Route path="/products/mens" element={<MensProducts />} />
        <Route path="/products/women" element={<WomensProducts />} />
        <Route path="/singleproducts/:id" element={<SingleProductPage />} />
        <Route path="/checkout" element={user ? <CheckOutPage /> : <Navigate to={"../login"} />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myorders" element={user ? <MyOrders /> : <Navigate to={"../login"} />} />
        <Route path="/dashboard" element={user ? <DashHomePage /> : <Navigate to={"../login"} />} />
        <Route path="/dashproducts" element={user ? <DashproductsPage /> : <Navigate to={"../login"} />} />
        <Route path="/dashorders" element={user ? <DashboardOrderspage /> : <Navigate to={"../login"} />} />
        <Route path="/dashusers" element={user ? <DashHomePage /> : <Navigate to={"../login"} />} />
        <Route path="/addproduct" element={user ? <DashboardAddProduct /> : <Navigate to={"../login"} />} />
      </Routes>

    </div>
  );
}

export default App;
