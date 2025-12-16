import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

export default function Footer (){
    return(
        <>
         

            <footer className="site-footer">
                <div className="footer-container">
                    {/* Site Title */}
                    <div className="footer-brand">
                    <h2>ShopTech</h2>
                    <p>© {new Date().getFullYear()} ShopTech. Tous droits réservés.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="footer-links">
                    <h3>Navigation</h3>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faHome} className="footer-icon" /> 
                        <a href="#home">Home</a>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faList} className="footer-icon" /> 
                        <a href="#catalogue">Catalogue</a>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faHeart} className="footer-icon" /> 
                        <a href="#wishlist">Wish List</a>
                        </li>
                    </ul>
                    </div>

                    {/* Optional Support */}
                    <div className="footer-links">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#privacy">Politique de confidentialité</a></li>
                    </ul>
                    </div>
                </div>
            </footer>


        </>
    )
}