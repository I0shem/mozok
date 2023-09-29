import React from "react";
import ModalCityWindow from "../ModalCity/modalCity";
import { NavLink } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { BiPhoneCall } from "react-icons/bi";
import { TbMapSearch } from "react-icons/tb";
import { BsFillBagHeartFill } from "react-icons/bs";
import { PiScalesFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { FaBars, FaRegUser } from "react-icons/fa";
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
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import SignUp from "./../Auth/SignUp";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isUserSignIn, setIsUserSignIn] = useState(false);

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
    const catalog = document.getElementById("catalog");
    const scrollTop = window.pageYOffset;
    if (!catalog || scrollTop >= 500) {
      setCClick(!cclick);
    }
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
      } else {
        setIsUserSignIn(false);
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

  ///search
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const auth = getAuth();
  const [userID, setUserID] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid);
        console.log("User ID: ", user.uid);
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
  }, []);

  const db = getFirestore();
  const [loggedUser, setLoggedUser] = useState();
  useEffect(() => {
    if (userID) {
      // Check if userID is defined and non-empty
      const userDocRef = doc(db, "users", userID);

      const getUserData = async () => {
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          console.log("User data:", docSnap.data());
          setLoggedUser(docSnap.data());
        } else {
          console.log("No such document!");
        }
      };

      getUserData();
    }
  }, [userID, db]);

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
              <div className={s.enterContainer}>
                <div className={s.exitContainer} onClick={() => SignOut()}>
                  <IconContext.Provider value={{ className: s.enterBtn }}>
                    <IoEnterOutline />
                  </IconContext.Provider>
                  Вийти
                </div>
                <div className={s.userContainer}>
                  <IconContext.Provider value={{ className: s.enterBtn }}>
                    <FaRegUser />
                  </IconContext.Provider>
                  {loggedUser && loggedUser.name}
                </div>
              </div>
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
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                formatResult={formatResult}
                onFocus={handleOnFocus}
                autoFocus
                styling={{ height: "36px", borderRadius: "1px" }}
                placeholder="Пошук товарів..."
                showNoResultsText="Не знайдено"
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
      </header>
      {cclick && (
        <motion.div>
          <CatalogHeaderModal />
        </motion.div>
      )}
      {showAuth && (
        <>
          <SignIn closeSignIn={closeSignIn} setShowSignUp={setShowSignUp} />
        </>
      )}
      {showSignUp && (
        <>
          <SignUp openSignIn={openSignIn} setShowSignUp={setShowSignUp} />
        </>
      )}
      {showPopUpLoggedOutUser && (
        <WelcomePoUp ftext="Успішний вихід" stext="До нових покупок!" />
      )}
    </>
  );
};

export default Header;
