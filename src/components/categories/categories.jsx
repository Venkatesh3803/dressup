import "./categories.css"
import img1 from "../../images/phil-monte-4V4t0JcOM5E-unsplash.jpg"
import img2 from "../../images/tyler-nix-LPvloZJu1Pk-unsplash.jpg"
import img3 from "../../images/pexels-evg-kowalievska-1381553.jpg"
import img4 from "../../images/pexels-quang-anh-ha-nguyen-884979.jpg"
import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="categories">
      <div className="category-top">
        <h2> Clothing Boutique</h2>
        <p>Experience comfort without compromising on style with our casual wear collection. From well-fitted jeans to casual shirts and t-shirts, our range offers a perfect balance of relaxed sophistication. Embrace laid-back elegance with our selection of jackets, hoodies, and sneakers, ensuring you stay fashionable during your leisure time.</p>
      </div>
      <div className="category-buttom">
        <Link to={"/products"}>
          <div className="category-card">
            <img src={img1} alt="" />
            <button>New Arrivals</button>
          </div>
        </Link>
        <Link to={"/products?gender=mens"}>
          <div className="category-card">
            <img src={img2} alt="" />
            <button>Mens</button>
          </div>
        </Link>
        <Link to={"/products?gender=women"}>
          <div className="category-card">
            <img src={img3} alt="" />
            <button>Womens</button>
          </div>
        </Link>
        <Link to={"/products?gender=women&cat=dress"}>
          <div className="category-card">
            <img src={img4} alt="" />
            <button>Dresses</button>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default Categories