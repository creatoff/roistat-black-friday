import { useState } from "react";
import { Button } from "./components/Button";
import { Tape } from "./components/Tape";
import { Registration } from "./components/Registration";

export function App() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleRegistrationButtonClick = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleRegistrationModalClose = () => {
    setIsRegistrationModalOpen(false);
  }

  return (
    <>
      <div className="layout">
        <header className="header glassed">
          <div className="logo"></div>
          <nav className="header__menu menu">
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
        <main className="slide">
          <div className="container">
              <div className="glow-ellipse"></div>
              <div className="slide__hero"></div>
              <article className="slide__content">
                <p>
                  Воспользуйтесь выгодными предложениями от&nbsp;Roistat в&nbsp;ноябре*
                </p>
                <Button onClick={handleRegistrationButtonClick}>Получить выгоду</Button>
              </article>
              <div className="slide__disclaimer">
                *Акция не&nbsp;распространяется на&nbsp;подключение опций, лимитов, которые были подключены ранее до&nbsp;1.11.2023<br />Количество предложений ограничено
              </div>
            </div>
            <Tape className="slide__tape" angle={12.47} textColor="#8F8FFF" dividerColor="#FE64FA" />
            <Tape className="slide__tape" angle={4.8} bias={-80} textColor="#FFEB1C" dividerColor="#8F8FFF" />
        </main>
      </div>
      <Registration isOpen={isRegistrationModalOpen} onClose={ handleRegistrationModalClose } />
    </>
  );
}

