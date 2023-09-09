import s from "./Mozok.module.css";
import { Routes, Route } from "react-router-dom";
import Stores from "./Components/Stores/Stores";
import User from "./Components/User/User";
import ServiceCentre from "./Components/ServiceCentre/ServiceCentre";
import Promotion from "./Components/Promotion/Promotion";
import LoyaltyProgram from "./Components/LoyaltyProgram/LoyaltyProgram";
import Home from "./Components/Home/Home";
import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import { ReactComponent as LogoAnimatedSVG } from "./Components/Images/mozokcss_animated.svg";
import Header from "./Components/Header/Header";
import ProductPage from "./Components/ProductPage/ProductPage";

function Mozok() {
  const [logo, setLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLogo(false);
    }, 3000);
  }, []);

  return (
    <>
      {logo ? (
        <div className={s.logoAnimatedContainer}>
          <LogoAnimatedSVG className={s.logoAnimated} />
          Одну хвилинку!
        </div>
      ) : (
        <div id="myBody" className={s.noScroll}>
          <Header />
          <main id="content" className={s.PageContent}>
            <Routes>
              <Route path="/mozok/" element={<Home />} />
              <Route path="/mozok/stores" element={<Stores />} />
              <Route path="/mozok/users" element={<User />} />
              <Route
                path="/mozok/loyalty_program"
                element={<LoyaltyProgram />}
              />
              <Route
                path="/mozok/productpage/:productName"
                element={<ProductPage />}
              />
              <Route path="/mozok/service_centre" element={<ServiceCentre />} />
              <Route path="/mozok/promotion" element={<Promotion />} />
            </Routes>
          </main>
          <footer className={s.footer}>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
}

export default Mozok;
