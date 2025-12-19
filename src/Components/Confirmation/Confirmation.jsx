import { useDispatch, useSelector } from "react-redux";
import "./Confirmation.css";

export default function Confirmation() {
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <section className="confirmation-page">
      <div className="confirmation-container">

        {/* LEFT – FORM */}
        <div className="confirmation-form">
          <h2>Shipping Information</h2>

          <div className="input-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Full Address"></textarea>

          <button className="confirm-btn">
            Confirm Order
          </button>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="order-summary">
          <h2>Your Order</h2>

          {cart.items.map((item) => (
            <div className="summary-item" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Qty: {item.quantity}</p>
              </div>
              <span>${(item.price).toFixed(2)}</span>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <strong>${totalPrice}</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
