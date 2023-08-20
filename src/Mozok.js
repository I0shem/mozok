import { HeaderBtn } from "./Components/HeaderBtn";
import s from "./Mozok.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Stores from "./Components/Stores/Stores";
import User from "./Components/User/User";
import ServiceCentre from "./Components/ServiceCentre/ServiceCentre";
import Promotion from "./Components/Promotion/Promotion";
import LoyaltyProgram from "./Components/LoyaltyProgram/LoyaltyProgram";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import Home from "./Components/Home/Home";
import { ReactComponent as MyLogo } from "./Components/Images/mozok_svg.svg";
import React, { useState } from "react";
import ModalCityWindow from "./modalCity";
import { NavLink } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import SearchBar from "material-ui-search-bar";
import { BiPhoneCall } from "react-icons/bi";
import { TbMapSearch } from "react-icons/tb";
import { BsFillBagHeartFill } from "react-icons/bs";
import { PiScalesFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
function Mozok() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [weight, setWeight] = useState(300);
  const [weight1, setWeight1] = useState(300);
  return (
    <div className={s.mozok}>
      <header className={s.header}>
        <div className={s.containerOne}>
          <div className={s.logo} onClick={() => navigate(`/mozok/`)}>
            <NavLink to="/mozok" end>
              <MyLogo className={s.logoImage} />
            </NavLink>
            Mozok
          </div>
          <div className={s.changeCity}>
            <ModalCityWindow show={show} setShow={setShow} />
          </div>

          <div className={s.HeaderBtns}>
            <NavLink
              to="/mozok/stores"
              className={s.Link}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? setWeight1(600) : setWeight1(300),
                };
              }}
            >
              <HeaderBtn
                displayModal={false}
                text="Магазини"
                weight={weight1}
              />
            </NavLink>
            <HeaderBtn
              displayModal={true}
              text="Програма лояльності"
              content={["Про програму лояльності", "Подарункові сертифікати"]}
            />
            <HeaderBtn
              displayModal={true}
              text="Клієнтам"
              content={[
                "Уцінені товари",
                "Доставка та оплата",
                "Mozok Блог",
                "Публічна оферта",
                "Контакти",
                "Всі бренди",
              ]}
            />
            <HeaderBtn
              displayModal={true}
              text="Сервіс"
              content={["Сервісні центри", "Сервіс і гарантія"]}
            />
            <NavLink
              to="/mozok/promotion"
              className={s.Link}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? setWeight(600) : setWeight(300),
                };
              }}
            >
              <HeaderBtn
                displayModal={false}
                col="red"
                weight={weight}
                text="Акції"
              />
            </NavLink>
          </div>
          <div className={s.enterContainer}>
            <IconContext.Provider value={{ className: s.enterBtn }}>
              <IoEnterOutline onClick={() => setShow(!show)} />{" "}
            </IconContext.Provider>{" "}
            Увійти
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

          <SearchBar
            className={s.searchBar}
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            placeholder="Знайти..."
          />
          <div className={s.orderCall}>
            <BiPhoneCall />
            <div> Замовити дзвінок</div>
          </div>
          <div className={s.searchOrder}>
            <TbMapSearch />
            <div> Відстежити замовлення</div>
          </div>
          <div className={s.wishedProducts}>
            <BsFillBagHeartFill />
            <div> Бажані товари</div>
          </div>
          <div className={s.comperedProducts}>
            <PiScalesFill />
            <div> Порівняти товари</div>
          </div>
          <div className={s.cart}>
            <GiShoppingCart />
          </div>
        </div>
      </header>
      <main className={s.content}>
        <Routes>
          <Route path="/mozok/" element={<Home />} />
          <Route path="/mozok/stores" element={<Stores />} />
          <Route path="/mozok/users" element={<User />} />
          <Route path="/mozok/loyalty_program" element={<LoyaltyProgram />} />
          <Route path="/mozok/service_centre" element={<ServiceCentre />} />
          <Route path="/mozok/promotion" element={<Promotion />} />
        </Routes>
      </main>
      <footer className={s.footer}></footer>
    </div>
  );
}

export default Mozok;
