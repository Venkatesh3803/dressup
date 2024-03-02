import { Link } from "react-router-dom"
import { deleteProduct } from "../../requestMethods"
import "./dashboardProducts.css"
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai"
import { toast } from "react-toastify"

const DashboardProducts = ({ product, setProd }) => {


  const handleDeleteProduct = async (id) => {
    const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
    try {
      deleteProduct(`/product/${id}`, "delete", user.token).then((res) => {
        toast.success(res)
        setProd(product.filter((item) => item._id !== id))
      })
    } catch (error) {
      throw error
    }
  }


  return (
    <div className="dashproducts" style={{ overflowX: "auto" }}>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Fabric</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product && product?.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id.slice(0, 6)}...</td>
                <td><img src={item.image} alt="" /></td>
                <td>
                  <p>{item.name}</p>
                  <span>{item.color.map((c) => {
                    return (
                      <span key={c} style={{ backgroundColor: `${c}`, padding: "3px 10px", borderRadius: "50%", marginLeft: "2px" }}></span>
                    )
                  })}</span> / <span>{item.size.map((s) => {
                    return (
                      <span key={s} style={{ padding: "3px 5px", border: "1px solid gray", marginLeft: "2px", fontSize: "12px" }}>{s}</span>
                    )
                  })}</span>
                </td>
                <td><p>{item.desc}</p></td>
                <td>Cotton</td>
                <td>
                  <Link to={`/editproduct/${item._id}`}>
                    <AiOutlineEdit className="icons" />
                  </Link>
                </td>
                <td><AiFillDelete className="icons" onClick={() => handleDeleteProduct(item._id)} /></td>
              </tr>
            )
          })}


        </tbody>
      </table>
    </div>
  )
}

export default DashboardProducts
