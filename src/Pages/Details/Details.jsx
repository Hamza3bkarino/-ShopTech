import { useParams } from "react-router-dom";
import { products } from "../../db";
import { useDispatch } from "react-redux";
import { addToCart } from '../../lib/CartSlice';
import "./Details.css";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find(p => p.id === id);

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  return (
    <section className="details-container">
      <div className="details-wrapper">

        {/* IMAGE */}
        <div className="details-image">
          <img src={product.img} alt={product.title} />
        </div>

        {/* INFO */}
        <div className="details-info">
          <span className="category">{product.categorie}</span>
          <h1>{product.title}</h1>

          <p className="description">
            {product.description}
          </p>

          <div className="price-box">
            <span className="price">${product.price}</span>
            <span className="old-price">${product.oldPrice}</span>
          </div>

          <div className="actions">
            <button className="add-cart" onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>

      </div>
    </section>
  );
}
