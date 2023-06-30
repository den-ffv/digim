import "./Footer.scss";
import logo from "../../assets/DIGIM-logo.svg";
import linkedin from "../../assets/linkedin.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"

function Footer({ menuItems }) {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <a href='/'>
          <img className='footer__logo' src={logo} alt='' />
        </a>
        <nav>
          <ul className='footer__nav'>
            {menuItems.map((menuItem, index) => (
              <li key={index} className='footer__list'>
                <a href={menuItem.href}>{menuItem.value}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__social-media">
          <a className="footer__social-media-link" href="https://www.linkedin.com/in/bohdan-chokhlenko/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="" />
          </a>
          <a className="footer__social-media-link" href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="" />
          </a>
          <a className="footer__social-media-link" href="https://twitter.com/wwwofficial1" target="_blank" rel="noreferrer">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
      <div className="form-content">
        <div className="form-content__contact-us">
          <p className="form-content__contact-us-title">Contact us:</p>
          <p className="form-content__contact-us-text">Email: info@digim.com</p>
          <p className="form-content__contact-us-text">Phone: 123-456-7890</p>
          <p className="form-content__contact-us-text">Address: 1234 Main St Dhyey Joshi City, DJ-018</p>
        </div>
        <form className="footer-form">
          <input className="footer-form__input" type="email" placeholder="Email"/>
          <button className="footer-form__button">Subscribe to news</button>
        </form>
      </div>
      <div className="footer__privacy-policy">
        <p>© 2023 Digim. All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
