import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AirPods from'../../assets/AirPods-Max.png'
import  BestSellers  from '../../db';
import ProductsCard from '../../Components/Products/ProductsCard';


export default function Home() {
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
                <span>View All Products</span>
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
            <div className='cards'>
                {BestSellers.map((item,index)=>(
                    <ProductsCard key={index} product={item}/>
                ))}
            </div>
        </section>
    </>
  );
}
