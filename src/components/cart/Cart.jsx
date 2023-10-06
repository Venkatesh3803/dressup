import "./cart.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../redux/cartReducer"


const Cart = ({ cartOpen, setCartOpen }) => {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch()

  const { products } = cart;

  return (
    <div className={cartOpen ? "cart cart-active" : "cart"}>
      <div className="cart-container">

        <div onClick={() => setCartOpen(false)} className="cart-cross">
          X
        </div>
        <h1>Cart</h1>
        <div className="cart-list">
          {products.length === 0 && <span style={{ textAlign: "center", margin: "2rem", fontSize: "26px" }}>Cart is empty</span>}
          {products && products?.map((item) => {
            return (
              <div key={item.id} className="cart-card">
                <div className="cart-card-left">
                  <Link to={`/singleproducts/${item.id}`}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="cart-card-right">
                  <div className="card-right-top">
                    <Link to={`/singleproducts/${item.id}`} className="link">
                      <h3>{item.name}</h3>
                    </Link>
                    <div className="sizes">
                      <div className="size">
                        <h4>Size:-</h4>
                        <p>{item.size}</p>
                      </div>
                      <div className="size">
                        <h4>Color:-</h4>
                        <p>{item.color}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-right-buttom">
                    <div className="qty">
                      <span>Qty : {item.qty}</span>
                    </div>

                    <div className="price">
                      <h4> ₹{item.price}.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}


          <div className="cart-bottom">
            <div className="cart-buttom-list">
              <h3>Total Price</h3>
              <span> ₹{total}.00</span>
            </div>
            <Link to={"../checkout"}>
              {products.length === 0 ?
                <button className="cart-btn" style={{ cursor: "not-allowed" }} disabled>Check-Out</button>
                :
                <button className="cart-btn">Check-Out</button>
              }
            </Link>
            <button className="cart-btn" onClick={() => dispatch(clearCart())}>Clear-Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart