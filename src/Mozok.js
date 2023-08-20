import { Navigation } from "./Components/navigation";
import s from "./Mozok.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Stores from "./Components/Stores/Stores";
import User from "./Components/User/User";
import ServiceCentre from "./Components/ServiceCentre/ServiceCentre";
import Basket from "./Components/Basket/Basket";
import Deals from "./Components/Deals/Deals";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import Home from "./Components/Home/Home";
import { ReactComponent as MyLogo } from "./Components/Images/mozok_svg.svg";
import React, { useState } from "react";
import ModalCityWindow from "./modalCity";

function Mozok() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className={s.mozok}>
      <header className={s.header}>
        <div className={s.containerOne}>
          <div className={s.logo} onClick={() => navigate(`/mozok/`)}>
            <MyLogo className={s.logoImage} />
            Mozok
          </div>
          <div></div>
          <ModalCityWindow show={show} setShow={setShow} />
          <div className={s.pages}>
            <Navigation text="Головна" adress="/mozok/" />
            <Navigation text="Магазини" adress="/mozok/Stores" />
            <Navigation text="Клієнтам" adress="/mozok/User" />
            <Navigation text="Сервіс" adress="/mozok/ServiceCentre" />
            <Navigation text="Акції" adress="/mozok/Basket" col="red" />
          </div>
        </div>

        <div className={s.line} />
        <div className={s.topContainerTwo}>
          <div className={s.catalog}>
            <IconContext.Provider value={{ className: s.headerBtn }}>
              <FaBars />
            </IconContext.Provider>
            <div className={s.catalogText}>КАТАЛОГ ТОВАРІВ</div>
          </div>
        </div>
      </header>
      <main className={s.content}>
        <Routes>
          <Route path="/mozok/" element={<Home />} />
          <Route path="/mozok/Stores" element={<Stores />} />
          <Route path="/mozok/User" element={<User />} />
          <Route path="/mozok/Deals" element={<Deals />} />
          <Route path="/mozok/ServiceCentre" element={<ServiceCentre />} />
          <Route path="/mozok/Basket" element={<Basket />} />
        </Routes>
      </main>
      <footer className={s.footer}></footer>
    </div>
  );
}

export default Mozok;
