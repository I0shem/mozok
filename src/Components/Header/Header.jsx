import React from "react";
import ModalCityWindow from "../ModalCity/modalCity";
import { NavLink } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import ReactSearchBox from "react-search-box";
import { BiPhoneCall } from "react-icons/bi";
import { TbMapSearch } from "react-icons/tb";
import { BsFillBagHeartFill } from "react-icons/bs";
import { PiScalesFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ReactComponent as MyLogo } from "../Images/mozok_svg.svg";
import { HeaderBtns } from "../HeaderBtns/HeaderBtns";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./Header.module.css";
import CatalogHeaderModal from "./CatalogHeaderModal";
import { motion } from "framer-motion";
import SignIn from "../Auth/SignIn";
import WelcomePoUp from "../WelcomePoUp/WelcomePoUp";
import { auth } from "../Auth/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const [myUser, setMyUser] = useState(null);
  const closeSignIn = () => {
    setShowAuth(false);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  };
  const openSignIn = () => {
    setShowAuth(true);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  };
  const changeHeader = (catalog, content) => {
    const header = document.getElementById("header");
    header.style.position = "fixed";
    content.style.marginTop = "12vh";
  };
  const changeHeaderBack = (header, cont) => {
    const content = document.getElementById("content");
    header.style.position = "relative";
    content.style.marginTop = "0vh";
    setCClick(false);
  };
  const isSticky = () => {
    const header = document.getElementById("header");
    const cont = document.getElementById("content");
    const scrollTop = window.pageYOffset;
    scrollTop >= 500
      ? changeHeader(header, cont)
      : changeHeaderBack(header, cont);
  };

  const [cclick, setCClick] = useState(false);
  const handleClickCatalog = () => {
    const scrollTop = window.pageYOffset;
    scrollTop >= 500 ? setCClick(!cclick) : <></>;
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserSignIn(true);
        setMyUser(user);
      } else {
        setIsUserSignIn(false);
        setMyUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const [showPopUpLoggedOutUser, setShowPopUpLoggedOutUser] = useState(false);
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Користувач вийшов");
        setShowPopUpLoggedOutUser(true);
        setTimeout(() => setShowPopUpLoggedOutUser(false), 5000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <header className={s.header} id="header">
        <div className={s.headerContainer}>
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
            <HeaderBtns />
            {isUserSignIn ? (
              <>
                <div className={s.enterContainer} onClick={() => SignOut()}>
                  <IconContext.Provider value={{ className: s.enterBtn }}>
                    <IoEnterOutline />
                  </IconContext.Provider>
                  Вийти
                  <div> {myUser.email}</div>
                </div>
              </>
            ) : (
              <>
                <div className={s.enterContainer} onClick={() => openSignIn()}>
                  <IconContext.Provider value={{ className: s.enterBtn }}>
                    <IoEnterOutline />
                  </IconContext.Provider>
                  Увійти
                </div>
              </>
            )}
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
            <div className={s.searchBar}>
              <ReactSearchBox
                placeholder="Знайти..."

                // data={this.data} An array of objects which acts as the source of data for the dropdown. This prop is required
                // onChange={() => console.log("onChange")}
                // callback={(record) => console.log(record)}
              />
            </div>

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
        </div>
      </header>{" "}
      {cclick ? (
        <motion.div>
          <CatalogHeaderModal />
        </motion.div>
      ) : (
        <></>
      )}
      {showAuth ? (
        <>
          <SignIn closeSignIn={closeSignIn} />
        </>
      ) : (
        <></>
      )}{" "}
      {showPopUpLoggedOutUser ? (
        <WelcomePoUp ftext="Успішний вихід" stext="До нових покупок!" />
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
