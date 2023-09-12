import "./dashboardProducts.css"
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai"


const DashboardProducts = ({ product }) => {
 
  return (
    <div className="dashproducts">
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
          {product && product.map((item) =>{
            return(
              <tr>
              <td>{item._id.slice(0, 6)}...</td>
              <td><img src={item.image} alt="" /></td>
              <td>
                <p>{item.name}</p>
                <span>{item.color}</span> / <span>{item.size}</span>
              </td>
              <td><p>{item.desc}</p></td>
              <td>Cotton</td>
              <td><AiOutlineEdit className="icons" /></td>
              <td><AiFillDelete className="icons" /></td>
            </tr>
            )
          })}
          

        </tbody>
      </table>
    </div>
  )
}

export default DashboardProducts
