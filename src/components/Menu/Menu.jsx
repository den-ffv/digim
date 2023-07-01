import "./Menu.scss";
import logo from "../../../public/assets/DIGIM-logo.svg";
function Menu({ active, menuItems, setAcvive }) {
  return (
    <div onClick={() => setAcvive(false)}>
      <div
        className={active ? "menu menu-active" : "menu"}
      
      >
        <a href='/'>
          <img className='header__logo' src={logo} alt='' />
        </a>
        {menuItems.map((menuItem, index) => (
          <li key={index} className='menu__list'>
            <a href={menuItem.href}>{menuItem.value}</a>
          </li>
        ))}
        <button className='menu-btn'>Request a quote</button>
      </div>
      <div
        className={active ? "menu__footer menu__footer-active" : "menu__footer"}
      >
        <p>@2023</p>
      </div>
    </div>
  );
}

export default Menu;
