import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import './ProductsCard.css'
import { useMemo, useState } from 'react';

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


export default function ProductsCard ({product}) {
    const [isLiked, setIsLiked] = useState(false);
    const discount = useMemo(() => {
        if (!product.oldPrice) return null;
            return (((product.oldPrice - product.price) / product.oldPrice) * 100).toFixed(0);
         }, [product.price, product.oldPrice]);
    


    const handleAddToCart = () => {
    // console.log('Product added to cart:', product);
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    console.log('Product liked:', !isLiked);
  };

    return(
        <>
            <div className="product-card-container">
                <div className="product-card">
                <div className="product-image-container">
                    <img 
                        src={product.img} 
                        alt={product.title}
                        className="product-image"
                        loading="lazy"
                        width="320"
                        height="300"
                        decoding="async"

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
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                        >
                        <ShoppingCartIcon />
                        <span>Add to Cart</span>
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}