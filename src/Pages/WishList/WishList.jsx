

import { useSelector } from "react-redux";
import "./WishList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleWishlist } from "../../lib/WishlistSlice";
import './WishList.css'

export default function WishList() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(toggleWishlist(product)); // remove from wishlist
  };

  if (wishlist.length === 0) {
    return <p className="empty-wishlist">Your wishlist is empty 😢</p>;
  }

  return (
    <div className="wishlist-container-wrapper">
        <div className="wishlist-container">
        {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
            {/* Left image */}
            <div className="wishlist-img">
                <img src={item.img} alt={item.title} />
            </div>

            {/* Right content */}
            <div className="wishlist-content">
                <h3 className="wishlist-title">{item.title}</h3>
                <div className="wishlist-price">
                <span className="current-price">{item.price}$</span>
                {item.oldPrice && <span className="old-price">{item.oldPrice}$</span>}
                </div>
                <div className="wishlist-actions">
                <button onClick={() => handleRemove(item)} className="remove-btn">
                    <FontAwesomeIcon icon={faTrash} /> Remove
                </button>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>

  );
}
