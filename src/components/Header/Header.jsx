import { useState } from "react";
import logo from "../../assets/DIGIM-logo.svg";
import "./Header.scss";
import Menu from "../Menu/Menu";
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  console.log(menuActive);
  const menuItems = [
    { value: "About us", href: "/" },
    { value: "Services", href: "/" },
    { value: "Use Cases", href: "/" },
    { value: "Pricing", href: "/" },
    { value: "Blog", href: "/" },
  ];
  return (
    <>
      <hedaer className='header'>
        <a href='/'>
          <img className='header__logo' src={logo} alt='' />
        </a>
        <nav>
          <ul className='header__nav'>
            {menuItems.map((menuItem, index) => (
              <li key={index} className='header__list'>
                <a href={menuItem.href}>{menuItem.value}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className='header__button'>Request a quote</button>
        <div
          onClick={() => setMenuActive(!menuActive)}
          className={
            menuActive ? "menu-button menu-button-active" : "menu-button"
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </hedaer>
      <Menu
        active={menuActive}
        menuItems={menuItems}
        setAcvive={setMenuActive}
      />
    </>
  );
}

export default Header;
