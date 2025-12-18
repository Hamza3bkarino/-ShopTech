import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faCartShopping, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useMemo, useState } from 'react';
import './ProductsCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from "../../lib/WishlistSlice";
import { addToCart } from '../../lib/CartSlice';

const HeartIcon = ({ filled }) => (
    <FontAwesomeIcon 
        icon={filled ? solidHeart : regularHeart} 
        color={filled ? "#ff4757" : "#666"} 
        size="lg" 
    />
);

const ShoppingCartIcon = () => (
    <FontAwesomeIcon icon={faCartShopping} color="black" size="lg" className='cartIcon'/>
);

const CheckIcon = () => (
    <FontAwesomeIcon icon={faCheck} color="white" size="lg" />
);

export default function ProductsCard ({product}) {

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    
    const isLiked = wishlist.some((p) => p.id === product.id);

    const discount = useMemo(() => {
        if (!product.oldPrice) return null;
        return (((product.oldPrice - product.price) / product.oldPrice) * 100).toFixed(0);
    }, [product.price, product.oldPrice]);

    // State to show check icon temporarily
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setAdded(true);

        // Revert back to "Add to Cart" after 1.5 seconds
        setTimeout(() => {
            setAdded(false);
        }, 1500);
    };

    const handleToggleLike = () => {
        dispatch(toggleWishlist(product));
    };

    return (
        <div className="product-card-container">
            <div className="product-card">
                <div className="product-image-container">
                    <img 
                        src={product.img} 
                        alt={product.title}
                        className="product-image"
                        width="320"
                        height="300"
                        loading='eager'
                    />

                    {discount && (
                        <div className="discount-tag">
                            {discount}%
                        </div>
                    )}

                    <button 
                        className={`heart-button ${isLiked ? 'liked' : ''}`}
                        onClick={handleToggleLike}
                        aria-label="Add to wishlist"
                    >
                        <HeartIcon filled={isLiked} />
                    </button>
                </div>

                <div className="product-content">
                    <h3 className="product-name">{product.title}</h3>

                    <div className="price-section">
                        <div className="price-wrapper">
                            <span className="current-price">{product.price}</span>
                            {product.oldPrice && (
                                <span className="old-price">{product.oldPrice}</span>
                            )}
                        </div>
                    </div>

                    <button 
                        className={`add-to-cart-btn ${added ? 'added' : ''}`}
                        onClick={handleAddToCart}
                    >
                        {added ? <CheckIcon /> : <><ShoppingCartIcon /><span>Add to Cart</span></>}
                    </button>
                </div>
            </div>
        </div>
    );
}
