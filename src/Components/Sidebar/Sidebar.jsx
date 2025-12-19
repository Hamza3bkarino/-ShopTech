import { useDispatch, useSelector } from "react-redux";
import { incrementQty, decrementQty, removeFromCart, closeSidebar } from "../../lib/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  if (!cart.isOpen) return null;

  return (
    <div className="cart-sidebar-overlay" onClick={() => dispatch(closeSidebar())}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Cart</h2>
          <button onClick={() => dispatch(closeSidebar())}><FontAwesomeIcon icon={faXmark} /></button>
        </div>

        <div className="cart-items">
          {cart.items.length === 0 && <p className="empty-cart">Your cart is empty.</p>}

          {cart.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="cart-quantity">
                  <button onClick={() => dispatch(decrementQty(item.id))}><FontAwesomeIcon icon={faMinus} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQty(item.id))}><FontAwesomeIcon icon={faPlus} /></button>
                </div>  
              </div>
              <button className="cart-item-remove" onClick={() => dispatch(removeFromCart(item.id))}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>

        {cart.items.length > 0 && (
          <div className="cart-footer">
            <h3>Total: ${totalPrice}</h3>
            <button className="checkout-btn" 
              onClick={()=> {
              navigate('/confirmation') ;
              dispatch(closeSidebar());
              }
            }>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
