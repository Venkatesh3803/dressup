import "./categories.css"
import img1 from "../../images/newarivals.jpg"
import img2 from "../../images/categorymen.jpg"
import img3 from "../../images/women.jpg"
import img4 from "../../images/categorykid.jpg"
import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="categories">
      <div className="category-top">
        <h2> Clothing Boutique</h2>
        <p>Experience comfort without compromising on style with our casual wear collection. From well-fitted jeans to casual shirts and t-shirts, our range offers a perfect balance of relaxed sophistication. Embrace laid-back elegance with our selection of jackets, hoodies, and sneakers, ensuring you stay fashionable during your leisure time.</p>
      </div>
      <div className="category-buttom">
        <Link to={"/products/mens"}>
          <div className="category-card">
            <img src={img1} alt="" />
            <button>New Arrivals</button>
          </div>
        </Link>
        <Link to={"/products/women"}>
          <div className="category-card">
            <img src={img3} alt="" />
            <button>Womens</button>
          </div>
        </Link>
        <Link to={"/products/mens"}>
          <div className="category-card">
            <img src={img2} alt="" />
            <button>Mens</button>
          </div>
        </Link>
        <Link to={"/products/women"}>
          <div className="category-card">
            <img src={img4} alt="" />
            <button>Kids</button>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default Categories