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
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import SignUp from "./../Auth/SignUp";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";
import Comparison from "../Comparison/Comparison";
import LikedProducts from "./../LikedProducts/LikedProducts";
import TrackOrder from "./../TrackOrder/TrackOrder";
import OrderCall from "./../OrderCall/OrderCall";
import Basket from "./../Basket/Basket";
import PurchaseForm from "./../PurchaseForm/PurchaseForm";
const Header = ({
  productsToCompare,
  setProductsToCompare,
  setMyUser,
  myUser,
  likedProducts,
  setLikedProducts,
  basketProducts,
  setBasketProducts,
  userInfo,
}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showLikedProducts, setShowLikedProducts] = useState(false);
  const [showTrackOrder, setShowTrackOrder] = useState(false);
  const [showOrderCall, setShowOrderCall] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  useEffect(() => {
    if (showComparison) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showComparison, showLikedProducts, showTrackOrder]);
  const closeSignIn = () => {
    setShowAuth(false);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  };
  const openSignIn = () => {
    setShowAuth(true);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    body.style.scrollbarGutter = "stable";
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

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Користувач вийшов");
        toast(
          "Помилка при створенні аккаунту. Перевірте дані та спробуйте знову."
        );
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

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setMyUser(user);
        console.log("User ID: ", myUser.uid);
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
  }, []);

  const db = getFirestore();
  const [loggedUser, setLoggedUser] = useState();
  useEffect(() => {
    if (myUser && myUser.uid != null) {
      // Check if userID is defined and non-empty
      const userDocRef = doc(db, "users", myUser.uid);

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
  }, [myUser, db]);

  const handleShowLikedProducts = () => {
    if (likedProducts.length >= 1) {
      setShowLikedProducts(true);
    } else {
      toast.error(
        "Для перегляду списку бажаних товарів увійдіть до акаунту або зареєструйтеся."
      );
    }
  };
  const handleShowComparison = () => {
    if (productsToCompare.length >= 2) {
      setShowComparison(true);
    } else {
      toast.error("Додайте хоча б 2 товари для порівняння.");
    }
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
              <div className={s.enterContainer}>
                <div className={s.exitContainer} onClick={() => SignOut()}>
                  <IconContext.Provider value={{ className: s.enterBtn }}>
                    <IoEnterOutline />
                  </IconContext.Provider>
                  Вийти
                </div>
                <NavLink to="/mozok/user">
                  <div className={s.userContainer}>
                    <IconContext.Provider value={{ className: s.enterBtn }}>
                      <FaRegUser />
                    </IconContext.Provider>
                    {loggedUser && loggedUser.name}
                  </div>
                </NavLink>
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
                autoFocus
                styling={{ height: "36px", borderRadius: "1px" }}
                placeholder="Пошук товарів..."
                showNoResultsText="Не знайдено"
              />
            </div>

            <div className={s.orderCall} onClick={() => setShowOrderCall(true)}>
              <BiPhoneCall />
              <div> Замовити дзвінок</div>
            </div>
            <div
              className={s.searchOrder}
              onClick={() => setShowTrackOrder(true)}
            >
              <TbMapSearch />
              <div> Відстежити замовлення</div>
            </div>
            <div
              className={s.wishedProducts}
              onClick={() => handleShowLikedProducts()}
            >
              <BsFillBagHeartFill />
              <div> Бажані товари</div>
            </div>
            <div
              className={s.comperedProducts}
              onClick={() => handleShowComparison()}
            >
              <PiScalesFill />
              <div> Порівняти товари</div>
            </div>
            <div className={s.cart} onClick={() => setShowBasket(true)}>
              <GiShoppingCart />
              <div className={s.basketItemsNumber}>{basketProducts.length}</div>
            </div>
          </div>
        </div>
      </header>
      {cclick && (
        <motion.div>
          <CatalogHeaderModal setCClick={setCClick} />
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
      {showComparison && (
        <>
          <Comparison
            productsToCompare={productsToCompare}
            showComparison={showComparison}
            setShowComparison={setShowComparison}
            setProductsToCompare={setProductsToCompare}
          />
        </>
      )}
      {showLikedProducts && (
        <>
          <LikedProducts
            setShowLikedProducts={setShowLikedProducts}
            likedProducts={likedProducts}
            setLikedProducts={setLikedProducts}
            setBasketProducts={setBasketProducts}
            setShowBasket={setShowBasket}
          />
        </>
      )}
      {showTrackOrder && (
        <>
          <TrackOrder setShowTrackOrder={setShowTrackOrder} />
        </>
      )}
      {showOrderCall && (
        <>
          <OrderCall setShowOrderCall={setShowOrderCall} />
        </>
      )}
      {showBasket && (
        <>
          <Basket
            setShowBasket={setShowBasket}
            basketProducts={basketProducts}
            setBasketProducts={setBasketProducts}
            setShowCheckOut={setShowCheckOut}
          />
        </>
      )}
      {showCheckOut && (
        <>
          <PurchaseForm
            setShowCheckOut={setShowCheckOut}
            basketProducts={basketProducts}
            myUser={myUser}
            userInfo={userInfo}
            setBasketProducts={setBasketProducts}
            setShowBasket={setShowBasket}
          />
        </>
      )}
    </>
  );
};

export default Header;
