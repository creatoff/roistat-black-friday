import { useState } from "react";
import SandwichIcon from "../assets/sandwich.svg?react";
import CloseIcon from "../assets/close.svg?react";

export function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className="header glassed">
      <div className="logo"></div>
      <div
        onClick={() => setIsMenuOpened((state) => !state)}
        className="header__sandwich"
      >
        {isMenuOpened ? <CloseIcon /> : <SandwichIcon /> }
      </div>
      <nav
        className="header__menu menu"
        style={{ display: isMenuOpened ? "flex" : "" }}
      >
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">
              Наши предложения
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Цены
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
