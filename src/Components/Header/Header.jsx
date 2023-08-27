import React from "react";
import ModalCityWindow from "../ModalCity/modalCity";
import { NavLink } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import SearchBar from "material-ui-search-bar";
import { BiPhoneCall } from "react-icons/bi";
import { TbMapSearch } from "react-icons/tb";
import { BsFillBagHeartFill } from "react-icons/bs";
import { PiScalesFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";
import { ReactComponent as GPUSVG } from "../Images/video-card-svgrepo-com.svg";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineApple } from "react-icons/ai";
import { BsTv, BsSpeaker } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ReactComponent as MyLogo } from "../Images/mozok_svg.svg";
import SwiperBox from "../SwiperBox/SwiperBox";
import SmallSwiperBox from "../SwiperBox/SmallSwiperBox1";
import ImageBanner from "../Images/s11.jpg";
import SlimImageBanner from "../Images/slimBanner.png";
import { HeaderBtns } from "../HeaderBtns/HeaderBtns";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const changeHeader = () => {
    const header = document.getElementById("header");
    header.style.position = "fixed";
  };
  const changeHeaderBack = (header, cont) => {
    const catalog = document.getElementById("catalog");
    const content = document.getElementById("content");
    header.style.position = "relative";
    changeCatalogBack(catalog, content);
  };
  const isSticky = () => {
    const header = document.getElementById("header");
    const cont = document.getElementById("content");
    const scrollTop = window.pageYOffset;
    scrollTop >= 500
      ? changeHeader(header, cont)
      : changeHeaderBack(header, cont);
  };

  const changeCatalog = (catalog, content) => {
    catalog.style.boxShadow = "0px 0px 5px 1px rgba(20, 126, 197,0.58)";
    catalog.style.position = "fixed";
  };
  const changeCatalogBack = (catalog, content) => {
    setCClick(false);
    catalog.style.position = "relative";
    catalog.style.boxShadow = "0px 0px 5px 1px rgba(20, 126, 197,0.58)";
  };
  const [cclick, setCClick] = useState(false);
  const handleClickCatalog = () => {
    setCClick(true);
    const catalog = document.getElementById("catalog");
    const main = document.getElementById("content");
    const scrollTop = window.pageYOffset;
    if (cclick === true) {
      changeCatalogBack(catalog, main);
    } else {
      scrollTop >= 500 ? changeCatalog(catalog, main) : setCClick(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <>
      <header className={s.header} id="header">
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
            <HeaderBtns />
          </div>
          <div className={s.enterContainer}>
            <IconContext.Provider value={{ className: s.enterBtn }}>
              <IoEnterOutline />
            </IconContext.Provider>
            Увійти
          </div>
        </div>
        <div className={s.lineContainer}>
          <div className={s.line} />
        </div>

        <div className={s.topContainerTwo}>
          <div
            role="button"
            className={s.catalog}
            onClick={() => handleClickCatalog()}
          >
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

      <div className={s.topBannersContainer}>
        <div id="catalog" className={s.topBannerHeader}>
          <li>
            <AiOutlineLaptop />
            Ноутбуки і комп'ютери
          </li>
          <hr />
          <li>
            <GPUSVG />
            Комплектуючі для ПК
          </li>
          <hr />
          <li>
            <IoIosPhonePortrait />
            Смартфони та планшети
          </li>
          <hr />
          <li>
            <AiOutlineApple />
            Техніка Apple
          </li>
          <hr />
          <li>
            <BsTv />
            Монітори та аксесуари
          </li>
          <hr />
          <li>
            <BsTv />
            Телевізори і проектори
          </li>
          <hr />
          <li>
            <BsSpeaker />
            Аудіо обладнання
          </li>
          <hr />
          <li>
            <GPUSVG />
            Комплектуючі для ПК
          </li>
          <hr />
          <li>
            <IoIosPhonePortrait />
            Смартфони та планшети
          </li>
          <hr />
          <li>
            <AiOutlineApple />
            Техніка Apple
          </li>
          <hr />
          <li>
            <BsTv />
            Монітори та аксесуари
          </li>
        </div>
      </div>

      <SwiperBox></SwiperBox>
      <SmallSwiperBox></SmallSwiperBox>
      <img className={s.ImageBanner} src={ImageBanner} alt="picture1" />

      <img className={s.SlimImageBanner} src={SlimImageBanner} alt="picture2" />
      <div className={s.bottomBannersContainer}>
        <li>
          <AiOutlineLaptop />
        </li>

        <li>
          <GPUSVG />
        </li>

        <li>
          <IoIosPhonePortrait />
        </li>

        <li>
          <AiOutlineApple />
        </li>

        <li>
          <BsTv />
        </li>

        <li>
          <BsSpeaker />
        </li>
      </div>
    </>
  );
};

export default Header;
