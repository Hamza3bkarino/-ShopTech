import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faArrowRight,faTruckFast, faLock, faHeart, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AirPods from'../../assets/AirPods-Max.png'
import  BestSellers  from '../../db';
import ProductsCard from '../../Components/Products/ProductsCard';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate()
  return (
    <>
        <section>
        <div className="hero-container">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
            <div className="floating-circle circle-4"></div>
            <div className="floating-circle circle-5"></div>

            <div className="hero-content">
            <div className="left-section">
                <div className="brand-tag">
                <FontAwesomeIcon icon={faMusic} className="brand-icon" />
                <span>Music is Classic</span>
                </div>

                <h1 className="hero-title">
                Empowering  <br />
                digital experiences.
                </h1>

                <div className="feature-section">
                <div className="feature-number">01</div>
                <div className="feature-line"></div>
                <div className="feature-content">
                    <h3 className="feature-title">Next-Gen Tech</h3>
                    <p className="feature-description">
                    Innovative tools for your success !
                    </p>
                </div>
                </div>

                <button className="cta-button">
                <span onClick={()=>navigate('/catalogue')}>View All Products</span>
                <div className="button-icon">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </div>
                </button>

                <div className="social-section">
                <span className="social-text">Follow us on:</span>
                <div className="social-icons">
                    <a href="#" className="social-link">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="#" className="social-link">
                    <FontAwesomeIcon icon={faMusic} size="lg" />
                    </a>
                    <a href="#" className="social-link">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="#" className="social-link">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
                </div>
            </div>

            <div className="right-section">
                <div className="headphone-container">
                <div className="headphone-glow"></div>
                    <img src={AirPods} alt="" width={'160%'} className='headphone-glow headphoneImg' />
                </div>
            </div>
            </div>
        </div>
        </section>


        <section>
            <h1 className='Title'>
                BEST SALES 
            </h1>
            <div className='cards'>
                {BestSellers.map((item,index)=>(
                    <ProductsCard key={item.id} product={item}/>
                ))}
            </div>
        </section>

        <section className="why-shoptech">
            <div className="overlay"></div>

            <div className="why-container">
                <h2 className="why-title">
                Pourquoi <span>ShopTech</span> ?
                </h2>

                <div className="why-cards">
                <div className="why-card">
                    <FontAwesomeIcon icon={faTruckFast} className="icon" />
                    <h3>Livraison rapide</h3>
                    <p>Recevez vos produits en un temps record partout au pays.</p>
                </div>

                <div className="why-card">
                    <FontAwesomeIcon icon={faLock} className="icon" />
                    <h3>Paiement sécurisé</h3>
                    <p>Transactions protégées avec des systèmes fiables.</p>
                </div>

                <div className="why-card">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                    <h3>Produits favoris</h3>
                    <p>Ajoutez vos produits préférés et retrouvez-les facilement.</p>
                </div>

                <div className="why-card">
                    <FontAwesomeIcon icon={faBolt} className="icon" />
                    <h3>Interface rapide</h3>
                    <p>Navigation fluide, rapide et optimisée.</p>
                </div>
                </div>
            </div>
        </section>
       

    </>
  );
}
