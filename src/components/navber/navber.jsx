import "./navber.css"
import { AiOutlineMenuUnfold, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"

import { MdCancel } from "react-icons/md"
import { useState } from "react"
import NewArrivalsList from "../newArrivals/NewArrivalsList"
import Cart from "../cart/Cart"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import Profile from "../profile/profile"



const Navber = () => {
  const user = useSelector((state) => state.auth.user)
  const quantity = useSelector((state) => state.cart.quantity)
  const [search, setSearch] = useState(false)
  const [active, setActive] = useState(false)
  const [mens, setMens] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [profile, setProfile] = useState(false)




  return (
    <div className="navber">
      <AiOutlineMenuUnfold style={{ cursor: "pointer" }} onClick={() => setActive(!active)} className="menu-icon" />
      <div className="nav-container">
        <div className="nav-left">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h1>Dress <span>Up</span></h1>
          </Link>
        </div>
        <div className="nav-links">
          <ul className={active ? "list-active" : "list"}>

            <Link to={"/products?category=mens"} onMouseEnter={() => setMens(true)} style={{ textDecoration: "none" }}>
              <li>MENS </li>
            </Link>
            <Link onMouseEnter={() => setMens(true)} style={{ textDecoration: "none" }}>
              <li>WOMENS </li>
            </Link>
            <Link to={"../products?category=accessories"} style={{ textDecoration: "none" }}>
              <li>ACCESSORIE</li>
            </Link>

            <Link to={"../products?category=delux"} style={{ textDecoration: "none" }}>
              <li>DE-EXCLUSIVE </li>
            </Link>
            <Link to={"../products?category=shoes"} style={{ textDecoration: "none" }}>
              <li>SHOES </li>
            </Link>
            <MdCancel className="cancle" onClick={() => setActive(false)} />
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-right-items">
            <div className="search">
              <AiOutlineSearch onClick={() => setSearch(true)} className="icons" />
            </div>
            <div className="vl"></div>
            <div className="search">
              <AiOutlineShoppingCart onClick={() => setCartOpen(!cartOpen)} className="icons" />
              <div className="bedge">{quantity}</div>
            </div>
            <div className="vl"></div>
            {user ?
              <div className="search" onMouseEnter={() => setProfile(true)}>
                <CgProfile className="icons" />
              </div> :
              <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
                <span style={{ cursor: "pointer" }}>Login</span>
              </Link>
            }
          </div>
        </div>
        {search &&
          <div className="search-box">
            <div className="search-input">
              <AiOutlineSearch className="icons" />
              <input type="text" placeholder="Search Here..." />
            </div>
            <MdCancel onClick={() => setSearch(false)} className="icons" />
          </div>
        }
        {mens &&
          <NewArrivalsList setMens={setMens} />
        }
        {cartOpen &&
          <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} />
        }

        {profile &&
          <Profile setProfile = {setProfile}/>
        }

      </div>
    </div>
  )
}

export default Navber